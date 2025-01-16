"use client";

import React from 'react';
import Image from 'next/image';

const Section_2 = () => {

  return (
    <section className='p-[10px] py-20 flex flex-col flex-wrap justify-center items-center md:flex-row sm:gap-5 max-sm:gap-5'>

      <div className='flex flex-col flex-wrap gap-2 md:w-1/2'>
        

      <div className='rounded-md w-full p-3 flex flex-row flex-nowrap justify-between items-center max-md:w-[70vw] max-sm:w-[90vw]'>
        <Image src={"/images/img-8.png"} alt='poster' width={100} height={100}/>    

        <div>
        <h2 className='text-left font-bold text-[20px]'>Find The Perfect Fit</h2>
          <p className='text-[15px] text-gray-700'>Lorem ipsum, dolor sit amet consectetur dit aliquid eum repudiandae omnis, labore cupiditate, ratione </p>
          </div> 
       </div>

       <div className='rounded-md w-full p-3 flex flex-row flex-nowrap justify-between items-center max-md:w-[70vw] max-sm:w-[90vw]'>
        <Image src={"/images/img-8.png"} alt='poster' width={100} height={100}/>    

        <div>
        <h2 className='text-left font-bold text-[20px]'>Find The Perfect Fit</h2>
          <p className='text-[15px] text-gray-700'>Lorem ipsum, dolor sit amet consectetur dit aliquid eum repudiandae omnis, labore cupiditate, ratione </p>
          </div> 
       </div>

       <div className='rounded-md w-full p-3 flex flex-row flex-nowrap justify-between items-center max-md:w-[70vw] max-sm:w-[90vw]'>
        <Image src={"/images/img-8.png"} alt='poster' width={100} height={100}/>    

        <div>
        <h2 className='text-left font-bold text-[20px]'>Find The Perfect Fit</h2>
          <p className='text-[15px] text-gray-700'>Lorem ipsum, dolor sit amet consectetur dit aliquid eum repudiandae omnis, labore cupiditate, ratione </p>
          </div> 
       </div>
       
      </div>
      <Image src={"/images/img-7.png"} alt='poster' width={300} height={300} className='lg:w-[400px] sm:gap-5'/>
    </section>
  )
}

export default Section_2