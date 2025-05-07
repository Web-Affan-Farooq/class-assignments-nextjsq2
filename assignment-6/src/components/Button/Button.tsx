import React from 'react'

interface Ibutton {
    type:"button" | "submit" | "reset",
    text:string;
}
const Button = ({text, type}:Ibutton) => {
  return (
    <button type={type} className=''>{text}</button>
  )
}

export default Button