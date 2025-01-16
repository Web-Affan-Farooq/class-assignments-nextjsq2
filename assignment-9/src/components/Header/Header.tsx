// header component

"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [navStatus, setnavStatus] = useState(false);
    const [isMobile, setisMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setisMobile(true)
        }
        else {
            setisMobile(false);
        }
    }, []);

    const handleNav = () => {
        if (window.innerWidth <= 768) {
            setnavStatus(!navStatus)
        }
    }
    const handleRemoval = () => {
        if (window.innerWidth <= 900) {
            return setnavStatus(!navStatus)
        }
        else {
            setnavStatus(true)
        }
    }
    if (isMobile) {
        return (
            <header className='bg-[#fcf7f0] w-full fixed z-10 flex flex-row justify-between items-center px-[8px] py-[10px]'>
                <Image src={"/images/logo.svg"} alt="Nike React Logo" width={150} height={150} className='h-[50px] relative left-3' />

                <div className={`bg-[#fcf7f0] py-[40px] absolute top-12 max-md:w-[100vw] flex flex-col flex-nowrap justify-center items-center gap-4 ${navStatus ? "opacity-100 flex " : "opacity-0 hidden"}
            `}>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px]' onClick={handleRemoval}>
                        <Link href={"/"}>Home</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px]' onClick={handleRemoval}>
                        <Link href={"/"}>About</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px]' onClick={handleRemoval}>
                        <Link href={"/products"}>Products</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px] md:gap-1 md:px-[10px]' onClick={handleRemoval}>
                        <Link href={"/"}>Contact</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>


                </div>
                <div className='flex flex-row flex-nowrap justify-center items-center relative right-6 gap-1'>
                    {/* <Link href={"/cart"}>
                        <div className='flex flex-nowrap justify-center items-center'>
                            <i className={`text-gray-500 fa-solid fa-cart-shopping`}></i>
                            <span className='relative right-1 bottom-2 w-[14px] h-[14px] rounded-full text-[13px] text-center bg-[#E89B3C]'>1</span>
                        </div>
                    </Link> */}
                    <div className='max-md:block hidden'>
                        {
                            navStatus ? <i className="text-gray-500 fa-solid fa-xmark" onClick={handleNav}></i> : <i className="text-gray-500 fa-solid fa-bars" onClick={handleNav}></i>
                        }
                    </div>
                </div>
            </header>
        )
    }
    else {
        return (
            <header className='bg-[#fcf7f0] flex flex-row flex-wrap justify-between items-center px-[20px] py-[10px]'>
                <Image src={"/images/logo.svg"} alt="Nike React Logo" width={150} height={150} className='h-[50px] relative left-3' />

                <div className={`flex flex-row flex-wrap`}>

                    <div className='flex flex-col items-center justify-center group gap-5 px-[20px] md:gap-1 md:px-[10px]'>
                        <Link href={"/"}>Home</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px] md:gap-1 md:px-[10px]'>
                        <Link href={"/"}>About</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px] md:gap-1 md:px-[10px]'>
                        <Link href={"/products"}>Products</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    <div className='flex flex-col items-center justify-center group gap-2 px-[20px] md:gap-1 md:px-[10px]'>
                        <Link href={"/"}>Contact</Link>
                        <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                    </div>

                    {/* <div>
                    <Link href={"/cart"}>
                        <div className='flex flex-nowrap justify-center items-center'>
                            <i className={`text-gray-500 fa-solid fa-cart-shopping`}></i>
                            <span className='relative right-1 bottom-2 w-[14px] h-[14px] rounded-full text-[13px] text-center bg-[#E89B3C]'>{cart.length}</span>
                        </div>
                    </Link>
                    </div> */}
                </div>
            </header>
        )
    }
}

export default Header;