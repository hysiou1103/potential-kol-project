import React, { useState, useEffect } from 'react'

export default function Input(props) {
  const [initialVal, setInitialVal] = useState('')
  const [processVal, setProcessVal] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const { createList, name, setReject } = props
    !initialVal && setReject(true)
    createList(name, initialVal)
  }, [initialVal])

  const handleChange = e => {
    setProcessVal(e.target.value.trim())
  }

  const handleValidate = () => {
    let errMsg = ''
    let RegExp = ''
    let newVal = processVal
    let testResult = false
    const { name } = props
    if (processVal) {
      switch (name) {
        case 'name':
          RegExp = /^[a-zA-z\u4e00-\u9fa5,.'-]{2,}$/i
          testResult = RegExp.test(processVal)
          if (testResult) {
            const initialName = processVal.split('')
            initialName.forEach((item, index, arr) => {
              index % 2 === 0 ? (arr[index] = '*') : (arr[index] = item)
            })
            newVal = initialName.join('')
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
            newVal = `${accountArr.join('')}${suffix}`
            setInitialVal(processVal)
          } else {
            errMsg = '請輸入正確信箱'
            setInitialVal('')
          }
          break
        case 'phone':
          RegExp = /^\d{10}$/
          testResult = RegExp.test(processVal)
          if (testResult) {
            const initialPhone = processVal.split('')
            initialPhone.forEach((item, index, arr) => {
              index > 3 && index < 7 ? (arr[index] = '*') : (arr[index] = item)
            })
            newVal = initialPhone.join('')
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
    }
    setProcessVal(newVal)
    setErrMsg(errMsg)
  }

  return (
    <>
      <input
        type={props.type}
        id={props.name}
        className={props.width ? 'full' : null}
        placeholder={props.placeholder}
        maxLength={props.maximun || null}
        value={processVal}
        onChange={handleChange}
        onBlur={handleValidate}
      />
      {errMsg && <p className="errMsg">{errMsg}</p>}
    </>
  )
}
