import React from 'react'
import TakeLeadCard from './TakeLeadCard'
import competitiveSituation from 'imgs/competitiveSituation.png'

export default function VotingActive() {
  return (
    <>
      <img src={competitiveSituation} alt="Competitive Situation" />
      <section className="takeLeadSection">
        {votingList.length &&
          votingList.map((competitor, index) => (
            <TakeLeadCard key={competitor.id} competitor={competitor} order={index} />
          ))}
      </section>
    </>
  )
}

const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
