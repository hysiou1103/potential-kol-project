import React, { useRef, useEffect } from 'react'
import crownIcon from 'imgs/crownIcon.png'

export default function TakeLeadCard({ competitor, order }) {
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
    <div className="leadCardWrap relative">
      <div className="crownWrap">
        <img src={crownIcon} alt="Crown Icon" />
      </div>
      <div className="leadCardBody" ref={groupTag}>
        <div className="leadCardImg">
          <img src={competitor.photo1.src} alt="competitor" />
        </div>
        <p className="eachGroup">{competitor.groups}</p>
        <div className="leadInfor">
          <p>{`NO.${order + 1}`}</p>
          <p>{competitor.competitionID}</p>
        </div>
        <div className="votes">
          <strong>{competitor.votes}</strong> 票
        </div>
      </div>
    </div>
  )
}
