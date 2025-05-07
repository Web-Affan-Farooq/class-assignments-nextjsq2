import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-wrap justify-between items-center align-middle">
      <div className="max-md:w-full w-1/2 px-6 max-md:py-28">
        <h1 className="leading-[67px] font-bold text-[57px]">
          Learn new skills online with ease
        </h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam
          alias repellat dolorum impedit corrupti? Deleniti
        </p>
        <br />
        <div className="flex flex-row flex-nowrap gap-3 text-left">
          <button
            type="button"
            className="py-[8px] px-[20px] bg-black text-white rounded-md"
          >
            Start here
          </button>
          <button
            type="button"
            className="py-[8px] px-[20px] border-[1px] border-solid border-black rounded-md"
          >
            Explore here
          </button>
        </div>
      </div>

      <div className="max-md:w-full w-1/2">
        <Image
          src={"/images/hero.svg"}
          alt="hero section image"
          width={500}
          height={500}
          className="object-cover m-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
