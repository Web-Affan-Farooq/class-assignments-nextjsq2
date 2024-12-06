import React from 'react';
import Image from 'next/image';

interface Card {
    image:string;
    offer:string;
    name:string;
    initialPrice:string;
    dicountedPrice:string;
    stars:number;
    ratingsCount:number;
    isLiked:boolean;
}
const Card = () => {
  return (
    <div className='w-[270px] p-2 border-2 border-solid border-black'>
        <div className='bg-red rounded-lg text-white w-[70px] text-center py-2'>-45%</div>
        <Image src={"/images/section-2-home/1.svg"} alt='product-image' width={270} height={270} className='object-cover'/>

        <div className='relative left-[230px] bottom-[200px] flex flex-col flex-nowrap gap-5 border-2 border-solid border-black w-[20px] h-[60px]'>
            <Image src={"/icons/heart.svg"} alt='heart-icon' width={20} height={20} className='object-cover'/>
            <Image src={"/icons/quick-view.svg"} alt='quick-view-icon' width={20} height={20} className='object-cover'/>
        </div>

        <div>
            <p>HAVIT HV-G92 Gamepad</p>
            <span className='text-red'>$120</span>&nbsp;<span className='text-gray-400 decoration-gray-500 line-through'>($160)</span>
        </div>

        <div className='flex flex-row flex-nowrap'>
            <Image src={"/icons/ratings.svg"} alt='stars' width={18} height={18} className='object-cover'/>
            <Image src={"/icons/ratings.svg"} alt='stars' width={18} height={18} className='object-cover'/>
            <Image src={"/icons/ratings.svg"} alt='stars' width={18} height={18} className='object-cover'/>
            <Image src={"/icons/ratings.svg"} alt='stars' width={18} height={18} className='object-cover'/>
            <Image src={"/icons/ratings.svg"} alt='stars' width={18} height={18} className='object-cover'/> 
        </div>

        <span className='text-gray-400'>(88)</span>
  
    </div>
  )
}

export default Card