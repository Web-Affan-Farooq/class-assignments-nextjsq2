import React from 'react'

const Section_4 = () => {
  return (
  <section className='text-center'>
    <h1 className='text-[48px] font-bold'>Our Achievements</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos fugiat? Saepe fugit odit tempore, quasi, pariatur praesentium vitae doloribus tenetur fugiat hic cupiditate soluta ea laborum alias nihil delectus?</p>

<br /><br /><br />
    <div className='flex flex-row flex-wrap gap-[20px]'>
        <div className='p-5 m-auto w-[300px] text-center'>
            <span className='text-4xl font-bold'>+200</span>
            <p>Courses</p>
        </div>
        <div className='p-5 m-auto w-[300px] text-center'>
            <span className='text-4xl font-bold'>50K</span>
            <p>Mentors</p>
        </div>
        <div className='p-5 m-auto w-[300px] text-center'>
            <span className='text-4xl font-bold'>370K</span>
            <p>Students</p>
        </div>
        <div className='p-5 m-auto w-[300px] text-center'>
            <span className='text-4xl font-bold'>100+</span>
            <p>Recognitions</p>
        </div>
    </div>
  </section>
  )
}

export default Section_4