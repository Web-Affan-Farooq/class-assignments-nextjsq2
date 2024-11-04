import React from 'react'

const Header = () => {
  return (
    <header className='bg-background w-full p-4 flex flex-row flex-wrap justify-between items-center'>
      <h1 className='text-white text-[75px] font-normal'>MANZZARI</h1>
      <label htmlFor="Search For jewelllery" className='flex flex-row flex-nowrap bg-white rounded-[13px]'><input type="text" name='searchQuerry' id='search-querry' placeholder='Search for jewellery' className='w-[769px] py-3 px-7 rounded-xl'/><button type='button' className='py-3 px-4 bg-transparent'><i className="fa-solid fa-magnifying-glass"></i></button></label>
      <div className='flex flex-row flex-nowrap gap-[38px] text-white font-bold text-4xl justify-center align-middle items-center'>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-regular fa-user"></i>
      <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  )
}

export default Header