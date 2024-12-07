import React from 'react'

interface Button {
    name:string;
}

const Primary_red = ({name}:Button) => {
  return (
    <button type="button" className='bg-red text-white py-[16px] px-[48px] max-md:py-[10px] max-md:px-[30px]'>{name}</button>
  )
}

export default Primary_red