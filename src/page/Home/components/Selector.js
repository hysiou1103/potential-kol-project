import React, { useState } from 'react'
import { groupArr } from 'constant'
import { years } from 'constant'

const dateOptionRender = type => {
  switch (type) {
    case 'year':
      return (
        <>
          <option defaultValue>西元年</option>
          {years.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </>
      )
      break

    default:
      break
  }
}

const groupOptionRender = () => (
  <>
    <option defaultValue>請選擇</option>
    {groupArr.map(item => (
      <option value={item.value} key={item.value}>
        {item.label}
      </option>
    ))}
  </>
)

export const Selector = props => {
  const [selectedVal, setSelectedVal] = useState('')
  const handleOption = type => {
    switch (type) {
      case 'year':
        return dateOptionRender(type)
      case 'group':
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
      className={`${props.width === '1/3' ? 'oneThird' : null} ${
        props.width === '1/2' ? 'oneHalf' : null
      }`}
    >
      {handleOption(props.value)}
    </select>
  )
}
