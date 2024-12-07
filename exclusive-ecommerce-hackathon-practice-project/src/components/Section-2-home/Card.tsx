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

interface imageObject {
    src:string;
    key:number;
}

const Card = ({
    image,  // for image url
    offer, // how much dicont in percentage
    name, // name of product
    initialPrice, // starting price
    dicountedPrice, // dicounted price
    stars, // stars
    ratingsCount, // number of likes
    isLiked, // liked by user or not
}:Card) => {

    const list = [];
    for(let i=0; i<stars; i++) {
        // list.push(<Image src={"/icons/ratings.svg"} alt='stars' width={14} height={14} className='object-cover border-2 border-solid border-black' key={i}/>)
        list.push({src:"/icons/ratings.svg", key:i})
    }

  return (
    <div className='w-[290px] h-[380px] p-2 border-2 border-solid border-black flex flex-col flex-nowrap gap-1 justify-center items-start'>
        <div className='bg-red rounded-lg text-white w-[70px] text-center py-2'>{offer}</div>
        <Image src={"/images/section-2-home/1.svg"} alt='product-image' width={172} height={152} className='object-cover m-auto'/>

        <div className='relative left-[230px] bottom-[130px] flex flex-col flex-nowrap gap-4 border-2 border-solid border-black w-[20px] h-[50px]'>
            <Image src={"/icons/heart.svg"} alt='heart-icon' width={20} height={20} className='object-cover'/>
            <Image src={"/icons/quick-view.svg"} alt='quick-view-icon' width={20} height={20} className='object-cover'/>
        </div>

        <div className='border-2 border-solid border-black'>
            <p className='font-bold'>{name}</p>
            <span className='text-red'>{dicountedPrice}</span>&nbsp;<span className='text-gray-400 decoration-gray-500 line-through'>({initialPrice})</span>
        </div>

        <div className='flex flex-row flex-nowrap border-2 border-solid border-black gap-2 justify-start items-center'>
            {list.map((listItem:imageObject, index:number) => {
                return <div key={index}>
                    <Image src={listItem.src} alt='stars' width={22} height={22} className='object-cover border-2 border-solid border-black' key={listItem.key}/>
                </div>;
            })}
        <span className='text-gray-400'>({ratingsCount})</span>
        </div>
    </div>
  )
}

export default Card