import React, { useState } from 'react'
import { groupArr, years, months, days } from 'constant'

export default function Selector(props) {
  const [selectedVal, setSelectedVal] = useState('default')
  const handleOption = type => {
    switch (type) {
      case 'years':
        return yearOptionRender()
      case 'months':
        return monthOptionRender()
      case 'days':
        return daysOptionRender()
      case 'groups':
        return groupOptionRender()
      default:
        break
    }
  }
  const handleChange = e => {
    setSelectedVal(e.target.value)
  }
  return (
    <select
      id={props.value}
      value={selectedVal}
      onChange={handleChange}
      className={`${props.width === '1/3' ? 'oneThird' : props.width === '1/2' ? 'oneHalf' : null}`}
    >
      {handleOption(props.value)}
    </select>
  )
}

const yearOptionRender = () => (
  <>
    <option value="default" disabled>
      西元年
    </option>
    {years.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </>
)
const monthOptionRender = () => (
  <>
    <option value="default" disabled>
      月
    </option>
    {months.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </>
)
const daysOptionRender = () => (
  <>
    <option value="default" disabled>
      日
    </option>
    {days.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))}
  </>
)
const groupOptionRender = () => (
  <>
    <option value="default" disabled>
      請選擇
    </option>
    {groupArr.map(item => (
      <option value={item.value} key={item.value}>
        {item.label}
      </option>
    ))}
  </>
)
