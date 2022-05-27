import React, { useContext } from 'react'
import uploadFile from 'imgs/uploadFile.png'
import { FormContext } from './Form'
import style from './uploadPhotoSection.module.scss'

export default function UploadPhotoSection({ placeHolder = {} }) {
  const { state, dispatch } = useContext(FormContext)
  const { signUpData = {} } = state
  const keyName = placeHolder.value
  return (
    <>
      <label className="flex items-center">上傳{placeHolder.label}</label>
      <div className={style.uploadWrap}>
        <button
          className={style.uploadBtn}
          onClick={() => {
            dispatch({
              type: 'UPDATE_PHOTOINDEX',
              payload: placeHolder.value
            })
            dispatch({
              type: 'CHANGE_MODAL_MODE'
            })
          }}
        >
          <img src={uploadFile} alt="Upload File Icon" width="22" height="15" />
          <span>選擇檔案</span>
        </button>
        <div className={style.fileInfor}>
          <p>{signUpData[keyName].value.fileName ? signUpData[keyName].value.fileName : null}</p>
          <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
        </div>
      </div>
    </>
  )
}
