import { configureStore } from '@reduxjs/toolkit' //automatically combine your slice reducers, adds whatever Redux middleware you supply
import formReducer from 'page/Home/formSlice'

export const store = configureStore({
  reducer: {
    form: formReducer
  }
})
