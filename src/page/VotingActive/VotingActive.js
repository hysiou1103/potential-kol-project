import React, { useState, useEffect } from 'react'
import TakeLeadCard from './components/TakeLeadCard'
import VotingSection from './components/VotingSection'
import competitiveSituation from 'imgs/competitiveSituation.png'
import style from './votingActive.module.scss'

export default function VotingActive() {
  const [reorderList, setReorderList] = useState([])
  useEffect(() => {
    const votingList = JSON.parse(localStorage.getItem('registInfor')) || []

    const reorderListWithHigherVotes = votingList.sort((a, b) => {
      return b.votes - a.votes
    })
    setReorderList(reorderListWithHigherVotes)
  }, [])

  const searchTeamLeader = (filterList, filterText) => {
    let leader = []
    leader = filterList.filter(item => item.groups === filterText).slice(0, 1)
    return leader
  }

  const takeLeadGroup = [
    ...searchTeamLeader(reorderList, '汪汪組'),
    ...searchTeamLeader(reorderList, '喵喵組')
  ]

  const totalVotes = reorderList.reduce((acc, cur) => acc + cur.votes, 0)
  return (
    <>
      {reorderList.length ? (
        <>
          <div className={`${style.totalVotes} flex justify-center items-center w-full`}>
            目前總投票數：<strong>{totalVotes}</strong>票
          </div>
          <img src={competitiveSituation} alt="Competitive Situation" />
          <section className={`${style.takeLeadSection} flex justify-center`}>
            {takeLeadGroup.map(competitor => (
              <TakeLeadCard key={competitor.id} competitor={competitor} />
            ))}
          </section>
          <VotingSection votingList={reorderList} />
        </>
      ) : (
        <div>目前還沒有資料section</div>
      )}
    </>
  )
}
