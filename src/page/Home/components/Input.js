import React, { useState } from 'react'

export default function Input(props) {
  const [initialVal, setInitialVal] = useState('')
  const [processVal, setProcessVal] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const handleChange = e => {
    setInitialVal(e.target.value.trim())
    setProcessVal(e.target.value.trim())
  }

  const handleValidate = () => {
    let errMsg = ''
    let RegExp = ''
    let testResult = false
    const { name } = props
    if (initialVal) {
      switch (name) {
        case 'name':
          RegExp = /^[a-zA-z\u4e00-\u9fa5,.'-]{2,}$/i
          testResult = RegExp.test(initialVal)
          if (testResult) {
            const initialName = initialVal.split('')
            initialName.forEach((item, index, arr) => {
              index % 2 === 0 ? (arr[index] = '*') : (arr[index] = item)
            })
            const newName = initialName.join('')
            savePassedData(initialVal, newName)
          } else {
            errMsg = '請輸入正確姓名'
            setInitialVal('')
          }
          break
        case 'email':
          RegExp =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          testResult = RegExp.test(initialVal)
          if (testResult) {
            const accountArr = initialVal.split('@')[0].split('')
            const suffix = initialVal.split('@')[1]
            accountArr.forEach((item, index, arr) => {
              index % 2 === 1 ? (arr[index] = '*') : (arr[index] = item)
            })
            const newMail = `${accountArr.join('')}${suffix}`
            savePassedData(initialVal, newMail)
          } else {
            errMsg = '請輸入正確信箱'
            setInitialVal('')
          }
          break
        case 'phone':
          RegExp = /^\d{10}$/
          testResult = RegExp.test(initialVal)
          if (testResult) {
            const initialPhone = initialVal.split('')
            initialPhone.forEach((item, index, arr) => {
              index > 3 && index < 7 ? (arr[index] = '*') : (arr[index] = item)
            })
            const newPhone = initialPhone.join('')
            savePassedData(initialVal, newPhone)
          } else {
            errMsg = '請輸入正確電話號碼'
            setInitialVal('')
          }
          break
        case 'competitionID':
          RegExp = /^[A-Za-z\u4e00-\u9fa5]{1,20}$/
          testResult = RegExp.test(initialVal)
          if (testResult) {
            savePassedData(initialVal)
          } else {
            errMsg = '不可輸入特殊符號'
            setInitialVal('')
          }
          break
        default:
          savePassedData(initialVal)
          break
      }
    } else {
      errMsg = '此欄位為必填項目'
    }
    setErrMsg(errMsg)
  }

  const savePassedData = (initialVal, newVal = initialVal) => {
    const { createList, name } = props
    setProcessVal(newVal)
    createList(name, initialVal)
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
