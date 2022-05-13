import React from 'react'
import uploadFile from 'imgs/uploadFile.png'

export default function UploadPhotoSection(props) {
  const { fileName = '', placeHolder = {}, handleModal = () => {} } = props

  return (
    <>
      <label>上傳{placeHolder.label}</label>
      <div className="uploadWrap">
        <button
          className="uploadBtn"
          onClick={() => {
            handleModal(placeHolder.value)
          }}
        >
          <img src={uploadFile} alt="Upload File Icon" width="22px" height="15px" />
          <span>選擇檔案</span>
        </button>
        <div className="fileInfor">
          <p>{fileName ? fileName : null}</p>
          <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
        </div>
      </div>
    </>
  )
}
