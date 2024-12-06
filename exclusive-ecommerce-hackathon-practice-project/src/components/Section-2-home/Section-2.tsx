import React from "react";
import Scroll_container from "./Scroll-container";

const Section_2 = () => {
  return (
    <section className="w-full p-10 border-2 border-solid border-black">

        {/*child-1 */}
      <div className="w-[150px] flex flex-row flex-nowrap gap-5 justify-center items-center">
        <div className="w-[20px] h-[50px] bg-red rounded-md"></div>
        <span className="text-red font-bold">Today's</span>
      </div>

      {/*child-2 */}
      <div className="flex flex-row flex-wrap justify-between items-center py-6 px-12 border-2 border-solid border-black">

        <div className="flex flex-row flex-wrap gap-10 justify-between items-center border-2 border-solid border-black">

            <h1 className="text-3xl font-bold">Flash Sales</h1>

            {/*timer*/}
            <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
                <div className="text-center border-2 border-solid border-black">
                    <span>Days</span>
                    <div className="text-2xl font-bold">03</div>
                </div>
                <span className="text-red text-3xl font-bold">:</span>

                <div className="text-center border-2 border-solid border-black">
                    <span>Days</span>
                    <div className="text-2xl font-bold">03</div>
                </div>
                <span className="text-red text-3xl font-bold">:</span>

                <div className="text-center border-2 border-solid border-black">
                    <span>Days</span>
                    <div className="text-2xl font-bold">03</div>
                </div>
                <span className="text-red text-3xl font-bold">:</span>

                <div className="text-center border-2 border-solid border-black">
                    <span>Days</span>
                    <div className="text-2xl font-bold">03</div>
                </div>
                <span className="text-red text-3xl font-bold">:</span>
            </div>

        </div>

        <div className="flex flex-row flex-nowrap gap-7">
        <i className="text-2xl font-bold border-2 border-solid border-black text-gray-500 fa-solid fa-arrow-left"></i>
        <i className="text-2xl font-bold border-2 border-solid border-black text-gray-500 fa-solid fa-arrow-right"></i>
        </div>

      </div>

      {/*Child -3 */}
      <Scroll_container/>

    </section>
  );
};

export default Section_2;
