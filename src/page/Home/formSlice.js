import { createSlice } from '@reduxjs/toolkit'
import { executeValidationsOfInput, validController } from 'config'

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
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    update_photoIndex: (state, action) => {
      state.photoIndex = action.payload
    },
    update_isValid: state => {
      state.isValid = !state.isValid
    },
    change_modalMode: state => {
      state.openModal = !state.openModal
    },
    saving_fieldData: (state, action) => {
      const { errMsg, encryptVal, hasError } = executeValidationsOfInput(action.payload)
      state.signUpData[action.payload.fieldName].error = errMsg
      state.signUpData[action.payload.fieldName].hasError = hasError
      state.signUpData[action.payload.fieldName].value = action.payload.fieldValue

      if (encryptVal) {
        state.signUpData[action.payload.fieldName].encryptValue = encryptVal
      }
    }
  }
})

export const { update_photoIndex, date_isValid, change_modalMode, saving_fieldData } =
  formSlice.actions

export default formSlice.reducer
