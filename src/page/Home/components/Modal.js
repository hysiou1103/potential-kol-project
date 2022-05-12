import React, { useState, useEffect, useRef } from 'react'

export default function Modal(props) {
  const {
    openModal = false,
    photoIndex = '',
    signUpList = {},
    handleModal = () => {},
    createList = () => {}
  } = props
  const [photoName, setPhotoName] = useState('上傳檔案')
  const [imgSrc, setImgSrc] = useState('')
  const modalShow = useRef()
  const imgUpload = useRef()

  useEffect(() => {
    openModal ? modalShow.current.classList.add('show') : modalShow.current.classList.remove('show')
  }, [openModal])

  useEffect(() => {
    const nameKey = `${photoIndex}FileName`
    const srcKey = photoIndex
    signUpList[`${photoIndex}FileName`] && setPhotoName(signUpList[nameKey])
    signUpList[srcKey] && setImgSrc(signUpList[srcKey])
  }, [signUpList])

  const handleChange = () => {
    if (imgUpload.current.files && imgUpload.current.files[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        const arrayBuffer = reader.result
        setImgSrc(arrayBuffer)
      }
      reader.readAsDataURL(imgUpload.current.files[0])
      setPhotoName(imgUpload.current.files[0].name)
      createList(`${photoIndex}FileName`, imgUpload.current.files[0].name)
    }
  }
  const modalController = status => {
    handleModal(!openModal)
    if (status === 'cancel') {
      setPhotoName('')
      setImgSrc('')
      return
    }
    createList(photoIndex, imgSrc)
  }
  return (
    <div className="modalBg" ref={modalShow}>
      <div className="modalWrap">
        <div className="modalHeader">
          <p>{photoName}</p>
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
          <div className="fileGroup">{imgSrc && <img src={imgSrc} alt="signUpPhoto" />}</div>
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
