import React from 'react'
import { Link } from 'react-router-dom'
import style from './votingCard.module.scss'

export default function VotingCard({ competitor = {} }) {
  const updateClass = ({ groups }) => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }

  return (
    <Link
      to={`/competitorDetail/${competitor.id}`}
      className={`${style.votingCard} flex items-center relative z-0`}
    >
      <p className={`${style.orderWrap} absolute z-1`}>NO.{competitor.id}</p>
      <div className={style.votingCardImg}>
        <img src={competitor.photo1.src} alt="competitor" />
      </div>
      <div
        className={`${style.votingIntro} ${
          style[updateClass(competitor)]
        } flex justify-between items-center`}
      >
        <div className={`${style.votingCardInfor} flex flex-col`}>
          <p className={style.groupTag}>{competitor.groups}</p>
          <p className={style.competitorId}>{competitor.competitionID}</p>
        </div>
        <div className={`${style.votingRelative} flex items-center`}>
          <p className={`${style.votes} flex items-center`}>
            票數 <strong>{competitor.votes}</strong>
          </p>
          <button
            to={`/competitorDetail/${competitor.id}`}
            className={`${style.votingBtn} flex justify-center items-center`}
          >
            前往投票
          </button>
        </div>
      </div>
    </Link>
  )
}
