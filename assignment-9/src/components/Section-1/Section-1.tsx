"use client";

import React from 'react';
import Card from '../Card/Card';
import Link from 'next/link';

const Section_1 = () => {

  return (
    <section className='p-[20px] px-[10px]'>
        <h1 className='text-[35px] tracking-[-3px] font-bold font-oswald uppercase'>Explore our products</h1>
        <br />
        <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
          {/* <Card name, shortDescription, price, image, id/> */}
          <Card image={"/images/img-1.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
          <Card image={"/images/img-2.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
          <Card image={"/images/img-3.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
          <Card image={"/images/img-4.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
          <Card image={"/images/img-5.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
          <Card image={"/images/img-6.png"} name="Casual shoes" price={200} shortDescription='hjfdhgsf dfdhsgfhdsf dhfghdf dhsgfdshgfh hdfgjdshfdshf fd' id={1} rating={10} longDescription='jkhjf fjhdfjkhdsf' availability='kjfsdjfdkjflkj' brand='dfsdjhfsdkfkjslhdfjdshfkjshdfjh'/>
        </div>
        <br />
        <br />
        <p className='text-center'><Link href={"/products"} className='text-blue-600 font-bold text-[15px] '>See More ...</Link></p>
    </section>
  )
}

export default Section_1