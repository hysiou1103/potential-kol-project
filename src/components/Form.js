import React from 'react'
import { Input } from './Input'



export const Form = () => { 
  return (
    <form className='formWrap'>
      <Input type="name" name="姓名" value="name"/>
      <Input type="email" name="email" value="email" />
      <Input type="tel" name="電話" value="phone" />
      <Input type="text" name="參賽名稱" value="competitionID" grid="true"/>
      <Input type="text" name="介紹說明" value="selfIntro" grid="true"/>
    </form>
  )

}