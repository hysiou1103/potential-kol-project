import React, { useContext } from 'react'
import { FormContext } from '../Form'
import style from './input.module.scss'

export default function Input({ name = '', type = '', width = '', placeholder = '', maximun = 0 }) {
  const { state, dispatch } = useContext(FormContext)
  const { signUpData = {} } = state

  const handleChange = e => {
    dispatch({
      type: 'SAVING_FIELD_DATA',
      payload: {
        fieldName: name,
        fieldValue: e.target.value.trim()
      }
    })
  }

  return (
    <>
      <input
        type={type}
        id={name}
        className={`${width && style.full}`}
        placeholder={placeholder}
        maxLength={maximun || null}
        value={signUpData[name].encryptValue || signUpData[name].value}
        onChange={handleChange}
      />
      <p className="errMsg"> {signUpData[name].error}</p>
    </>
  )
}
