import React, { useState } from 'react'

export const Input = props => {
  const [initialVal, setInitialVal] = useState('')
  const [processVal, setProcessVal] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const handleChange = e => {
    setInitialVal(e.target.value.trim())
    setProcessVal(e.target.value.trim())
  }
  const handleValidate = e => {
    if (!initialVal) return
    let reg = ''
    switch (props.value) {
      case 'name':
        const initialName = initialVal
        initialName.forEach((item, index, arr) => {
          index % 2 === 0 ? (arr[index] = '*') : (arr[index] = item)
        })
        const newName = initialName.join('')
        setProcessVal(newName)
        break
      case 'email':
        const accountArr = initialVal.split('@')[0].split('')
        const suffix = initialVal.split('@')[1]
        accountArr.forEach((item, index, arr) => {
          index % 2 === 1 ? (arr[index] = '*') : (arr[index] = item)
        })
        const newMail = `${accountArr.join('')}${suffix}`
        setProcessVal(newMail)
        break
      case 'phone':
        const initialPhone = initialVal.split('')
        initialPhone.length > 4 &&
          initialPhone.forEach((item, index, arr) => {
            index > 3 && index < 7 ? (arr[index] = '*') : (arr[index] = item)
          })
        const newPhone = initialPhone.join('')
        setProcessVal(newPhone)
        break
      case 'competitionID':
        const initialcompetitionID = initialVal
        reg = /^[A-Za-z\u4e00-\u9fa5]{1,20}$/
        !reg.test(initialcompetitionID)
          ? initialcompetitionID.length > 20
            ? setErrMsg('已超過字數')
            : setErrMsg('不可輸入特殊符號')
          : setErrMsg('')
        break
      case 'selfIntro':
        const initialSelfIntro = initialVal
        reg = /^[A-Za-z\u4e00-\u9fa5]{1,120}$/
        reg.test(initialSelfIntro) ? setErrMsg('') : setErrMsg('已超過字數')
        break
      default:
        setProcessVal(e.target.value)
        break
    }
  }
  return (
    <>
      <input
        type="text"
        id={props.value}
        placeholder={props.placeholder}
        value={processVal}
        onChange={handleChange}
        onBlur={handleValidate}
        className={props.width ? 'full' : null}
      />
      {errMsg && <p className="errMsg">{errMsg}</p>}
    </>
  )
}
