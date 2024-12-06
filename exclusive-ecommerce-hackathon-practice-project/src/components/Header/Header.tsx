"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navStatus, setnavStatus] = useState(false);

  const handleNav = () => {
    if (window.innerWidth <= 768) {
      setnavStatus(!navStatus);
      console.log("on");
    }
  };

  return (
    <header className="border-2 border-solid border-black p-3 flex flex-row flex-wrap justify-evenly items-center max-lg:justify-between max-lg:px-14 max-lg:gap-3  gap-10">
      <div className="font-bold text-black text-[24px] flex flex-row flex-nowrap gap-4">
        <div className="max-md:block hidden" onClick={handleNav}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div>Exclusive</div>
      </div>

      <div className={`flex flex-row flex-wrap gap-10 max-md:invisible`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Signup</Link>
      </div>

      <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
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

        <div
          className={`w-[400px] h-[60vh] bg-black absolute rounded-lg top-10 right-0 text-white flex flex-col flex-nowrap gap-5`}
        >
          <div className="p-5">
            <i className="relative text-[24px] fa-solid fa-xmark"></i>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              href={"/"}
              className="text-[20px] w-[100px] h-[45px] border-b-2 border-solid border-white text-center"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-[20px] w-[100px] h-[45px] border-b-2 border-solid border-white text-center"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="text-[20px] w-[100px] h-[45px] border-b-2 border-solid border-white text-center"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="text-[20px] w-[100px] h-[45px] border-b-2 border-solid border-white text-center"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
