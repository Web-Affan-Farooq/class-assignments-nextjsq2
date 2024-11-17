import React from "react";
import Image from "next/image";
const Section_7 = () => {
  return (
    <section className="w-full p-5 text-left">
      <h1 className="font-bold text-[48px]">Customer testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <br />
      <br />
      <div className="border-2 border-solid border-black p-5 w-[362px]">
        <div className="flex flex-row flex-nowrap gap-2 justify-start align-middle items-center">
          <Image
            src={"/images/section-7-images/vector.svg"}
            alt="stars"
            width={20}
            height={20}
            className="object-cover"
          />
          <Image
            src={"/images/section-7-images/vector.svg"}
            alt="stars"
            width={20}
            height={20}
            className="object-cover"
          />
          <Image
            src={"/images/section-7-images/vector.svg"}
            alt="stars"
            width={20}
            height={20}
            className="object-cover"
          />
          <Image
            src={"/images/section-7-images/vector.svg"}
            alt="stars"
            width={20}
            height={20}
            className="object-cover"
          />
          <Image
            src={"/images/section-7-images/vector.svg"}
            alt="stars"
            width={20}
            height={20}
            className="object-cover"
          />
        </div>
        <br />
        <p>
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          quia repellat facilis id, assumenda at tempore animi distinctio
          voluptas et ducimus magni tempora nemo magnam esse ut consectetur
          culpa accusantium? "
        </p>
        <br />
        <div className="flex flex-row flex-nowrap gap-3 justify-start items-center">
          <Image
            src={"/images/section-6-images/1.svg"}
            alt="stars"
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <div>
            <h2 className="text-[20px] font-bold">Muhammad Affan</h2>
            <p> AI Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_7;
