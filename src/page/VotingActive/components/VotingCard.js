import React from 'react'
import { Link } from 'react-router-dom'
import style from './votingCard.module.scss'

export default function VotingCard({ competitor = {} }) {
  const updateClass = ({ groups }) => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }

  return (
    <div className={`${style.votingCard} flex items-center w-full relative z-0`}>
      <div className={`${style.orderWrap} absolute z-1`}>NO.{competitor.id}</div>
      <Link to={`/competitorDetail/${competitor.id}`} className={style.votingCardImg}>
        <img src={competitor.photo1.src} alt="competitor" />
      </Link>
      <div
        className={`${style.votingIntro} ${
          style[updateClass(competitor)]
        } flex justify-between items-center w-full`}
      >
        <div className={`${style.votingCardInfor} flex flex-col`}>
          <div className={style.groupTag}>{competitor.groups}</div>
          <div className={style.competitorId}>{competitor.competitionID}</div>
        </div>
        <div className={`${style.votingRelative} flex items-center`}>
          <div className={`${style.votes} flex items-center`}>
            票數 <strong>{competitor.votes}</strong>
          </div>
          <Link
            to={`/competitorDetail/${competitor.id}`}
            className={`${style.votingBtn} flex justify-center items-center`}
          >
            前往投票
          </Link>
        </div>
      </div>
    </div>
  )
}
