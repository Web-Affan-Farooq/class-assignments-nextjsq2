import React from "react";
import Link from "next/link";

const Footer_next = () => {
  return (
    <div className="p-5 border-t-[2px] border-solid border-black flex flex-row flex-wrap justify-between items-center max-md:gap-5">
      <div className="flex flex-row flex-wrap gap-10 m-auto justify-center max-md:gap-3">
        &copy; ddsgnr X Muhammad Affan | All rights reserved.
        <div className="flex flex-row flex-wrap gap-5">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms Of Service</Link>
          <Link href={"/"}>Cookie Settings</Link>
        </div>
      </div>
      
      <div className="flex flex-row flex-nowrap gap-4 text-[20px] text-center text-black m-auto">
        <div className=" hover:bg-black transition-customtransition rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className=" hover:bg-black transition-customtransition rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className=" hover:bg-black transition-customtransition rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className=" hover:bg-black transition-customtransition rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer_next;
