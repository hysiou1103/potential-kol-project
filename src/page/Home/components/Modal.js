import React, { useState, useEffect, useRef } from 'react'

export default function Modal(props) {
  const { openModal } = props
  const [photoName, setPhotoName] = useState('')
  const modalShow = useRef()
  const imgShow = useRef()
  const imgUpload = useRef()

  useEffect(() => {
    openModal ? modalShow.current.classList.add('show') : modalShow.current.classList.remove('show')
  }, [openModal])

  const handleChange = () => {
    if (imgUpload.current.files && imgUpload.current.files[0]) {
      const reader = new FileReader()
      reader.onload = function (e) {
        imgShow.current.src = e.target.result
        const arrayBuffer = reader.result
        console.log(arrayBuffer)
      }

      reader.readAsDataURL(imgUpload.current.files[0])
      setPhotoName(imgUpload.current.files[0].name)
    }
  }
  return (
    <div className="modalBg" ref={modalShow}>
      <div className="modalWrap">
        <div className="modalHeader">
          <p>上傳檔案</p>
          <span className="closeIcon" onClick={props.handleModal} />
        </div>
        <div className="modalBody">
          <div className="photoGroup">
            <label htmlFor="photo">上傳圖片</label>
            <input type="file" id="photo" ref={imgUpload} onChange={handleChange} />
          </div>
          <div className="fileGroup">
            {imgUpload.current && imgUpload.current.files[0] && (
              <img ref={imgShow} alt="signUpPhoto" />
            )}
          </div>
        </div>
        <div className="modalFooter">
          <button className="modalBtn cancel" onClick={props.handleModal}>
            取消
          </button>
          <button className="modalBtn submit">確定</button>
        </div>
      </div>
    </div>
  )
}
