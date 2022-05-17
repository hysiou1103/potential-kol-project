import React, { useState, useEffect, useRef } from 'react'

export default function Modal(props) {
  const {
    openModal = false,
    photoIndex = '',
    signUpData = {},
    handleModal = () => {},
    createSignUpData = () => {}
  } = props

  const modalShow = useRef()
  useEffect(() => {
    openModal ? modalShow.current.classList.add('show') : modalShow.current.classList.remove('show')
  }, [openModal])

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
    handleModal(!openModal)
    if (status === 'cancel') {
      setPhotoObj({
        src: '',
        fileName: ''
      })
      return
    }
    createSignUpData(photoIndex, photoObj)
  }

  return (
    <div className="modalBg" ref={modalShow}>
      <div className="modalWrap">
        <div className="modalHeader">
          <p>{photoObj.fileName}</p>
          <span
            className="closeIcon"
            onClick={() => {
              modalController('cancel')
            }}
          />
        </div>
        <div className="modalBody">
          <div className="photoGroup">
            <label htmlFor="photo">上傳圖片</label>
            <input type="file" id="photo" ref={imgUpload} onChange={handleChange} />
          </div>
          <div className="fileGroup">
            {photoObj.src && <img src={photoObj.src} alt="signUpPhoto" />}
          </div>
        </div>
        <div className="modalFooter">
          <button
            className="modalBtn cancel"
            onClick={() => {
              modalController('cancel')
            }}
          >
            取消
          </button>
          <button
            className="modalBtn submit"
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