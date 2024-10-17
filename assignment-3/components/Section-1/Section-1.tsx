import React from 'react';
import Button from '../Button/Button';

const Section_1 = () => {
  return (
    <div>
        <br />
        <br /><br />
        <section className='px-1 md:px-10 py-36 text-center' id='section-1'>
            <div className='w-full text-center p-4'>
            <h1 className='text-5xl md:text-6xl leading-12 font-bold text-center'>Rapidly build modern websites without ever leaving your HTML.</h1>
            <br />
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima ex molestiae quidem repellendus veniam quo quas dolorum. Vel fugiat tenetur perspiciatis tempore qui, veritatis similique corrupti? Pariatur, laborum labore.</p>
            </div>
            <br />
            <Button type='?'/>
        </section>
    </div>
  )
}

export default Section_1;