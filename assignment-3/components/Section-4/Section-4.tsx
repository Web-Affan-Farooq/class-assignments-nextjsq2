import React from 'react';
import Button from '../Button/Button';

const Section_4 = () => {
    return (
        <div>
            <br />
            <br />
             <h1 className='text-5xl font-bold text-center'>Our services</h1>
             <br />
             <br />
            <section className='flex md:flex-row flex-col justify-center align-middle gap-20 text-center w-full' id='section-4'>
                <form action="" className='text-center'>
                    <fieldset className='border-2 border-solid border-black p-3'>
                        <legend className='rounded-2xl bg-black py-1 px-5 text-white'>Email</legend>
                        <br />
                        <input type="text" name='email' id="email" placeholder='Enter your email' required className='w-80 px-6 py-3 border-2 border-solid border-black rounded-xl'/>
                    </fieldset>
                    <br />
                    <br />
                    <Button type="small"/>
                </form>
                <br />
                <br />
            </section>
        </div>
    )
}

export default Section_4;