import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-[40px] flex flex-row flex-wrap gap-3 justify-center items-start'>

        <div className='flex flex-col justify-center items-start gap-2 w-[150px] p-[5px]'>
            <h2 className='text-[20px] font-bold'>FEATURED</h2>
            <div className='flex flex-col justify-center items-start'>
                <Link href={"/"} className='text-[15px] text-gray-600'>Holiday Gift Guide</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Air Force 1</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Jordan 1</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Air Max 2090</Link>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-2 w-[150px] p-[5px]'>
            <h2 className='text-[20px] font-bold'>SHOES</h2>
            <div className='flex flex-col justify-center items-start'>
                <Link href={"/"} className='text-[15px] text-gray-600'>All Shoes</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Jordan Shoes 1</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Running Shoes</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Basketball Shoes</Link>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-2 w-[150px] p-[5px]'>
            <h2 className='text-[20px] font-bold'>CLOTHING</h2>
            <div className='flex flex-col justify-center items-start'>
                <Link href={"/"} className='text-[15px] text-gray-600'>All Clothing</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Tops & T-Shirts</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Shorts</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Hoodies & Pullovers</Link>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-2 w-[150px] p-[5px]'>
            <h2 className='text-[20px] font-bold'>SOCCER</h2>
            <div className='flex flex-col justify-center items-start'>
                <Link href={"/"} className='text-[15px] text-gray-600'>Infant & Toddler Shoes</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Kids Basketball Shoes</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Jordan 1</Link>
                <Link href={"/"} className='text-[15px] text-gray-600'>Kids Running Shoes</Link>
            </div>
        </div>

        <br />
        <div className='border-t-2 border-gray-400 border-solid p-[10px]'>
            Created By <span className='text-gary-600 font-bold'>Muhammad affan</span>
        </div>
    </footer>
  )
}

export default Footer;