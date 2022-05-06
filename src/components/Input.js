import React, {useState} from 'react'



export const Input = (props) => {
  const [val, setVal] = useState('')
  const handleValidate = (e) => {
    switch (props.value) {
      case 'name':
        const initialName = e.target.value.split('')
        initialName.forEach((item, index, arr) => {
          index % 2 === 0 ? arr[index] = '*' : arr[index] = item
        })
        const newName = initialName.join('')
        setVal(newName)
        break;
      case 'email':
        break;
      case 'phone':
        const initialPhone = e.target.value.split('')
        initialPhone.forEach((item, index, arr) => {
          index > 3 && index < 7 ? arr[index] = '*' : arr[index] = item
        })
        const newPhone = initialPhone.join('') 
        setVal(newPhone)
        break;
      default:
        setVal(e.target.value)
        break;
    }

  }
  return (
    <>
      <label htmlFor={props.value}>{props.name}</label>
      <input type="text"
        id={props.value}
        value={val}
        onChange={handleValidate}
        className={props.grid? 'col-4' : null}
      />
    </>

  )

}