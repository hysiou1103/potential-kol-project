import React, { useContext } from 'react'
import uploadFile from 'imgs/uploadFile.png'
import { useDispatch, useSelector } from 'react-redux'
import { change_modalMode, update_photoIndex } from '../formSlice'
import style from './uploadPhotoSection.module.scss'

export default function UploadPhotoSection({ placeHolder = {} }) {
  const dispatch = useDispatch()
  const chosenModal = useSelector(state => state.signUpData[placeHolder.value])
  return (
    <>
      <label className="flex items-center">上傳{placeHolder.label}</label>
      <div className={style.uploadWrap}>
        <button
          className={`${style.uploadBtn} flex justify-center items-center`}
          onClick={() => {
            dispatch(update_photoIndex(placeHolder.value))
            dispatch(change_modalMode())
          }}
        >
          <img src={uploadFile} alt="Upload File Icon" width="22" height="15" />
          <span>選擇檔案</span>
        </button>
        <div className={style.fileInfor}>
          <div className="flex items-center">
            <p>{chosenModal.value.fileName ? chosenModal.value.fileName : null}</p>
            {chosenModal.error && <span className="errMsg"> {chosenModal.error}</span>}
          </div>
          <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
        </div>
      </div>
    </>
  )
}
