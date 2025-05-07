import React from "react";

const Upper_head = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between align-middle items-center px-6 py-3 border-b-2 border-solid border-black max-md:flex-col max-md:text-center max-md:hidden w-full max-[900px]:hidden z-5">
      <div>Phone Number: 956 742 455 678 | Email:info@ddsgnr.com</div>
      <div className="flex flex-row flex-nowrap gap-4 text-[20px] text-center text-black">
        <div className=" hover:bg-black rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className=" hover:bg-black rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className=" hover:bg-black rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className=" hover:bg-black rounded-full hover:text-white w-[30px] h-[30px]">
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Upper_head;
