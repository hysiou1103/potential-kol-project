import React, { useState, useEffect, useRef, useContext } from 'react'
import { FormContext } from './Form'
import style from './modal.module.scss'

export default function Modal() {
  const { state, dispatch } = useContext(FormContext)
  const { openModal = false, signUpData = {}, photoIndex = 'photo1' } = state

  useEffect(() => {
    signUpData[photoIndex] &&
      signUpData[photoIndex].src &&
      setPhotoObj({
        src: signUpData[photoIndex].src,
        fileName: signUpData[photoIndex].fileName
      })
  }, [signUpData])

  const [photoObj, setPhotoObj] = useState({
    src: '',
    fileName: '上傳檔案'
  })
  const imgUpload = useRef()
  const handleChange = () => {
    if (imgUpload.current.files && imgUpload.current.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        const arrayBuffer = reader.result
        setPhotoObj({
          src: arrayBuffer,
          fileName: imgUpload.current.files[0].name
        })
      }
      reader.readAsDataURL(imgUpload.current.files[0])
    }
  }
  const modalController = status => {
    dispatch({ type: 'CHANGE_MODAL_MODE' })
    if (status === 'cancel') {
      setPhotoObj({
        src: '',
        fileName: ''
      })
      imgUpload.current.value = ''
      return
    }
    dispatch({
      type: 'CREATE_SIGNUPDATA',
      payload: {
        dataKey: photoIndex,
        dataValue: photoObj
      }
    })
  }

  return (
    <div
      className={`${style.modalBg} ${openModal ? style.show : ''} items-center justify-center z-1`}
    >
      <div className={`${style.modalWrap} w-full`}>
        <div className={`${style.modalHeader} flex justify-between`}>
          <p>{photoObj.fileName}</p>
          <span
            className={`${style.closeIcon} relative z-0`}
            onClick={() => {
              modalController('cancel')
            }}
          />
        </div>
        <div className={style.modalBody}>
          <div className="flex justify-between items-center">
            <label htmlFor="photo">上傳圖片</label>
            <input type="file" id="photo" ref={imgUpload} onChange={handleChange} />
          </div>
          <div className={`${style.fileGroup} w-full`}>
            {photoObj.src && <img src={photoObj.src} alt="signUpPhoto" />}
          </div>
        </div>
        <div className={`${style.modalFooter} flex justify-center`}>
          <button
            className={`${style.modalBtn} ${style.cancel}`}
            onClick={() => {
              modalController('cancel')
            }}
          >
            取消
          </button>
          <button
            className={`${style.modalBtn} ${style.submit}`}
            onClick={() => {
              modalController('save')
            }}
          >
            確定
          </button>
        </div>
      </div>
    </div>
  )
}
