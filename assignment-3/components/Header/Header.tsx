"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';

const Header = () => {
    const [navStatus, setnavStatus] = useState<boolean>(false);

    const handleMenu = () => {
        setnavStatus(!navStatus);
    }

    return (
        <div>
            <header className='w-full fixed z-10'>
                <nav className='p-6 bg-black flex justify-between leading-4 h-20 md:h-auto'>
                    <div className="text-3xl font-bold text-white">LOGO</div>
                    <div className={`flex-col md:flex-row relative right-7 top-14 md:top-0 gap-10 md:flex ${navStatus? "flex bg-black w-full h-96": "hidden"}`}>
                        <div className='nav-options text-center mx-auto py-2.5 px-2 font-normal text-gray-400'><Link href={'#section-1'}>Home</Link></div>
                        <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-400'><Link href={'#section-2'}>About</Link></div>
                        <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-400'><Link href={'#section-3'}>Services</Link></div>
                        <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-400'><Link href={'#section-4'}>Contact</Link></div>
                        <Button type='hide-responsive'/>
                        </div>
                    <div id="menu-icon" onClick={handleMenu} className="md:hidden text-white">{navStatus ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;