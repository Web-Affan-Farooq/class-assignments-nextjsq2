"use client";

import React from 'react';

const Section_3 = () => {
  return (
    <section className='py-[30px]'>
        <h1 className='uppercase text-[24px] font-bold text-center'>SUBSCRIBE TO OUR NEWSLETTER</h1>
<br /><br /><br />
        <form action="" className='m-auto flex flex-row flex-nowrap justify-center items-center'>
            <label htmlFor="Your email" id='email'>
                <div>
                <input type="email" name='email' id='email' placeholder='Your email' required className='py-[5px] px-[20px]'/>
                <button type="button" className='bg-[#3835d3] text-white font-normal text-[15px] p-[7px] max-sm:p-[6px] rounded-lg'>Subscribe</button>
                </div>
            </label>
        </form>
    </section>
  )
}

export default Section_3