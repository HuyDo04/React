import React from 'react'
import './Button.css'

function Button(props) {
    console.log(props)
    const size = props.size ? `btn-${props.size}` : "";
    const variant = props.variant ? `btn-${props.variant} ` : ""
  return (
    <button className={`btn btn-primary`}>Click Me</button>
  )
}

export default Button
