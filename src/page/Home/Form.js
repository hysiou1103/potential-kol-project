import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './components/Input'
import Selector from './components/Selector'
import UploadPhotoSection from './components/UploadPhotoSection'
import Modal from './components/Modal'
import { update_isValid, saving_fieldData, initialize } from './formSlice'
import signUpForm from 'imgs/signUpForm.png'
import style from './form.module.scss'

export default function Form() {
  const dispatch = useDispatch()
  const signUpData = useSelector(state => state.signUpData)
  const isValid = useSelector(state => state.isValid)
  const photoIndex = useSelector(state => state.photoIndex)

  const navigate = useNavigate()
  const checkForm = e => {
    e.preventDefault()
    dispatch(update_isValid())
  }

  useEffect(() => {
    if (isValid) {
      dispatch(initialize())
      navigate(`/votingActive`)
    }
  }, [isValid])

  return (
    <>
      <img
        src={signUpForm}
        className={style.signUpImg}
        alt="Sign Up Form"
        width={620}
        height={155}
      />
      <div className={`${style.formWrap} w-full`}>
        <div className={`${style.inputGroup} flex`}>
          <label className="flex items-center" htmlFor="name">
            姓名
          </label>
          <div className={style.inputWrap}>
            <Input type="text" name="name" />
          </div>
        </div>
        <div className={`${style.inputGroup} flex`}>
          <label className="flex items-center" htmlFor="email">
            Email
          </label>
          <div className={style.inputWrap}>
            <Input type="email" name="email" />
          </div>
        </div>
        <div className={`${style.inputGroup} flex`}>
          <label className="flex items-center" htmlFor="phone">
            電話
          </label>
          <div className={style.inputWrap}>
            <Input type="tel" name="phone" maximun={12} />
          </div>
        </div>
        <div className={`${style.selectGroup} flex`}>
          <label className="flex items-center" htmlFor="group">
            報名組別
          </label>
          <div className={`${style.selectWrap}`}>
            <Selector name="groups" />
          </div>
        </div>
        <div className={`${style.inputGroup} flex`}>
          <label className="flex items-center" htmlFor="competitionID">
            參賽名稱
          </label>
          <div className={`${style.inputWrap} ${style.full}`}>
            <Input
              type="text"
              name="competitionID"
              width="full"
              placeholder="中英文20字內，不可輸入符號"
              maximun={20}
            />
          </div>
        </div>
        <div className={`${style.inputGroup} flex`}>
          <label className="flex items-center" htmlFor="selfIntro">
            介紹說明
          </label>
          <div className={`${style.inputWrap} ${style.full}`}>
            <Input
              type="text"
              name="selfIntro"
              width="full"
              placeholder="中英文字120字內"
              maximun={120}
            />
          </div>
        </div>
        <div className={`${style.selectGroup} flex`}>
          <label className="flex items-center" htmlFor="years">
            出生年月日
          </label>
          <div className={`${style.selectWrap} flex`}>
            <Selector name="years" width="1/3" />
            <Selector name="months" width="1/3" />
            <Selector name="days" width="1/3" />
          </div>
        </div>
        <div className={`${style.uploadGroup} flex`}>
          <UploadPhotoSection placeHolder={{ value: 'photo1', label: '照片1' }} />
        </div>
        <div className={`${style.uploadGroup} flex`}>
          <UploadPhotoSection placeHolder={{ value: 'photo2', label: '照片2' }} />
        </div>
        <div className={`${style.uploadGroup} flex`}>
          <UploadPhotoSection placeHolder={{ value: 'photo3', label: '照片3' }} />
        </div>
        <div className={`${style.selectGroup} flex`}>
          <label className="flex items-center" htmlFor="city">
            收件人地址
          </label>
          <div className={`${style.selectWrap} flex`}>
            <Selector name="city" width="1/2" />
            <Selector name="district" width="1/2" />
            <Input type="text" name="detailAddress" width="full" placeholder="請填寫詳細地址" />
            <p className={`${style.addressReminder} w-full`}>
              此收件人及地址為獎品寄送所需個資，請務必填寫正確，若未正確填寫，將視同放棄獎品!
            </p>
          </div>
        </div>
        <div className={`${style.policyAgreement} flex flex-col items-end`}>
          <div className={style.checkboxGroup}>
            <input
              type="checkbox"
              id="privacyPolicy"
              checked={signUpData.privacy.value}
              onChange={() => {
                dispatch(
                  saving_fieldData({ fieldName: 'privacy', fieldValue: !signUpData.privacy.value })
                )
              }}
            />
            <label htmlFor="privacyPolicy">
              我同意東森購物條款 <span className={style.popUP}>隱私權保護政策</span> 及
              <span className={style.popUP}>隱私聲明</span>。
            </label>
          </div>
          <div className={style.checkboxGroup}>
            <input
              type="checkbox"
              id="portraitRights"
              checked={signUpData.portrait.value}
              onChange={() => {
                dispatch(
                  saving_fieldData({
                    fieldName: 'portrait',
                    fieldValue: !signUpData.portrait.value
                  })
                )
              }}
            />
            <label htmlFor="portraitRights">
              我擁有投稿照片之所有權或業經合法授權，且絕無侵害他人之著作權、肖像權及違反任何法律規定；
              我同意照片一經上傳，東森購物即取得著作財產權。
            </label>
          </div>
        </div>
        <button className={style.formBtn} onClick={checkForm}>
          送出報名
        </button>
        <Modal key={photoIndex} />
      </div>
    </>
  )
}
