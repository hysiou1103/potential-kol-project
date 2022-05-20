import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swiper from './components/Swiper'
import style from './competitorDetail.module.scss'

export default function CompetitorDetail() {
  const { competitorId } = useParams()
  const [competitorData, setCompetitorData] = useState({})
  useEffect(() => {
    const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
    const data = votingList.filter(item => item.id === parseInt(competitorId))
    setCompetitorData({ ...data })
  }, [])

  const renderClass = ({ groups }) => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }
  return (
    <main className={`${style.competitorDetailWrap} container flex items-center justify-between`}>
      <Swiper />
      <section
        className={`${style.competitorContent} flex flex-col ${style[renderClass(competitorData)]}`}
      >
        <div className={style.competitorHeader}>
          <div></div>
          <div className={style.competitorOrder}>{competitorData.id}</div>
        </div>
        <p className={style.reminderText}>
          不限次數分享，分享1次加1票，最多加<strong>2</strong>票
        </p>
      </section>
    </main>
  )
}
