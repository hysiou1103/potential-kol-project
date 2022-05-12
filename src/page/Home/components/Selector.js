import React, { useState } from 'react'
import { groups, years, months, days, cityList } from 'config'

export default function Selector(props) {
  const [selectedVal, setSelectedVal] = useState('default')
  const { createList = () => {}, name = '', city = '', width = '' } = props
  const handleChange = e => {
    setSelectedVal(e.target.value)
    createList(name, e.target.value)
  }

  const createOption = () => {
    switch (name) {
      case 'years':
        return dateOptionRender('西元年', years)
      case 'months':
        return dateOptionRender('月', months)
      case 'days':
        return dateOptionRender('日', days)
      case 'groups':
        return groupOptionRender('請選擇', groups)
      case 'city':
        return cityOptionRender('請選擇縣市', cityArr)
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

const cityArr = cityList.map(item => item.Name)

const updateClassName = width => {
  if (width === '1/3') {
    return 'oneThird'
  } else if (width === '1/2') {
    return 'oneHalf'
  } else {
    return null
  }
}

const cityOptionRender = (placeHolder, cityData) => {
  return (
    <>
      <option value="default" disabled>
        {placeHolder}
      </option>
      {cityData.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </>
  )
}

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

const groupOptionRender = (placeHolder, groupData) => (
  <>
    <option value="default" disabled>
      {placeHolder}
    </option>
    {groupData.map(item => (
      <option value={item.value} key={item.value}>
        {item.label}
      </option>
    ))}
  </>
)

const dateOptionRender = (placeHolder, dateData) => (
  <>
    <option value="default" disabled>
      {placeHolder}
    </option>
    {dateData.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </>
)
