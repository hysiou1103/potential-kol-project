import React, { useState, useEffect } from 'react'

export default function Input({
  name = '',
  type = '',
  width = '',
  placeholder = '',
  maximun = 0,
  setReject = () => {},
  createSignUpData = () => {}
}) {
  const [processVal, setProcessVal] = useState('')
  const handleChange = e => {
    setProcessVal(e.target.value.trim())
  }

  const [errMsg, setErrMsg] = useState('')
  const [initialVal, setInitialVal] = useState('')
  const handleValidate = () => {
    let errMsg = ''
    let RegExp = ''
    let newVal = processVal
    let testResult = false
    if (processVal) {
      switch (name) {
        case 'name':
          RegExp = /^[a-zA-z\u4e00-\u9fa5,.'-]{2,}$/i
          testResult = RegExp.test(processVal)
          if (testResult) {
            setInitialVal(processVal)
          } else {
            errMsg = '請輸入正確姓名'
            setInitialVal('')
          }
          break
        case 'email':
          RegExp =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          testResult = RegExp.test(processVal)
          if (testResult) {
            const accountArr = processVal.split('@')[0].split('')
            const suffix = processVal.split('@')[1]
            accountArr.forEach((item, index, arr) => {
              index % 2 === 1 ? (arr[index] = '*') : (arr[index] = item)
            })
            newVal = `${accountArr.join('')}@${suffix}`
            setInitialVal(processVal)
          } else {
            errMsg = '請輸入正確信箱'
            setInitialVal('')
          }
          break
        case 'phone':
          RegExp = /(\w{2,3}-?|\(\w{2,3}\))\w{3,4}-?\w{4}|09\w{2}(\w{6}|-\w{3}-\w{3})/
          testResult = RegExp.test(processVal)
          if (testResult) {
            setInitialVal(processVal)
          } else {
            errMsg = '請輸入正確電話號碼'
            setInitialVal('')
          }
          break
        case 'competitionID':
          RegExp = /^[A-Za-z\u4e00-\u9fa5]{1,20}$/
          testResult = RegExp.test(processVal)
          if (testResult) {
            setInitialVal(processVal)
          } else {
            errMsg = '不可輸入特殊符號'
            setInitialVal('')
          }
          break
        default:
          setInitialVal(processVal)
          break
      }
    } else {
      errMsg = '此欄位為必填項目'
      setInitialVal('')
    }
    setProcessVal(newVal)
    setErrMsg(errMsg)
  }

  useEffect(() => {
    !initialVal && setReject(true)
    createSignUpData(name, initialVal)
  }, [initialVal])

  return (
    <>
      <input
        type={type}
        id={name}
        className={width ? 'full' : null}
        placeholder={placeholder}
        maxLength={maximun || null}
        value={processVal}
        onChange={handleChange}
        onBlur={handleValidate}
      />
      {errMsg && <p className="errMsg">{errMsg}</p>}
    </>
  )
}
