import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    // <header className='w-full fixed border-b-2 border-solid border-black px-[50px] flex flex-col flex-wrap justify-between h-[72px] max-md:gap-10 max-md:py-4 max-md:items-start max-md:flex-nowrap max-md:px-[24px] max-[1000px]:px-[30px] max-[1000px]:flex-col'>
    <header className='w-full fixed border-b-2 border-solid border-black px-[50px] h-[72px] flex flex-row justify-between flex-wrap max-[1000px]:flex-col'>

        <div className='h-full flex align-center'>
        <Image src={'/images/logo.svg'} alt='logo images' width={150} height={72}/>
        </div>

        <div className='flex flex-row flex-wrap gap-[28px] justify-center items-center max-md:flex-col max-md:relative max-md:top-20 max-md:right-12'>
            <div>
                <Link href={'/'} className='text-black'>Home</Link>
            </div>
            <div>
                <Link href={'/'} className='text-black'>Courses</Link>
            </div>
            <div>
                <Link href={'/'} className='text-black'>Services</Link>
            </div>
            <div>
                <Link href={'/'} className='text-black'>Achievements</Link>
            </div>
            <div>
                <Link href={'/'} className='text-black'>Testimonials</Link>
            </div>
            <button type="button" className='py-[7px] px-[20px] border-[1px] border-solid border-black rounded-md'>Login</button>
            <button type="button" className='py-[8px] px-[20px] bg-black text-white rounded-md'>Signup</button>
        </div>

        <div className='max-[1000px]:'>
        <i className="fa-solid fa-bars text-[30px] relative top-[4px]"></i>
        </div>

    </header>
  )
}

export default Header;