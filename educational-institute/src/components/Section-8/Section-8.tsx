"use client";
import React, { useState } from 'react';

const Section_8 = () => {
  const [email, setemail] = useState<string>("");

  const handleSubscribe = () => {
    if(email !== "") {
      alert("thanks for subscription")
    }
  }
  return (
    <section className='w-full p-3 flex flex-row flex-wrap justify-between gap-10'>
        <div className='m-auto'>
        <h2 className="text-[20px] font-bold">Subscribe To Our Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='m-auto'>
        <div className='flex flex-row flex-nowrap gap-2 justify-center items-center max-sm:flex-wrap max-sm:gap-5'>
            <input type="text" name='email' id='email' placeholder='Enter your email' required className='px-[15px] py-[10px] w-[300px]' onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setemail(e.target.value)}}/>
            <button
            type="button"
            className="py-[8px] px-[20px] bg-white border-[1px] border-solid border-black rounded-md"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>        </div>
        <br />
        <p className='text-center text-customblack'>By subscribing you agree to with our Privacy Policy</p>
        </div>
    </section>
  )
}

export default Section_8;