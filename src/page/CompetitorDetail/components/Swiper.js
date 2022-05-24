import React, { useState, useEffect } from 'react'
import style from './Swiper.module.scss'

export default function Swiper({ photoGroup = [] }) {
  const [renderGroup, setRenderPhoto] = useState([])
  useEffect(() => {
    if (checkObjectStatus(photoGroup)) {
      const validPhoto = photoGroup.filter(item => {
        if (checkObjectStatus(item)) return item
      })
      setRenderPhoto(validPhoto)
    }
  }, [photoGroup])

  const renderPhoto = renderItem => {
    return renderItem.map(item => <img key={item.fileName} src={item.src} />)
  }

  const renderPhotoSelector = renderItem => {
    return renderItem.map((item, index) => <li key={item.fileName} data-value={index} />)
  }

  const [displayInBlock, setDisplayInBlock] = useState([])
  const handleClick = e => {
    if (e.target.nodeName !== 'LI') return
    const chosenNum = e.target.dataset.value
    if (chosenNum === 0) {
      setDisplayInBlock('first')
    } else if (chosenNum === 1) {
      setDisplayInBlock('second')
    } else {
      setDisplayInBlock('third')
    }
  }

  const checkObjectStatus = checkedItem => {
    return Object.values(checkedItem).every(value => value)
  }

  return (
    <div className={style.swiperWrap}>
      <div className={`${style.imgContainer} flex items-center justify-center`}>
        <div className={`${style.imgWrap} ${style[displayInBlock]} flex `}>
          {renderPhoto(renderGroup)}
        </div>
      </div>
      <ul className={`${style.selectDot} flex justify-center`} onClick={handleClick}>
        {renderPhotoSelector(renderGroup)}
      </ul>
    </div>
  )
}
