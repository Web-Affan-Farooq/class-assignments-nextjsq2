import React from 'react';
import Image from 'next/image';

interface Card {
    image:string;
    courseName:string;
    price:number;
    description:string;
}
const Card = ({
    image,
    courseName,
    price, 
    description
}: Card
) => {

  return (
    <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
    <Image
      src={"/images/section-4-images/5.svg"}
      alt="course title image"
      width={416}
      height={300}
      className="object-cover m-auto"
    />
    <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
      <div>Design</div>
      <div>5.0</div>
    </div>
    <h2 className="font-bold text-[24px]">{courseName}</h2>
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros.
    </p>
    <br />
    <div className="flex flex-row flex-nowrap gap-10 items-center">
    <button
      type="button"
      className="py-[8px] px-[20px] bg-white border-[1px] border-solid border-black rounded-md"
    >
      Enroll Now
    </button>
      <div className="font-bold text-[20px]">$400</div>
    </div>
  </div>  )
}

export default Card