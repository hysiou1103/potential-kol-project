import React from 'react'
import VotingCard from './VotingCard'
import votingSection from 'imgs/votingSection.png'

export default function VotingSection({ votingList = [] }) {
  const data = votingList
  return (
    <>
      <img src={votingSection} alt="voting section" />

      <section className="votingSectionWrap">
        {data.length
          ? data.map((item, index) => <VotingCard competitor={item} key={item.id} index={index} />)
          : null}
      </section>
    </>
  )
}
