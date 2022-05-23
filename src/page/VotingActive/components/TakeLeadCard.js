import React from 'react'
import crownIcon from 'imgs/crownIcon.png'
import { Link } from 'react-router-dom'
import style from './takeLeadCard.module.scss'

export default function TakeLeadCard({ competitor = {} }) {
  const updateClass = ({ groups }) => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }

  return (
    <Link
      to={`/competitorDetail/${competitor.id}`}
      className={`${style.leadCardWrap} relative z-0`}
    >
      <div className={`${style.crownWrap} absolute z-1`}>
        <img src={crownIcon} alt="Crown Icon" />
      </div>
      <div className={`${style.leadCardBody} ${style[updateClass(competitor)]}`}>
        <div className={style.leadCardImg}>
          <img src={competitor.photo1.src} alt="competitor" />
        </div>
        <p className={style.eachGroup}>{competitor.groups}</p>
        <div className={style.leadInfor}>
          <p>{`NO.${competitor.id}`}</p>
          <p>{competitor.competitionID}</p>
        </div>
        <div className={style.votes}>
          <strong>{competitor.votes}</strong> 票
        </div>
      </div>
    </Link>
  )
}
