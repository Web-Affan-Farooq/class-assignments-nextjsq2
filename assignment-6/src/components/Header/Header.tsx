"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [navStatus, setnavStatus] = useState(false);

    const handleNav = () => {
        setnavStatus(!navStatus);
    }
    const handleRemoval = () => {
        if(window.innerWidth <=900) {
            setnavStatus(!navStatus)
        }
    }
  return (
    <header className='px-[64px] py-2 h-[72px] max-[900px]:backdrop-blur-3xl max-[900px]:bg-[rgba(255,255,255,0.1)] max-[900px]:backdrop-opacity-100 bg-white max-[900px]:px-[24px] flex flex-row justify-between items-center w-full max-[900px]:fixed z-5 max-lg:flex-col max-lg:items-start max-lg:h-auto max-lg:py-3 max-lg:px-[24px] max-md:py-5'>
        <div>
             <Image src={'/images/logo.svg'} alt='logo images' width={150} height={72} className='object-cover'/>
        </div>
        <div className={`relative flex flex-row justify-center text-center items-center gap-2 max-lg:flex-nowrap max-[900px]:flex-col max-[900px]:m-auto max-[900px]:my-12 ${navStatus? "hidden": "flex"} transition-customtransition max-sm:gap-5 max-md:gap-5`}>
                 <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-customtransition'>
                 <Link href={'/'} className='text-black' onClick={handleRemoval}>Home</Link>
             </div>
             <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-customtransition'>
                 <Link href={'/'} className='text-black' onClick={handleRemoval}>Courses</Link>
             </div>
             <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-customtransition'>
                 <Link href={'/'} className='text-black' onClick={handleRemoval}>Services</Link>
             </div>
             <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-customtransition'>
                 <Link href={'/'} className='text-black' onClick={handleRemoval}>Achievements</Link>
             </div>
             <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-customtransition'>
                 <Link href={'/'} className='text-black' onClick={handleRemoval}>Testimonials</Link>
             </div>
             <div className='flex flex-row flex-nowrap gap-3'>
             <button type="button" className='px-[20px] py-[8px] bg-transparent border-[1px] border-solid border-black rounded-[5px]' onClick={handleRemoval}>Login</button>
             <button type="button" className='px-[20px] py-[8px] rounded-[5px] bg-black text-white' onClick={handleRemoval}>Signup</button>
             </div>
             
        </div>
        <div className='absolute right-8 top-6 max-[900px]:block text-2xl hidden' onClick={handleNav}>
        {
            navStatus? <i className="fa-solid fa-bars"></i>: <i className="fa-solid fa-xmark"></i>
        }
        </div>
    </header>
  )
}

export default Header;