"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const Header_2 = () => {
    const [navStatus, setNavStatus] = useState<boolean>(false);
    const [windowSize, setWindowSize] = useState<number>(0);

    const handleNav = () => {
        setNavStatus(prevState => !prevState); // Toggle the menu
    }

    const handleRemoval = () => {
        if (window.innerWidth <= 900) {
            setNavStatus(false); // Close the menu on mobile
        }
    }

    // Update window size on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set the initial window size

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
        }
    }, []);

    return (
        <header className={clsx(
            'px-[64px] py-2 h-[72px] bg-white',
            'max-[900px]:backdrop-blur-3xl max-[900px]:bg-[rgba(255,255,255,0.1)] max-[900px]:backdrop-opacity-100 max-[900px]:px-[24px] max-[900px]:fixed',
            'flex flex-row justify-between items-center w-full z-5',
            'max-lg:flex-col max-lg:items-start max-lg:h-auto max-lg:py-3 max-lg:px-[24px]',
            'max-md:py-5'
        )}>
            <div>
                <Image src={'/images/logo.svg'} alt="logo" width={150} height={72} className="object-cover" />
            </div>

            {/* Navigation Links (Mobile and Desktop) */}
            <div className={clsx(
                'relative flex flex-row justify-center text-center items-center gap-2 max-lg:flex-nowrap max-[900px]:flex-col max-[900px]:m-auto max-[900px]:my-12 transition-custom max-sm:gap-5 max-md:gap-5',
                navStatus ? 'block' : 'hidden',
                windowSize > 900 && 'flex' // Keep links visible for desktop screens
            )}>
                <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-custom'>
                    <Link href="/" className="text-black" onClick={handleRemoval}>Home</Link>
                </div>
                <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-custom'>
                    <Link href="/courses" className="text-black" onClick={handleRemoval}>Courses</Link>
                </div>
                <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-custom'>
                    <Link href="/services" className="text-black" onClick={handleRemoval}>Services</Link>
                </div>
                <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-custom'>
                    <Link href="/achievements" className="text-black" onClick={handleRemoval}>Achievements</Link>
                </div>
                <div className='py-[9px] hover:border-b-[1px] border-solid border-black w-[113px] h-[44px] text-center transition-custom'>
                    <Link href="/testimonials" className="text-black" onClick={handleRemoval}>Testimonials</Link>
                </div>

                {/* Login/Signup Buttons */}
                <div className='flex flex-row flex-nowrap gap-3'>
                    <button type="button" className='px-[20px] py-[8px] bg-transparent border-[1px] border-solid border-black rounded-[5px]' onClick={handleRemoval}>Login</button>
                    <button type="button" className='px-[20px] py-[8px] rounded-[5px] bg-black text-white' onClick={handleRemoval}>Signup</button>
                </div>
            </div>

            {/* Hamburger Icon for Mobile (Toggles Menu) */}
            <div className={clsx(
                'absolute right-8 top-6 text-2xl',
                windowSize <= 900 && 'block',
                'hidden max-[900px]:block'
            )} onClick={handleNav}>
                {navStatus ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
        </header>
    );
};

export default Header_2;