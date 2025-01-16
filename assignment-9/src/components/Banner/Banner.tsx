// main banner component 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className='py-[50px] flex flex-col flex-wrap gap-5 md:gap-2 md:flex-row md:justify-center md:items-center lg:justify-around'>
        <Image src={"/images/banner.png"} alt="shoe picture" width={370} height={370} className='m-auto md:m-0'/>
        <div className='flex flex-col flex-wrap gap-3 p-[15px] md:w-1/2'>
            <h1 className='text-[55px] leading-[60px] sm:text-[65px] tracking-[-0.35rem] sm:leading-[75px] font-bold font-oswald uppercase m-0'><span className='text-[orangered]'>nike react</span> <br /> infinity run 2</h1>
            <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio fugiat architecto, autem tempora id facere enim cumquehdufhufgh jhurihigfurh fgu jhtuirhf.</p>
            <div>
              <Link href={"/products"}>
              <button type="button" className='bg-[#3835d3] text-white text-[16px] px-[15px] py-[10px] max-sm:p-[6px] rounded-md font-semibold'><i className={`fa-solid fa-cart-shopping`}></i>&nbsp; Shop Now</button>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Banner