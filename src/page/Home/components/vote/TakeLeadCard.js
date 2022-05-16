import React, { useRef, useEffect } from 'react'
import crownIcon from 'imgs/crownIcon.png'

export default function TakeLeadCard({ competitor, order }) {
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
    <div className="leadCardWrap">
      <div className="crownWrap">
        <img src={crownIcon} alt="Crown Icon" />
      </div>
      <div className="leadCardBody">
        <div className="leadCardImg">
          <img src={competitor.photo1.src} alt="competitor" />
        </div>
        <p className="eachGroup" ref={groupTag}>
          {competitor.groups}
        </p>
        <div className="leadInfor">
          <p>{`NO.${order + 1}`}</p>
          <p>{competitor.competitionID}</p>
        </div>
        <div className="votes">
          <strong ref={votesColor}>{competitor.votes}</strong> 票
        </div>
      </div>
    </div>
  )
}
