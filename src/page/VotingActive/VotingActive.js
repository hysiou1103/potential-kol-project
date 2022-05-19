import React from 'react'
import TakeLeadCard from './components/TakeLeadCard'
import VotingSection from './components/VotingSection'
import competitiveSituation from 'imgs/competitiveSituation.png'

export default function VotingActive() {
  return (
    <>
      {reorderListWithHigherVotes.length ? (
        <>
          <div className="totalVotes flex justify-center items-center w-full">
            目前總投票數：<strong>{totalVotes}</strong>票
          </div>
          <img src={competitiveSituation} alt="Competitive Situation" />
          <section className="takeLeadSection flex justify-center">
            {takeLeadGroup.length
              ? takeLeadGroup.map(competitor => (
                  <TakeLeadCard key={competitor.id} competitor={competitor} />
                ))
              : null}
          </section>
          <VotingSection votingList={reorderListWithHigherVotes} />
        </>
      ) : (
        <div>目前還沒有資料section</div>
      )}
    </>
  )
}

const votingList = JSON.parse(localStorage.getItem('registInfor')) || []
const reorderListWithHigherVotes = votingList.sort((a, b) => {
  return b.votes - a.votes
})

const searchTeamLeader = (filterList, filterText) => {
  let leader = []
  leader = filterList.filter(item => item.groups === filterText).slice(0, 1)
  return leader
}

const takeLeadGroup = [
  ...searchTeamLeader(reorderListWithHigherVotes, '汪汪組'),
  ...searchTeamLeader(reorderListWithHigherVotes, '喵喵組')
]

let totalVotes = reorderListWithHigherVotes.reduce((acc, cur) => acc + cur.votes, 0)
