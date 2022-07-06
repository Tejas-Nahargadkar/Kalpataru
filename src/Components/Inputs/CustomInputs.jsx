import React from 'react'
import './CustomInputs.css'
export default function CustomInputs({type, label, name, placeholder, validation, width, ...props}) {
  return (
    <div className="CustomInput" style={{width:width+'%'}}>
        <label htmlFor={name}>{label}</label>
        <input className={validation&&'error'} name={name} type={type} placeholder={placeholder} autoComplete='off' {...props} />
        <span className='validation'>{validation}</span>
    </div>
  )
}
