import React, { useState, useEffect } from 'react'
import AspectRatioBox from 'components/AspectRatioBox'
import style from './Swiper.module.scss'

export default function Swiper({ photoGroup = [], groups = '' }) {
  const [renderGroup, setRenderPhoto] = useState([])
  useEffect(() => {
    if (checkObjectStatus(photoGroup)) {
      const validPhoto = photoGroup.filter(item => {
        return checkObjectStatus(item)
      })
      setRenderPhoto(validPhoto)
    }
  }, [photoGroup])

  const [activePhoto, setActivePhoto] = useState(0)
  const handleClick = e => {
    if (e.target.nodeName === 'LI') {
      const chosenNum = parseInt(e.target.dataset.value)
      setActivePhoto(chosenNum)
    }
  }

  const renderPhoto = renderItem => {
    return renderItem.map((item, index) => (
      <img
        className={`${style.overlapImg} ${index === activePhoto ? style.active : null}`}
        key={item.fileName}
        src={item.src}
        alt="competitor"
        width="415"
        height="415"
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
      <div className={`${style.imgWrap}`}>
        <AspectRatioBox rateOfWidth={415} rateOfHeight={415}>
          {renderPhoto(renderGroup)}
        </AspectRatioBox>
      </div>
      <ul className={`${style.selectDot} flex justify-center absolute z-1`} onClick={handleClick}>
        {renderPhotoSelector(renderGroup)}
      </ul>
    </div>
  )
}
