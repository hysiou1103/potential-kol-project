import React from 'react'
import TakeLeadCard from './TakeLeadCard'
import VotingSection from './VotingSection'
import competitiveSituation from 'imgs/competitiveSituation.png'

export default function VotingActive() {
  return (
    <>
      <img src={competitiveSituation} alt="Competitive Situation" />
      <section className="takeLeadSection">
        {takeLeadGroup.length
          ? takeLeadGroup.map((competitor, index) => (
              <TakeLeadCard key={competitor.id} competitor={competitor} order={index} />
            ))
          : null}
      </section>
      <VotingSection votingList={reorderListWithHigherVotes} />
    </>
  )
}

const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
const reorderListWithHigherVotes = votingList.sort((a, b) => {
  return b.votes - a.votes
})
const reorderListWithDogs = reorderListWithHigherVotes.filter(item => item.groups === '汪汪組')
const reorderListWithCats = reorderListWithHigherVotes.filter(item => item.groups === '喵喵組')

const takeLeadGroup = [...reorderListWithDogs.slice(0, 1), ...reorderListWithCats.slice(0, 1)]
