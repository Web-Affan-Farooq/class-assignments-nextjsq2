"use client";
import React, { useState } from "react";
import Image from "next/image";

const Section_5 = () => {
  const [popular, setpopular] = useState(true);
  const [recommended, setrecommended] = useState(false);
  const [practices, setpractices] = useState(false);

  const handlePopular = () => {
    setpopular(true);
    setrecommended(false);
    setpractices(false);
  }

  const handlePractices = () => {
    setpopular(false);
    setpractices(true)
    setrecommended(false);
  }
  const handleRecommend = () => {
    setpopular(false);
    setrecommended(true);
    setpractices(false);
  }


  return (
    <section className="w-full text-center">
      <h1 className="text-[48px] font-bold max-sm:text-[40px]">Courses</h1>
      <p>Your ultimate path to learning .</p>
      <br />
      <br />
      <div className="flex flex-row flex-nowrap gap-10 justify-center align-middle items-center max-md:gap-5">
        <div className={`py-4 px-3 text-1xl transition-customtransition ${popular? "border-b-[1px] border-solid border-black" : "border-b-[1px] border-solid border-transparent"}`} onClick={handlePopular}>
          Popular
        </div>
        <div className={`py-4 px-3 text-1xl transition-customtransition ${recommended? "border-b-[1px] border-solid border-black" : "border-b-[1px] border-solid border-transparent"}`} onClick={handleRecommend}>
          Recommended
        </div>
        <div className={`py-4 px-3 text-1xl transition-customtransition ${practices? "border-b-[1px] border-solid border-black" : "border-b-[1px] border-solid border-transparent"}`} onClick={handlePractices}>
          Best Practices
        </div>
      </div>
      <br />

      <div className="flex flex-row flex-wrap gap-2 justify-center align-middle items-center">
        <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
          <Image
            src={"/images/section-4-images/1.svg"}
            alt="course title image"
            width={416}
            height={300}
            className="object-cover m-auto"
          />
          <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
            <div>Design</div>
            <div>5.0</div>
          </div>
          <h2 className="font-bold text-[24px]">UX/UI Design 201</h2>
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
        </div>

        <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
          <Image
            src={"/images/section-4-images/2.svg"}
            alt="course title image"
            width={416}
            height={300}
            className="object-cover m-auto"
          />
          <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
            <div>Design</div>
            <div>5.0</div>
          </div>
          <h2 className="font-bold text-[24px]">Introduction To Python</h2>
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
        </div>

        <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
          <Image
            src={"/images/section-4-images/3.svg"}
            alt="course title image"
            width={416}
            height={300}
            className="object-cover m-auto"
          />
          <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
            <div>Design</div>
            <div>5.0</div>
          </div>
          <h2 className="font-bold text-[24px]">Data Analysis for Beginners</h2>
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
        </div>

        <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
          <Image
            src={"/images/section-4-images/4.svg"}
            alt="course title image"
            width={416}
            height={300}
            className="object-cover m-auto"
          />
          <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
            <div>Design</div>
            <div>5.0</div>
          </div>
          <h2 className="font-bold text-[24px]">Art Specialization</h2>
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
        </div>

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
          <h2 className="font-bold text-[24px]">Rule of Law</h2>
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
        </div>

        <div className="w-[416px] text-left p-3 max-sm:w-[90vw]">
          <Image
            src={"/images/section-4-images/6.svg"}
            alt="course title image"
            width={416}
            height={300}
            className="object-cover m-auto"
          />
          <div className="flex flex-row flex-nowrap justify-between align-middle items-center text-[16px] font-bold h-[50px]">
            <div>Design</div>
            <div>5.0</div>
          </div>
          <h2 className="font-bold text-[24px]">Introduction to webflow</h2>
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
        </div>
        <br />
        <br />
      </div>
      <br /><br />
      <br />
      <br />
      <button
            type="button"
            className="py-[8px] px-[20px] bg-white border-[1px] border-solid border-black rounded-md"
          >
            View All Courses
          </button>
    </section>
  );
};

export default Section_5;