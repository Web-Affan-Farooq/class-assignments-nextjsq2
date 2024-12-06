"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import "./style.css";

const Hero_scroll = () => {
    // const scrollStore = useRef<HTMLDivElement | null>(null); 
    
        // useEffect(() => {
        //     const myInterval = setInterval(() => {
        //         if(scrollStore.current) {
        //             scrollStore.current.scrollBy({left:(window.innerWidth/100)*60,behavior:'smooth'});
        //         }
        //     }, 5000);

        //     return () => {
        //         clearInterval(myInterval);
        //     }
            
        // },[]);


  return (
    // <div className='scroll-container w-[60vw] h-[400px] border-2 border-solid border-black overflow-x-auto whitespace-nowrap' ref={scrollStore}>
    //     <div className='flex flex-row flex-nowrap gap-0'>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     <Image src={"/images/hero-banner.svg"} alt='hero-banner' width={100} height={400} className='object-cover w-auto h-auto'/>
    //     </div>
    // </div>

<div className='w-[600px] h-[400px] border-2 border-solid border-black max-md:w-[500px] max-sm:w-[400px]'>
<Image src={"/images/hero-banner.svg"} alt='offer-banner' width={400} height={400} className='object-cover w-auto h-auto'/>
</div>
  )
}

export default Hero_scroll