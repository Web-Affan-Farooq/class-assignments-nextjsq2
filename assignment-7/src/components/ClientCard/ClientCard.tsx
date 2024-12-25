import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ICard {
  category: string;
  description: string;
  price: number;
  title: string;
  ratings: {
    rate: number;
    count: number;
  };
  image: string;
  id:number
}
const ClientCard = ({ title,id, description, image }: ICard) => {
  return (
    <div className='w-[300px] bg-gray-300 rounded-md p-[20px] flex flex-col gap-3'>
        <Image src={image} alt={title} width={150} height={150} className='object-cover m-auto' />
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-gray-600 text-[15px]'>{title}</h1>
        <div className="w-full h-[20px] overflow-hidden">
        <p className='w-full h-[10px] text-gray-500 font-medium text-[15px]'>{description}</p>
        </div>
        <Link href={`/products/${id}`} className='text-[15px] text-blue-500'>See more ..</Link>
      </div>
    </div>
  )
}

export default ClientCard