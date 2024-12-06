"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navStatus, setnavStatus] = useState(false);

  const handleNav = () => {
    // if (window.innerWidth <= 768) {
      setnavStatus(!navStatus);
    // }
  };
  

  return (
    <header className="border-2 border-solid border-black p-5 flex flex-row flex-wrap justify-evenly items-center max-lg:justify-between max-lg:px-14 max-lg:gap-3 max-sm:gap-0">

{/*logo part */}
      <div className="font-bold text-black text-[24px] flex flex-row flex-nowrap gap-4">

        <div className="max-md:block hidden" onClick={handleNav}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div>Exclusive</div>

      </div>

{/* applied flex-nowrap for overcoming the remaining space issue in navbar */}
      <div className={`flex flex-row flex-wrap gap-10 max-md:invisible max-md:flex-nowrap max-sm:hidden`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Signup</Link>
      </div>

{/*search bar with buttons and icons */}
      <div className="required flex flex-row flex-wrap gap-6 justify-start items-center border-2 border-solid border-black max-sm:w-[100vw]">
        
        <form action="" className="flex flex-row flex-nowrap gap-2">
          <input
            type="text"
            name="searchQuerry"
            id="search-querry"
            placeholder="What are you looking for?"
            required
            className="w-[200px] h-[18px] py-3 border-2 border-solid border-black"
          />
          <button
            type="submit"
            className="font-bold border-2 border-solid border-black px-2"
          >
            <Image
              src={"/icons/search.svg"}
              alt="Search-icon"
              width={12}
              height={12}
            />
          </button>
        </form>

        <div className="flex flex-row flex-nowrap gap-3 border-2 border-solid">
          <Link href={"/"} className="">
            <Image
              src={"/icons/heart.svg"}
              alt="Favourites"
              width={15}
              height={15}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={"/icons/cart.svg"}
              alt="Your-cart"
              width={15}
              height={15}
            />
          </Link>
        </div>

      </div>

{/*black sidebar portion */}
      <div
          className={`hidden max-md:flex w-[60vw] max-sm:w-[65vw] z-10 h-[60vh] transition-all bg-black absolute rounded-lg top-12 right-0 ${navStatus? "translate-x-[0px]" : "translate-x-[100vw]"} text-white flex flex-col flex-nowrap gap-5`}
        >
          <div className="p-5">
            <i className="relative text-[24px] fa-solid fa-xmark" onClick={handleNav}></i>
          </div>

          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              href={"/"}
              className="text-[16px] w-[100px] h-[40px] border-b-2 border-solid border-white text-center"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-[16px] w-[100px] h-[40px] border-b-2 border-solid border-white text-center"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="text-[16px] w-[100px] h-[40px] border-b-2 border-solid border-white text-center"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="text-[16px] w-[100px] h-[40px] border-b-2 border-solid border-white text-center"
            >
              Signup
            </Link>
          </div>
        </div>

    </header>
  );
};

export default Header;