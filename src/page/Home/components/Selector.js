import React, { useState, useContext } from 'react'
import { FormContext } from './Form'
import { groups, years, months, days, cityList } from 'config'

export default function Selector({ name = '', width = '' }) {
  const { state, dispatch } = useContext(FormContext)
  const { signUpData } = state
  const [selectedVal, setSelectedVal] = useState('default')
  const handleChange = e => {
    setSelectedVal(e.target.value)
    dispatch({
      type: 'CREATE_SIGNUPDATA',
      payload: {
        dataKey: name,
        dataValue: e.target.value
      }
    })
  }

  const createOption = () => {
    const cityArr = cityList.map(item => item.Name)

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
        return districtOptionRender('請選擇鄉鎮', signUpData.city)
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
  let result = ''
  if (width === '1/3') {
    result = 'oneThird'
  } else if (width === '1/2') {
    result = 'oneHalf'
  }
  return result
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
