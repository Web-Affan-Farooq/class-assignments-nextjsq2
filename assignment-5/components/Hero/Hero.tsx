import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full flex flex-row justify-center items-center h-[573px] gap-10'>
      <div className='w-1/2'>
        <h1 className='text-[37px] font-bold leading-[62px] tracking-[2.5%] text-left'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className='text-[29.24px] font-medium leading-[48.1px text-left tracking-wide text-custombrown'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        <br />
        <Button text='Explore Now'/>
      </div>
      <div>
        <Image src={'/images/hero-img.svg'} alt='hero lady image' width={421} height={573} className='w-[421.38px] h-[573.59px]'/>
      </div>
    </section>
  )
}

export default Hero;