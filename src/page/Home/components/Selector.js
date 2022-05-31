import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saving_fieldData } from '../formSlice'
import { groups, years, months, days, cityList } from 'config'
import style from './selector.module.scss'

export default function Selector({ name = '', width = '' }) {
  const selectState = useSelector(state => state.form.signUpData[name])
  const dispatch = useDispatch()
  const handleChange = e => {
    dispatch(
      saving_fieldData({
        fieldName: name,
        fieldValue: e.target.value.trim()
      })
    )
  }

  const chosenCity = useSelector(state => state.form.signUpData.city)
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
        return districtOptionRender('請選擇鄉鎮', chosenCity.value)
      default:
        break
    }
  }

  return (
    <div className={`flex flex-col ${width && style[updateClassName(width)]}`}>
      <select id={name} value={selectState.value} onChange={handleChange}>
        {createOption()}
      </select>
      {selectState.error && <p className="errMsg"> {selectState.error}</p>}
    </div>
  )
}

const updateClassName = width => {
  let result = ''
  if (width === '1/3') {
    result = 'oneThirdSelector'
  } else if (width === '1/2') {
    result = 'oneHalfSelector'
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
