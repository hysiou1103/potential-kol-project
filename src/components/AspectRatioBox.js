import React from 'react'
import style from './aspectRatioBox.module.scss'

export default function AspectRatioBox({ rateOfWidth, rateOfHeight, children }) {
  const calcuPaddingTop = `${(rateOfHeight * 100) / rateOfWidth}%`
  return (
    <div className={style.aspectRatioContainter}>
      <div className="contentSpace" style={{ paddingTop: calcuPaddingTop }}></div>
      <div className={style.aspectRatioContent}>{children}</div>
    </div>
  )
}
