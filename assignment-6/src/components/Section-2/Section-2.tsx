import React from "react";
import Image from "next/image";
import "./style.css";

const Section_2 = () => {
  return (
    <section className="w-full flex flex-row flex-wrap md:gap-[64px] gap-5 py-[80px] px-5">
      <div className="md:w-[25vw] w-full">
        <h2 className="text-2xl font-bold">
          Trusted by 2000+ companies worldwide.
        </h2>
      </div>

      <div className="max-md:w-full w-[60vw] p-5 overflow-x-auto whitespace-nowrap scroll-hidden">
        <div className="flex flex-shrink-0 justify-between">
          <div className="list-1 flex flex-row flex-nowrap gap-5">
            {/*list -1 */}
            <Image
              src={"/images/section-2-images/1.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
                        <Image
              src={"/images/section-2-images/3.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            <Image
              src={"/images/section-2-images/2.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            <Image
              src={"/images/section-2-images/3.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
                        <Image
              src={"/images/section-2-images/2.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            {/*list -2 */}

<Image
              src={"/images/section-2-images/4.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            <Image
              src={"/images/section-2-images/5.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            <Image
              src={"/images/section-2-images/6.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
                        <Image
              src={"/images/section-2-images/5.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
            <Image
              src={"/images/section-2-images/4.svg"}
              alt="logo showcasing"
              width={150}
              height={150}
              className="items object-cover"
            />
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Section_2;

