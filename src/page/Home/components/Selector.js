import React, { useState } from 'react'
import { groups, years, months, days, town } from 'config'

export default function Selector(props) {
  const [selectedVal, setSelectedVal] = useState('default')

  const handleChange = e => {
    const { composeInformation, name } = props
    setSelectedVal(e.target.value)
    composeInformation(name, e.target.value)
  }

  const createOption = ({ name, city }) => {
    switch (name) {
      case 'years':
        return dateOptionRender('西元年', years)
      case 'months':
        return dateOptionRender('月', months)
      case 'days':
        return dateOptionRender('日', days)
      case 'groups':
        return groupOptionRender()
      case 'city':
        return cityOptionRender()
      case 'district':
        return districtOptionRender(city)
      default:
        break
    }
  }

  return (
    <select
      id={props.name}
      value={selectedVal}
      onChange={handleChange}
      className={updateClassName(props.width)}
    >
      {createOption(props)}
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

const cityOptionRender = () => {
  const cityArr = town.map(item => item.city)
  return (
    <>
      <option value="default" disabled>
        請選擇縣市
      </option>
      {cityArr.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </>
  )
}

const districtOptionRender = city => {
  //  const districtIndex = town.findIndex(item => {
  //   item.city === city
  // })
  return (
    <>
      <option value="default" disabled>
        請選擇鄉鎮
      </option>
      {city && (
        <option value="default" disabled>
          ㄏㄏ
        </option>
      )}
    </>
  )
}

const groupOptionRender = () => (
  <>
    <option value="default" disabled>
      請選擇
    </option>
    {groups.map(item => (
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
