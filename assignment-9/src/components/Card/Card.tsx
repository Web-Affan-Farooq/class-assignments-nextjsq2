// Card for products page
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface Icard {
  name:string;
  shortDescription:string;
  longDescription:string;
  availability:string;
  price:number; 
  rating:number; 
  image:string;
  brand:string;
  id:number;
}

const Card = ({name, shortDescription, price, image, id}:Icard) => {
  return (
    <div className='w-[260px] px-[20px] py-[20px] rounded-lg flex flex-col gap-2 card max-sm:w-[200px] max-[420px]:w-[180px] bg-white max-sm:px-[10px] max-sm:py-[12px]'>
        <Image src={image} alt='product' width={250} height={250} className=''/>
        <h2 className='text-left font-bold uppercase'>{name}</h2>
        <p className='text-gray-600 max-sm:text-[14px]'>{shortDescription}</p>
        <div className='flex flex-row flex-wrap justify-between px-[6px] items-center'>
            <span className='text-yellow-600 font-bold  text-[20px]'>${price}</span>
            <Link href={`/products/${id}`}>
            <button type="button" className='bg-[#3835d3] text-white font-normal text-[15px] p-[7px] max-sm:p-[6px] rounded-lg'><i className={`fa-solid fa-cart-shopping`}></i> Buy now</button>
            </Link>
        </div>
    </div>
  )
}

export default Card;