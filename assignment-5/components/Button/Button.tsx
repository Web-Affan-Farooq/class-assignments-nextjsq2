import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <button type="button" className='w-[248px] h-[50px] top-[710.4px] left-[107.5px] p-[8.6px] gap-[8.6px] rounded-[8.6px] opacity-[0px] bg-background text-[25.8px] font-medium leading-[32px] text-white text-center'>{text}</button>
  )
}

export default Button