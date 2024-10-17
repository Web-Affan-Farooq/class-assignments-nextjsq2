import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

const Section_2 = () => {
  return (
    <div>
        <section className='py-5 flex flex-col md:flex-row flex-wrap gap-20 justify-center align-middle' id='section-2'>
            <div className='s-2-content w-full md:w-1/2 p-10'>
            <h1 className='text-5xl font-bold'>About us</h1>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia inventore harum esse suscipit consequatur ratione voluptates, impedit, repudiandae sunt voluptatem quidem, deleniti odit omnis nihil? Iste animi adipisci vitae.</p>
            <br />
            <Button type='?'/>
            </div>
            <Image src={'https://img.freepik.com/free-vector/future-work-concept-illustration_614304-14.jpg?w=740&t=st=1729187233~exp=1729187833~hmac=95f1f74da1b48e163c429755a5eb390f0284fac41877c1257470482c9170ce99'} width={400} height={400} alt='banner image' className='m-auto'/>
        </section>
    </div>
  )
}

export default Section_2;