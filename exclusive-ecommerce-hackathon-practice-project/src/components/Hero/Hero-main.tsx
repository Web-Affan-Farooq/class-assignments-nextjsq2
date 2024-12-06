import React from 'react';
import Hero_sidenav from './Hero-sidenav';
import Image from 'next/image';
import "./style.css"
import Hero_scroll from './Hero-scroll';

const Hero_main = () => {
  return (
    <section className='w-full border-2 border-solid border-black flex flex-row flex-wrap justify-center items-center gap-2 max-md:flex-col-reverse'>
    <div className='flex flex-col flex-wrap p-4 w-[220px]'>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Woman's Fashion <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Men's Fashion <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Electronics <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Home And Lifestyle <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Medicine <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Sports And Outdoor <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Baby's And Toys <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Grocery And Pets <i className="fa-solid fa-angle-right"></i></div>
        <div className=' py-[10px] flex flex-row flex-nowrap justify-between items-center p-1'>Health And Beauty <i className="fa-solid fa-angle-right"></i></div>
    </div>

    {/* <div className='scroll-container border-2 border-solid border-black w-[700px] overflow-x-auto whitespace-nowrap'> */}
        {/* <div className='flex flex-row flex-nowrap gap-0 justify-center items-center'> */}
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>

        {/* <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/>
        <Image src={"/images/hero-banner.svg"} alt='hero-image' width={670} height={344} className='object-cover'/> */}

        {/* </div> */}
    {/* </div> */}

    </section>
  )
}

export default Hero_main