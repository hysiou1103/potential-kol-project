import React, { useState, useEffect } from 'react'
import style from './countDown.module.scss'

export default function CountDown() {
  const [countDown, setCountDown] = useState(0)
  useEffect(() => {
    const dueDate = new Date('2022/6/30 18:00:00').getTime()
    const interval = setInterval(() => {
      setCountDown(dueDate - new Date().getTime())
    }, 1000)
    getFormatDate(countDown)
    return () => clearInterval(interval)
  }, [countDown])

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const getFormatDate = restTime => {
    const days = Math.floor(restTime / 86400000) //至到期日前剩餘毫秒轉為秒數後換算成天數(60*60*24*1000)
    const hours = Math.floor((restTime % 86400000) / 3600000) //至到期日前不足以成為一日之剩餘毫秒數換算成小時數(60*60*1000)
    const minutes = Math.floor((restTime % 3600000) / 60000) //至到期日前不足以成為一小時之剩餘毫秒數換算成分鐘數(60*1000)
    const seconds = Math.floor((restTime % 60000) / 1000) //至到期日前不足以成為一分鐘之剩餘毫秒數換算成秒數
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  const whetherAddindZero = time => {
    const singleDigit = 10
    return time < singleDigit ? `0${time}` : time
  }

  return (
    <section className={`${style.countDownWrap} flex items-center justify-center`}>
      <p>投票結束倒數</p>
      <div className="flex items-center">
        <strong>{whetherAddindZero(days)}</strong>天<strong>{whetherAddindZero(hours)}</strong>小時
        <strong>{whetherAddindZero(minutes)}</strong>分<strong>{whetherAddindZero(seconds)}</strong>
        秒
      </div>
    </section>
  )
}
