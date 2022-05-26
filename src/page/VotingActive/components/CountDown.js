import React, { useState, useEffect } from 'react'
import style from './countDown.module.scss'

export default function CountDown() {
  const [countDown, setCountDown] = useState(0)
  useEffect(() => {
    const dueDate = new Date('2022/5/30 18:00:00').getTime()
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
    const days = Math.floor(restTime / (60 * 60 * 24 * 1000))
    const hours = Math.floor((restTime % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60))
    const minutes = Math.floor((restTime % (60 * 60 * 1000)) / (1000 * 60))
    const seconds = Math.floor((restTime % (60 * 1000)) / 1000)
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
