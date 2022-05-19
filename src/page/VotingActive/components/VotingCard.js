import React, { useRef, useEffect } from 'react'

export default function VotingCard({ competitor = {}, index = 0 }) {
  const groupTag = useRef()
  const votesColor = useRef()
  useEffect(() => {
    let groupName = ''
    if (competitor.groups === '汪汪組') {
      groupName = 'dogs'
    } else {
      groupName = 'cats'
    }
    groupTag.current.classList.add(`${groupName}`)
    votesColor.current.classList.add(`${groupName}`)
  }, [competitor.groups])
  return (
    <div className="votingCard flex items-center w-full relative z-0">
      <div className="orderWrap absolute z-1">
        <p>NO.{index + 1}</p>
      </div>
      <div className="votingCardImg">
        <img src={competitor.photo1.src} alt="competitor" />
      </div>
      <div className="votingIntro flex justify-between items-center w-full">
        <div className="votingCardInfor flex flex-col">
          <div className="groupTag" ref={groupTag}>
            {competitor.groups}
          </div>
          <div className="competitorId">{competitor.competitionID}</div>
        </div>
        <div className="votingRelative flex items-center" ref={votesColor}>
          <div className="votes flex items-center">
            票數 <strong>{competitor.votes}</strong>
          </div>
          <button className="votingBtn flex justify-center items-center">前往投票</button>
        </div>
      </div>
    </div>
  )
}
