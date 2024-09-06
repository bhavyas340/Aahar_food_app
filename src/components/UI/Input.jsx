import React from 'react'

export default function Input({label, id, ...props}) {
  return (
    <p className='control'>
      <label htmlFor={id}>{label}</label> // here html for is used for which input this lable is connected
      <input id={id} name={id} required {...props}/>
    </p>
  )
}
