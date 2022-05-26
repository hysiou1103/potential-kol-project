import React, { useState, useEffect } from 'react'
import style from './Swiper.module.scss'

export default function Swiper({ photoGroup = [], groups = '' }) {
  const [renderGroup, setRenderPhoto] = useState([])
  useEffect(() => {
    if (checkObjectStatus(photoGroup)) {
      const validPhoto = photoGroup.filter(item => {
        if (checkObjectStatus(item)) return item
      })
      setRenderPhoto(validPhoto)
    }
  }, [photoGroup])

  const [activePhoto, setActivePhoto] = useState(0)
  const handleClick = e => {
    if (e.target.nodeName == 'LI') {
      const chosenNum = parseInt(e.target.dataset.value)
      setActivePhoto(chosenNum)
    }
  }

  const renderPhoto = renderItem => {
    return renderItem.map((item, index) => (
      <img
        className={`absolute z-1 
          ${style.overlapImg} 
          ${index === activePhoto ? style.active : null}
        `}
        key={item.fileName}
        src={item.src}
      />
    ))
  }

  const renderPhotoSelector = renderItem => {
    return renderItem.map((item, index) => (
      <li
        key={item.fileName}
        className={index === activePhoto ? style.active : null}
        data-value={index}
      />
    ))
  }

  const renderClass = groups => {
    return groups === '汪汪組' ? 'dogs' : 'cats'
  }

  const checkObjectStatus = checkedItem => {
    return Object.values(checkedItem).every(value => value)
  }

  return (
    <div className={`${style.swiperWrap} ${style[renderClass(groups)]} w-full relative z-0`}>
      <div className={`${style.imgWrap} relative z-0`}>{renderPhoto(renderGroup)}</div>
      <ul className={`${style.selectDot} flex justify-center absolute z-1`} onClick={handleClick}>
        {renderPhotoSelector(renderGroup)}
      </ul>
    </div>
  )
}
