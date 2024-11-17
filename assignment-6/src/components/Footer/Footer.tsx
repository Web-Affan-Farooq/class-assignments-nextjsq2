import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-row flex-wrap justify-center gap-5'>
        <div className='w-[280px] border-2 border-solid flex flex-col items-start border-black'>
        <Image src={'/images/logo.svg'} alt='logo images' width={150} height={72}/>
        </div>
        <div className='w-[280px] border-2 border-solid flex flex-col justify-center items-start gap-7 border-black text-left max-lg:items-center'>
            <h2 className='text-2xl font-bold'>Courses</h2>
            <Link href={'/'}>Business</Link>
            <Link href={'/'}>Development</Link>
            <Link href={'/'}>Technology</Link>
            <Link href={'/'}>Design</Link>
            <Link href={'/'}>Programming</Link>
        </div>
        <div className='w-[280px] border-2 border-solid flex flex-col justify-center items-start gap-7 border-black text-left max-lg:items-center'>
            <h2 className='text-2xl font-bold'>Resources</h2>
            <Link href={'/'}>Career</Link>
            <Link href={'/'}>Resume</Link>
            <Link href={'/'}>Learning</Link>
            <Link href={'/'}>Interview Preparation</Link>
            <Link href={'/'}>Jobs</Link>
        </div>
        <div className='w-[280px] border-2 border-solid flex flex-col justify-center items-start gap-7 border-black text-left max-lg:items-center'>
            <h2 className='text-2xl font-bold'>About Us</h2>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>Help and Support</Link>
            <Link href={'/'}>FAQ</Link>
            <Link href={'/'}>Terms and conditions</Link>
            <Link href={'/'}>Parteners</Link>
        </div>
    </footer>
  )
}

export default Footer