import React, { useState, useEffect, useContext } from 'react'
import { FormContext } from './Form'
import useValidator from 'components/useValidator'
import style from './input.module.scss'

export default function Input({ name = '', type = '', width = '', placeholder = '', maximun = 0 }) {
  const { dispatch } = useContext(FormContext)
  const [processVal, setProcessVal] = useState('')
  const handleChange = e => {
    setProcessVal(e.target.value.trim())
  }

  const [errMsg, setErrMsg] = useState('')
  const [initialVal, setInitialVal] = useState('')
  const validations = useValidator()
  const handleValidate = () => {
    let errMsg = ''
    let initVal = processVal
    let passRegExp = true
    const verifiedItem = validations[name]

    //Required
    if (verifiedItem.required && !processVal) {
      errMsg = verifiedItem.required.message
    }

    //Pattern

    const pattern = verifiedItem.pattern
    if (processVal && pattern && !pattern.RegExp.test(processVal)) {
      passRegExp = false
      errMsg = pattern.message
      initVal = pattern.clearInvalidInput
    }

    //Encryption
    if (processVal && passRegExp && verifiedItem.encryption) {
      const encryptVal = verifiedItem.encryption.excryFn(initVal)
      setProcessVal(encryptVal)
    }

    setErrMsg(errMsg)
    setInitialVal(initVal)
  }

  useEffect(() => {
    dispatch({
      type: 'CREATE_SIGNUPDATA',
      payload: {
        dataKey: name,
        dataValue: initialVal
      }
    })
  }, [initialVal])

  return (
    <>
      <input
        type={type}
        id={name}
        className={`${width && style.full}`}
        placeholder={placeholder}
        maxLength={maximun || null}
        value={processVal}
        onChange={handleChange}
        onBlur={handleValidate}
      />
      {errMsg && <p className={style.errMsg}>{errMsg}</p>}
    </>
  )
}
