import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saving_fieldData } from '../formSlice'
import style from './input.module.scss'

export default function Input({ name = '', type = '', width = '', placeholder = '', maximun = 0 }) {
  const dispatch = useDispatch()
  const inputState = useSelector(state => state.form.signUpData[name])

  const handleChange = e => {
    dispatch(
      saving_fieldData({
        fieldName: name,
        fieldValue: e.target.value.trim()
      })
    )
  }

  return (
    <>
      <input
        type={type}
        id={name}
        className={`${width && style.full}`}
        placeholder={placeholder}
        maxLength={maximun || null}
        value={inputState.encryptValue || inputState.value}
        onChange={handleChange}
      />
      <p className="errMsg"> {inputState.error}</p>
    </>
  )
}
