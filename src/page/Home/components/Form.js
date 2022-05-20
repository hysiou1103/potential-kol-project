import React, { useRef, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Selector from './Selector'
import UploadPhotoSection from './UploadPhotoSection'
import Modal from './Modal'
import { requiredItem } from 'config'
import signUpForm from 'imgs/signUpForm.png'

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { privacy, portrait, reject, signUpData, photoIndex } = state

  useEffect(() => {
    dispatch({ type: 'CHANGE_REJECT' })
  }, [signUpData, privacy, portrait])

  const rejectBtn = useRef()
  useEffect(() => {
    reject
      ? rejectBtn.current.classList.add('disabled')
      : rejectBtn.current.classList.remove('disabled')
  }, [reject])

  const navigate = useNavigate()
  const saveListInBrowser = () => {
    if (reject) return
    const { years, months, days, city, ...tempStorageData } = signUpData
    const birthday = `${years}/${months}/${days}`
    const storageList = JSON.parse(localStorage.getItem('registInfor')) || []
    tempStorageData.birthday = birthday
    tempStorageData.id = storageList.length + 1
    storageList.push(tempStorageData)
    localStorage.setItem('registInfor', JSON.stringify(storageList))
    navigate(`/votingActive`)
  }

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <img src={signUpForm} alt="Sign Up Form" />
      <main className="formWrap">
        <div className="inputGroup">
          <label htmlFor="name">姓名</label>
          <div className="inputWrap">
            <Input type="text" name="name" />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <div className="inputWrap">
            <Input type="email" name="email" />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">電話</label>
          <div className="inputWrap">
            <Input type="tel" name="phone" maximun={12} />
          </div>
        </div>
        <div className="selectGroup">
          <label htmlFor="group">報名組別</label>
          <div className="selectWrap">
            <Selector name="groups" />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="competitionID">參賽名稱</label>
          <div className="inputWrap full">
            <Input
              type="text"
              name="competitionID"
              width="full"
              placeholder="中英文20字內，不可輸入符號"
              maximun={20}
            />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="selfIntro">介紹說明</label>
          <div className="inputWrap full">
            <Input
              type="text"
              name="selfIntro"
              width="full"
              placeholder="中英文字120字內"
              maximun={120}
            />
          </div>
        </div>
        <div className="selectGroup">
          <label htmlFor="years">出生年月日</label>
          <div className="selectWrap">
            <Selector name="years" width="1/3" />
            <Selector name="months" width="1/3" />
            <Selector name="days" width="1/3" />
          </div>
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection placeHolder={{ value: 'photo1', label: '照片1' }} />
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection placeHolder={{ value: 'photo2', label: '照片2' }} />
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection placeHolder={{ value: 'photo3', label: '照片3' }} />
        </div>
        <div className="selectGroup">
          <label htmlFor="city">收件人地址</label>
          <div className="selectWrap">
            <Selector name="city" width="1/2" />
            <Selector name="district" width="1/2" />
            <Input type="text" name="detailAddress" width="full" placeholder="請填寫詳細地址" />
            <p className="addressReminder">
              此收件人及地址為獎品寄送所需個資，請務必填寫正確，若未正確填寫，將視同放棄獎品!
            </p>
          </div>
        </div>
        <div className="policyAgreement">
          <div className="checkboxGroup">
            <input
              type="checkbox"
              id="privacyPolicy"
              value="privacy"
              checked={privacy}
              onChange={() => {
                dispatch({ type: 'CHANGE_PRIVACY' })
              }}
            />
            <label htmlFor="privacyPolicy">
              我同意東森購物條款 <span className="popUP">隱私權保護政策</span> 及
              <span className="popUP">隱私聲明</span>。
            </label>
          </div>
          <div className="checkboxGroup">
            <input
              type="checkbox"
              id="portraitRights"
              value="portrait"
              checked={portrait}
              onChange={() => {
                dispatch({ type: 'CHANGE_PORTRAIT' })
              }}
            />
            <label htmlFor="portraitRights">
              我擁有投稿照片之所有權或業經合法授權，且絕無侵害他人之著作權、肖像權及違反任何法律規定；
              我同意照片一經上傳，東森購物即取得著作財產權。
            </label>
          </div>
        </div>
        <button ref={rejectBtn} className="formBtn" onClick={saveListInBrowser}>
          送出報名
        </button>
        <Modal key={photoIndex} />
      </main>
    </FormContext.Provider>
  )
}

const reducer = (state, action) => {
  const { privacy, portrait, signUpData, openModal } = state
  switch (action.type) {
    case 'CHANGE_PRIVACY':
      return { ...state, privacy: !privacy }
    case 'CHANGE_PORTRAIT':
      return { ...state, portrait: !portrait }
    case 'CHANGE_REJECT':
      let complete = false
      let status = true
      try {
        requiredItem.forEach(item => {
          if (
            signUpData[item] === '' ||
            Object.values(signUpData[item]).some(value => value === '')
          ) {
            throw false
          }
          complete = true
        })
      } catch (status) {
        complete = status
      }
      if (complete && privacy && portrait) {
        status = false
      }
      return { ...state, reject: status }
    case 'CREATE_SIGNUPDATA':
      const tempData = { ...signUpData }
      tempData[action.payload.dataKey] = action.payload.dataValue
      return { ...state, signUpData: { ...tempData } }
    case 'UPDATE_PHOTOINDEX':
      return { ...state, photoIndex: action.payload, openModal: !openModal }
    case 'CHANGE_MODAL_MODE':
      return { ...state, openModal: !openModal }
    default:
      return state
  }
}

const initialState = {
  privacy: false,
  portrait: false,
  reject: true,
  openModal: false,
  photoIndex: 'photo1',
  signUpData: {
    name: '',
    email: '',
    phone: '',
    groups: '',
    competitionID: '',
    selfIntro: '',
    years: '',
    months: '',
    days: '',
    city: '',
    district: '',
    detailAddress: '',
    birthday: '',
    votes: 0,
    photo1: {
      src: '',
      fileName: ''
    },
    photo2: {
      src: '',
      fileName: ''
    },
    photo3: {
      src: '',
      fileName: ''
    }
  }
}

export const FormContext = React.createContext()
