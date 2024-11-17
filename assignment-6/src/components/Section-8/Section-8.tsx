import { emit } from 'process';
import React from 'react'

const Section_8 = () => {
  return (
    <section className='w-full p-3 flex flex-row flex-wrap justify-between gap-10'>
        <div className='m-auto'>
        <h2 className="text-[20px] font-bold">Subscribe To Our Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='m-auto'>
        <div className='flex flex-row flex-nowrap gap-2 justify-center items-center'>
            <input type="text" name='email' id='email' placeholder='Enter your email' required className='px-[15px] py-[10px] w-[300px]'/>
            <button type="button" className='px-[20px] py-[10px] w-[150px] rounded-lg border-[1px] border-solid border-black'>Subscribe</button>
        </div>
        <br />
        <p className='text-center'>By subscribing you agree to with our Privacy Policy</p>
        </div>
    </section>
  )
}

export default Section_8;