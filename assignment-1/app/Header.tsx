"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [navStatus, setnavStatus] = useState(false);

    const handleNav = () => {
        setnavStatus(!navStatus)
    }
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">Affan</div>
                    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                    <label htmlFor="menu-toggle" className="hamburger" onClick={handleNav}>
                    {navStatus? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
                    </label>

                    <ul className="navbar-links">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/services'}>Services</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header