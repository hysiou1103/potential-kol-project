import React, { useRef, useEffect } from 'react'
import crownIcon from 'imgs/crownIcon.png'

export default function TakeLeadCard({ competitor = {} }) {
  const groupTag = useRef()
  useEffect(() => {
    let groupName = ''
    if (competitor.groups === '汪汪組') {
      groupName = 'dogs'
    } else {
      groupName = 'cats'
    }
    groupTag.current.classList.add(`${groupName}`)
  }, [competitor.groups])

  return (
    <div className="leadCardWrap relative z-0">
      <div className="crownWrap absolute z-1">
        <img src={crownIcon} alt="Crown Icon" />
      </div>
      <div className="leadCardBody" ref={groupTag}>
        <div className="leadCardImg">
          <img src={competitor.photo1.src} alt="competitor" />
        </div>
        <p className="eachGroup">{competitor.groups}</p>
        <div className="leadInfor">
          <p>{`NO.${competitor.id}`}</p>
          <p>{competitor.competitionID}</p>
        </div>
        <div className="votes">
          <strong>{competitor.votes}</strong> 票
        </div>
      </div>
    </div>
  )
}
