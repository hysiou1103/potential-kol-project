import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Selector from './Selector'
import UploadPhotoSection from './UploadPhotoSection'
import Modal from './Modal'
import { requiredItem } from 'config'
import signUpForm from 'imgs/signUpForm.png'

export default function Form() {
  const [privacy, setPrivacy] = useState(false)
  const [portrait, setPortrait] = useState(false)
  const handleChange = chosenPolicy =>
    chosenPolicy === 'privacy' ? setPrivacy(!privacy) : setPortrait(!portrait)

  const [signUpData, setsignUpData] = useState({
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
  })
  const [reject, setReject] = useState(true)
  const createSignUpData = (dataKey, dataValue) => {
    const tempData = { ...signUpData }
    dataValue ? (tempData[dataKey] = dataValue) : delete tempData[dataValue]
    setsignUpData({ ...tempData })
  }
  useEffect(() => {
    if (!privacy || !portrait) return
    let complete = false
    try {
      requiredItem.forEach(item => {
        if (!signUpData.hasOwnProperty(item) || !signUpData[item]) {
          throw false
        }
        complete = true
      })
    } catch (status) {
      complete = status
    }
    complete ? setReject(false) : setReject(true)
  }, [signUpData, privacy, portrait])

  const rejectBtn = useRef()
  useEffect(() => {
    reject
      ? rejectBtn.current.classList.add('disabled')
      : rejectBtn.current.classList.remove('disabled')
  }, [reject])

  const [openModal, setOpenModal] = useState(false)
  const [photoIndex, setPhotoIndex] = useState('photo1')
  const handleModal = upLoadSectionIndex => {
    setOpenModal(!openModal)
    setPhotoIndex(upLoadSectionIndex)
  }

  const navigate = useNavigate()
  const saveListInBrowser = () => {
    if (reject) return
    const { years, months, days, city, ...tempStorageData } = signUpData
    const birthday = `${years}/${months}/${days}`
    const id = Math.floor(new Date(), 1000)
    tempStorageData.birthday = birthday
    tempStorageData.id = id
    tempStorageData.votes = 0
    const storageList = JSON.parse(localStorage.getItem('registInfor')) || []
    storageList.push(tempStorageData)
    localStorage.setItem('registInfor', JSON.stringify(storageList))
    navigate(`/votingActive`)
  }

  return (
    <>
      <img src={signUpForm} alt="Sign Up Form" />
      <main className="formWrap">
        <div className="inputGroup">
          <label htmlFor="name">姓名</label>
          <div className="inputWrap">
            <Input
              type="text"
              name="name"
              createSignUpData={createSignUpData}
              setReject={setReject}
            />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <div className="inputWrap">
            <Input
              type="email"
              name="email"
              createSignUpData={createSignUpData}
              setReject={setReject}
            />
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">電話</label>
          <div className="inputWrap">
            <Input
              type="tel"
              name="phone"
              maximun={12}
              createSignUpData={createSignUpData}
              setReject={setReject}
            />
          </div>
        </div>
        <div className="selectGroup">
          <label htmlFor="group">報名組別</label>
          <div className="selectWrap">
            <Selector name="groups" createSignUpData={createSignUpData} />
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
              createSignUpData={createSignUpData}
              setReject={setReject}
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
              createSignUpData={createSignUpData}
              setReject={setReject}
            />
          </div>
        </div>
        <div className="selectGroup">
          <label htmlFor="years">出生年月日</label>
          <div className="selectWrap">
            <Selector name="years" width="1/3" createSignUpData={createSignUpData} />
            <Selector name="months" width="1/3" createSignUpData={createSignUpData} />
            <Selector name="days" width="1/3" createSignUpData={createSignUpData} />
          </div>
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection
            placeHolder={{ value: 'photo1', label: '照片1' }}
            fileName={signUpData.photo1.fileName}
            handleModal={() => {
              handleModal('photo1')
            }}
          />
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection
            placeHolder={{ value: 'photo2', label: '照片2' }}
            fileName={signUpData.photo2.fileName}
            handleModal={() => {
              handleModal('photo2')
            }}
          />
        </div>
        <div className="uploadGroup">
          <UploadPhotoSection
            placeHolder={{ value: 'photo3', label: '照片3' }}
            fileName={signUpData.photo3.fileName}
            handleModal={() => {
              handleModal('photo3')
            }}
          />
        </div>
        <div className="selectGroup">
          <label htmlFor="city">收件人地址</label>
          <div className="selectWrap">
            <Selector name="city" width="1/2" createSignUpData={createSignUpData} />
            <Selector
              name="district"
              width="1/2"
              city={signUpData.city}
              createSignUpData={createSignUpData}
            />
            <Input
              type="text"
              name="detailAddress"
              width="full"
              placeholder="請填寫詳細地址"
              createSignUpData={createSignUpData}
              setReject={setReject}
            />
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
              checked={privacy}
              onChange={() => {
                handleChange('privacy')
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
              checked={portrait}
              onChange={() => {
                handleChange('portrait')
              }}
            />
            <label htmlFor="portraitRights">
              我擁有投稿照片之所有權或業經合法授權，且絕無侵害他人之著作權、肖像權及違反任何法律規定；我同意照片一經上傳，東森購物即取得著作財產權。
            </label>
          </div>
        </div>
        <button ref={rejectBtn} className="formBtn" onClick={saveListInBrowser}>
          送出報名
        </button>
        <Modal
          openModal={openModal}
          handleModal={handleModal}
          key={photoIndex}
          photoIndex={photoIndex}
          signUpData={signUpData}
          createSignUpData={createSignUpData}
        />
      </main>
    </>
  )
}
