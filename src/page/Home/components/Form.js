import React, { useState, useRef, useEffect } from 'react'
import Input from './Input'
import Selector from './Selector'
import Modal from './Modal'
import { requiredItem } from 'config'
import uploadFile from 'imgs/uploadFile.png'
export default function Form() {
  const [privacy, setPrivacy] = useState(false)
  const [portrait, setPortrait] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [signUpList, setSignUpList] = useState({})
  const [reject, setReject] = useState(true)
  const rejectBtn = useRef()

  useEffect(() => {
    if (signUpList === {}) return
    let complete = false
    try {
      requiredItem.forEach(item => {
        if (!signUpList.hasOwnProperty(item)) {
          throw false
        }
        complete = true
      })
    } catch (status) {
      complete = status
    }

    if (complete && privacy && portrait) {
      setReject(false)
    } else {
      setReject(true)
    }
  }, [signUpList, privacy, portrait])

  useEffect(() => {
    reject
      ? rejectBtn.current.classList.add('disabled')
      : rejectBtn.current.classList.remove('disabled')
  }, [reject])

  const handleChange = changedPolicy =>
    changedPolicy === 'privacy' ? setPrivacy(!privacy) : setPortrait(!portrait)

  const handleModal = () => setOpenModal(!openModal)

  const createList = (listKey, listValue) => {
    const tempList = { ...signUpList }
    listValue ? (tempList[listKey] = listValue) : delete tempList[listKey]
    setSignUpList({ ...tempList })
  }

  const saveListInBrowser = () => {
    if (reject) return
  }

  return (
    <div className="formWrap">
      <div className="inputGroup">
        <label htmlFor="name">姓名</label>
        <div className="inputWrap">
          <Input type="text" name="name" createList={createList} setReject={setReject} />
        </div>
      </div>
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <div className="inputWrap">
          <Input type="email" name="email" createList={createList} setReject={setReject} />
        </div>
      </div>
      <div className="inputGroup">
        <label htmlFor="phone">電話</label>
        <div className="inputWrap">
          <Input type="tel" name="phone" createList={createList} setReject={setReject} />
        </div>
      </div>
      <div className="selectGroup">
        <label htmlFor="group">報名組別</label>
        <div className="selectWrap">
          <Selector name="groups" createList={createList} />
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
            createList={createList}
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
            createList={createList}
            setReject={setReject}
          />
        </div>
      </div>
      <div className="selectGroup">
        <label htmlFor="years">出生年月日</label>
        <div className="selectWrap">
          <Selector name="years" width="1/3" createList={createList} />
          <Selector name="months" width="1/3" createList={createList} />
          <Selector name="days" width="1/3" createList={createList} />
        </div>
      </div>
      <div className="uploadGroup">
        <label htmlFor="photo1">上傳照片1</label>
        <div className="uploadWrap">
          <div className="uploadBtn" onClick={handleModal}>
            <img src={uploadFile} alt="Upload File Icon" />
            <span>選擇檔案</span>
          </div>
          <div className="fileInfor">
            <p>假檔名</p>
            <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
          </div>
        </div>
      </div>
      <div className="uploadGroup">
        <label htmlFor="photo2">上傳照片2</label>
        <div className="uploadWrap">
          <div className="uploadBtn" onClick={handleModal}>
            <img src={uploadFile} alt="Upload File Icon" />
            <span>選擇檔案</span>
          </div>
          <div className="fileInfor">
            <p>假檔名</p>
            <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
          </div>
        </div>
      </div>
      <div className="uploadGroup">
        <label htmlFor="phone">上傳照片3</label>
        <div className="uploadWrap">
          <div className="uploadBtn" onClick={handleModal}>
            <img src={uploadFile} alt="Upload File Icon" />
            <span>選擇檔案</span>
          </div>
          <div className="fileInfor">
            <p>假檔名</p>
            <p>檔案大小不得超過5MB，建議尺寸為正方形(最少1張、最多3張)</p>
          </div>
        </div>
      </div>
      <div className="selectGroup">
        <label htmlFor="city">收件人地址</label>
        <div className="selectWrap">
          <Selector name="city" width="1/2" createList={createList} />
          <Selector name="district" width="1/2" city={signUpList.city} createList={createList} />
          <Input
            type="text"
            name="detailAddress"
            width="full"
            placeholder="請填寫詳細地址"
            createList={createList}
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
      <Modal openModal={openModal} handleModal={handleModal} />
    </div>
  )
}
