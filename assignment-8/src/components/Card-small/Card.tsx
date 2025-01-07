import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({image, title, id}:{image:string; title:string; id:string}) => {
  return (
    <Link href={`/blogs/${id}`}>
        <div className='p-[10px] bg-white flex flex-row flex-nowrap gap-4 rounded-md'>
      <div className='w-[100px] h-[100px]'>
      <Image src={image} alt='blog image' width={100} height={100} className='w-[100px] h-[100px] object-cover'/>
      </div>
        <div>
            <h1 className='font-playfair text-[20px] font-semibold max-sm:text-[17px]'>{title}</h1>
        </div>
    </div>
    </Link>
  )
}

export default Card;