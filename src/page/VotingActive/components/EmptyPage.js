import React from 'react'
import { Link } from 'react-router-dom'
import style from './emptyPage.module.scss'

export default function Selector() {
  return (
    <section className={`flex flex-col items-center ${style.emptyWrap}`}>
      <p className={style.noComments}>目前沒有參賽資料</p>
      <Link to="/" className={style.goSignUp}>
        立刻前往報名!
      </Link>
    </section>
  )
}
