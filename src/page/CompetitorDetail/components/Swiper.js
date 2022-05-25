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

  const [displayPhoto, setDisplayPhoto] = useState('first')
  const [activeDot, setActiveDot] = useState(0)
  const handleClick = e => {
    if (e.target.nodeName !== 'LI') return
    const chosenNum = parseInt(e.target.dataset.value)
    setActiveDot(chosenNum)
    if (chosenNum === 0) {
      setDisplayPhoto('first')
    } else if (chosenNum === 1) {
      setDisplayPhoto('second')
    } else {
      setDisplayPhoto('third')
    }
  }

  const renderPhoto = renderItem => {
    return renderItem.map(item => <img key={item.fileName} src={item.src} />)
  }

  const renderPhotoSelector = renderItem => {
    return renderItem.map((item, index) => (
      <li
        key={item.fileName}
        className={index === activeDot ? style.active : null}
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
    <div className={`${style.swiperWrap} ${style[renderClass(groups)]}`}>
      <div className={`${style.imgContainer} flex items-center justify-center`}>
        <div className={`${style.imgWrap} ${style[displayPhoto]} flex `}>
          {renderPhoto(renderGroup)}
        </div>
      </div>
      <ul className={`${style.selectDot} flex justify-center`} onClick={handleClick}>
        {renderPhotoSelector(renderGroup)}
      </ul>
    </div>
  )
}
