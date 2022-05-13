import React from 'react'
import crownIcon from 'imgs/crownIcon.png'

export default function TakeLeadCard({ competitor, order }) {
  return (
    <div className="leadCardWrap">
      <div className="crownWrap">
        <img src={crownIcon} alt="Crown Icon" />
      </div>
      <div className="leadCardBody">
        <div className="leadCardImg">
          <img src={competitor.photo1.src} />
        </div>
        <p className="eachGroup">{competitor.groups}</p>
        <div className="leadInfor">
          <p>{`NO.${order + 1}`}</p>
          <p>{competitor.competitionID}</p>
        </div>
        <div className="votes">
          <strong>90,847</strong> 票
        </div>
      </div>
    </div>
  )
}
