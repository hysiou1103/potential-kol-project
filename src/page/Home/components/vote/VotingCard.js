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
    <div className="votingCard">
      <div className="orderWrap">
        <p>NO.{index + 1}</p>
      </div>
      <div className="votingCardImg">
        <img src={competitor.photo1.src} alt="competitor" />
      </div>
      <div className="votingIntro">
        <div className="votingCardInfor">
          <div className="groupTag" ref={groupTag}>
            {competitor.groups}
          </div>
          <div className="competitorId">{competitor.competitionID}</div>
        </div>
        <div className="votingRelative" ref={votesColor}>
          <div className="votes">
            票數 <strong>90,000</strong>
          </div>
          <button className="votingBtn">前往投票</button>
        </div>
      </div>
    </div>
  )
}
