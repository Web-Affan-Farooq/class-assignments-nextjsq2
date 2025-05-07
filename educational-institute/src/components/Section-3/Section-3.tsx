import React from "react";
import Image from "next/image";

const Section_3 = () => {
  return (
    <section className="w-full text-center">
      <div className="text-center">
        <h1 className="font-bold text-[48px]">Explore Courses By Category</h1>
        <p>
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <br /><br /><br />
      <div className="flex flex-row flex-wrap justify-evenly align-middle items-center">

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/2.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Design & Development
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>


        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/1.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Marketing
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>


        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/3.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Development
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/8.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Communication
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/7.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Digital Marketing
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/4.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Self Development
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/6.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Business
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/5.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Finance 
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="flex py-2 flex-row flex-nowrap justify-evenly items-center h-[120px] w-[400px] max-sm:justify-center max-sm:gap-10">
          <div>
          <Image
            src={"/images/section-3-images/9.svg"}
            alt="course category image"
            width={50}
            height={50}
            className="object-cover m-auto"
          />
          </div>
          <div>
            <h3 className="font-bold text-left">
              Consulting 
            </h3>
            <p>50+ Courses Available</p>
          </div>
        </div>

      </div>
      <br />
      <br />
      <button
            type="button"
            className="py-[8px] px-[20px] bg-white border-[1px] border-solid border-black rounded-md"
          >
            View Courses
          </button>
    </section>
  );
};

export default Section_3;
