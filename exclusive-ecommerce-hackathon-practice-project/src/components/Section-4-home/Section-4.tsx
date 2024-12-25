import React from 'react';
import Primary_red from '../Buttons/Primary-red';
import Card from './Card';

const Section_4 = () => {
  return (
    <section className='border-2 border-solid border-black w-full p-5'>
      {/*child-1 */}
      <div className="w-[150px] flex flex-row flex-nowrap gap-5 justify-center items-center">
        <div className="w-[20px] h-[50px] bg-red rounded-md"></div>
        <span className="text-red font-bold">This month</span>
      </div>

            {/*child-2 */}
            <div className="flex flex-row flex-wrap justify-between items-center px-[12px]">
        <div>
          <h1 className="text-3xl font-bold max-md:text-2xl">
            Best Selling Products
          </h1>
        </div>
        <div>
            <Primary_red name='View All'/>
        </div>
      </div>

                  {/*child-3 */}
                  <div className='border-2 border-solid border-black overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap'>
                    <Card/>
                  </div>


    </section>
  )
}

export default Section_4