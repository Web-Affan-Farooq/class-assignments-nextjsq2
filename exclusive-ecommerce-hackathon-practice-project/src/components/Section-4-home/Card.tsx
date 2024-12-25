import React from 'react';
import Image from 'next/image';

interface imageObject {
    src:string;
    key:number;
}

// insert card and logic from section 2
const Card = () => {
  return (
    <div className='border-2 border-solid border-black w-[270px] h-[350px]'>
        <Image src={"/images/section-4-home/swetter.svg"} alt='swetter' width={140} height={146} className='object-cover border-2 border-solid border-black'/>
        <div className='border-2 border-solid border-black'>
            <p className='font-bold'>The North Coat</p>
            <span className='text-red'>$120</span>&nbsp;<span className='text-gray-400 decoration-gray-500 line-through'>$160</span>
        </div>

        <div className='flex flex-row flex-nowrap border-2 border-solid border-black gap-2 justify-start items-center'>
            {/* {list.map((listItem:imageObject, index:number) => {
                return <div key={index}>
                    <Image src={listItem.src} alt='stars' width={22} height={22} className='object-cover border-2 border-solid border-black' key={listItem.key}/>
                </div>;
            })} */}
                                <Image src={"/icons/ratings.svg"} alt='stars' width={22} height={22} className='object-cover border-2 border-solid border-black'/>
        <span className='text-gray-400'>88</span>
        </div>
    </div>
  )
}

export default Card