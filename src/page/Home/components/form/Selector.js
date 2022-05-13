import React, { useState } from 'react'
import { groups, years, months, days, cityList } from 'config'

export default function Selector({
  name = '',
  city = '',
  width = '',
  createSignUpData = () => {}
}) {
  const [selectedVal, setSelectedVal] = useState('default')
  const handleChange = e => {
    setSelectedVal(e.target.value)
    createSignUpData(name, e.target.value)
  }

  const cityArr = cityList.map(item => item.Name)
  const createOption = () => {
    switch (name) {
      case 'years':
        return commonOptionRender('西元年', years)
      case 'months':
        return commonOptionRender('月', months)
      case 'days':
        return commonOptionRender('日', days)
      case 'groups':
        return commonOptionRender('請選擇', groups)
      case 'city':
        return commonOptionRender('請選擇縣市', cityArr)
      case 'district':
        return districtOptionRender('請選擇鄉鎮', city)
      default:
        break
    }
  }

  return (
    <select
      id={name}
      value={selectedVal}
      onChange={handleChange}
      className={updateClassName(width)}
    >
      {createOption()}
    </select>
  )
}

const updateClassName = width => {
  if (width === '1/3') {
    return 'oneThird'
  } else if (width === '1/2') {
    return 'oneHalf'
  } else {
    return null
  }
}

const commonOptionRender = (placeHolder, renderData) => (
  <>
    <option value="default" disabled>
      {placeHolder}
    </option>
    {renderData.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </>
)

const districtOptionRender = (placeHolder, city) => {
  const cityIndex = cityList.findIndex(item => item.Name === city)
  return (
    <>
      <option value="default" disabled>
        {placeHolder}
      </option>
      {cityIndex !== -1 &&
        cityList[cityIndex].AreaList.map(item => (
          <option value={item.ZipCode} key={item.ZipCode}>
            {item.Name}
          </option>
        ))}
    </>
  )
}
