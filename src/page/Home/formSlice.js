import { createSlice } from '@reduxjs/toolkit'
import { executeValidationsOfField, validController } from 'config'

const initialState = {
  openModal: false,
  photoIndex: 'photo1',
  isValid: false,
  signUpData: {
    name: { value: '', error: '', hasError: false },
    email: { value: '', error: '', hasError: false, encryptValue: '' },
    phone: { value: '', error: '', hasError: false },
    groups: { value: 'default', error: '', hasError: false },
    competitionID: { value: '', error: '', hasError: false },
    selfIntro: { value: '', error: '', hasError: false },
    years: { value: 'default', error: '', hasError: false },
    months: { value: 'default', error: '', hasError: false },
    days: { value: 'default', error: '', hasError: false },
    city: { value: 'default', error: '', hasError: false },
    district: { value: 'default', error: '', hasError: false },
    detailAddress: { value: '', error: '', hasError: false },
    photo1: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: '',
      hasError: false
    },
    photo2: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: '',
      hasError: false
    },
    photo3: {
      value: {
        src: '',
        fileName: '上傳檔案'
      },
      error: '',
      hasError: false
    },
    privacy: { value: false, error: '', hasError: false },
    portrait: { value: false, error: '', hasError: false },
    birthday: '',
    votes: 0
  },
  storageList: JSON.parse(localStorage.getItem('registInfor')) || []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    update_photoIndex: (state, action) => {
      state.photoIndex = action.payload
    },
    change_modalMode: state => {
      state.openModal = !state.openModal
    },
    saving_fieldData: (state, action) => {
      const { errMsg, encryptVal, hasError } = executeValidationsOfField(action.payload)
      state.signUpData[action.payload.fieldName].error = errMsg
      state.signUpData[action.payload.fieldName].hasError = hasError
      state.signUpData[action.payload.fieldName].value = action.payload.fieldValue

      if (encryptVal) {
        state.signUpData[action.payload.fieldName].encryptValue = encryptVal
      }
    },
    update_isValid: state => {
      const { isValid, objectToBeTested } = validController(state.signUpData)
      state.isValid = isValid
      if (isValid) {
        const { years, months, days, city, ...otherItems } = objectToBeTested
        const birthday = `${years.value}/${months.value}/${days.value}`
        const tempStorageKey = Object.keys(otherItems)
        let tempStorageData = {}
        tempStorageKey.forEach(item => {
          tempStorageData = {
            ...tempStorageData,
            [item]: otherItems[item].value || otherItems[item]
          }
        })
        tempStorageData.birthday = birthday
        tempStorageData.id = state.storageList.length + 1
        state.storageList.push(tempStorageData)
        localStorage.setItem('registInfor', JSON.stringify(state.storageList))
      }
    },
    initialize: state => {
      const { storageList, ...initialize } = initialState
      return { ...initialize, storageList: state.storageList }
    }
  }
})

export const { update_photoIndex, update_isValid, change_modalMode, saving_fieldData, initialize } =
  formSlice.actions

export default formSlice.reducer
