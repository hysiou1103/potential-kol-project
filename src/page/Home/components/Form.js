import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Selector from './Selector'
import UploadPhotoSection from './UploadPhotoSection'
import Modal from './Modal'
import { executeValidateField, validController } from 'config'
import signUpForm from 'imgs/signUpForm.png'
import style from './form.module.scss'

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { signUpData, photoIndex, isValid } = state

  useEffect(() => {
    dispatch({ type: 'UPDATE_ISVALID' })
  }, [signUpData])

  const navigate = useNavigate()
  const saveListInBrowser = e => {
    e.preventDefault()
    if (isValid) {
      const { years, months, days, city, ...otherItems } = signUpData
      const birthday = `${years.value}/${months.value}/${days.value}`
      const storageList = JSON.parse(localStorage.getItem('registInfor')) || []
      const tempStorageKey = Object.keys(otherItems)
      let tempStorageData = {}
      tempStorageKey.forEach(item => {
        tempStorageData = { ...tempStorageData, [item]: otherItems[item].value || otherItems[item] }
      })

      tempStorageData.birthday = birthday
      tempStorageData.id = storageList.length + 1

      storageList.push(tempStorageData)
      localStorage.setItem('registInfor', JSON.stringify(storageList))
      navigate(`/votingActive`)
    }
  }

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <img src={signUpForm} className={style.signUpImg} alt="Sign Up Form" />
      <form className={`${style.formWrap} w-full`} onSubmit={saveListInBrowser}>
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
          <div className={`${style.selectWrap} flex`}>
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
                dispatch({
                  type: 'SAVING_FIELD_DATA',
                  payload: { fieldName: 'privacy', fieldValue: !signUpData.privacy.value }
                })
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
                dispatch({
                  type: 'SAVING_FIELD_DATA',
                  payload: { fieldName: 'portrait', fieldValue: !signUpData.portrait.value }
                })
              }}
            />
            <label htmlFor="portraitRights">
              我擁有投稿照片之所有權或業經合法授權，且絕無侵害他人之著作權、肖像權及違反任何法律規定；
              我同意照片一經上傳，東森購物即取得著作財產權。
            </label>
          </div>
        </div>
        <button className={`${style.formBtn} ${!isValid ? style.disabled : ''}`}>送出報名</button>
        <Modal key={photoIndex} />
      </form>
    </FormContext.Provider>
  )
}

const reducer = (state, action) => {
  const { signUpData, openModal } = state
  let tempData = { ...signUpData }
  switch (action.type) {
    case 'UPDATE_PHOTOINDEX':
      return { ...state, photoIndex: action.payload }
    case 'UPDATE_ISVALID':
      const result = validController(signUpData)
      return { ...state, isValid: result }
    case 'CHANGE_MODAL_MODE':
      return { ...state, openModal: !openModal }
    case 'SAVING_FIELD_DATA':
      const { errMsg, encryptVal } = executeValidateField(action.payload)
      tempData = { ...signUpData }
      tempData[action.payload.fieldName].error = errMsg
      tempData[action.payload.fieldName].value = action.payload.fieldValue
      if (encryptVal) {
        tempData[action.payload.fieldName].encryptValue = encryptVal
      }
      return { ...state, signUpData: { ...tempData } }
    default:
      return state
  }
}

const initialState = {
  openModal: false,
  photoIndex: 'photo1',
  isValid: false,
  signUpData: {
    name: { value: '', error: '' },
    email: { value: '', error: '', encryptValue: '' },
    phone: { value: '', error: '' },
    groups: { value: 'default', error: '' },
    competitionID: { value: '', error: '' },
    selfIntro: { value: '', error: '' },
    years: { value: 'default', error: '' },
    months: { value: 'default', error: '' },
    days: { value: 'default', error: '' },
    city: { value: 'default', error: '' },
    district: { value: 'default', error: '' },
    detailAddress: { value: '', error: '' },
    photo1: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: ''
    },
    photo2: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: ''
    },
    photo3: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: ''
    },
    birthday: '',
    votes: 0,
    privacy: { value: false, error: '' },
    portrait: { value: false, error: '' }
  }
}

export const FormContext = React.createContext()
