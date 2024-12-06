import React from "react";
import Link from "next/link";

const Top_header = () => {
  return (
    <div className="py-3 bg-black text-white text-center flex flex-row flex-wrap justify-evenly">
      <div>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link
          href={"/"}
          className="text-white font-bold underline decoration-2"
        >
          Shop Now
        </Link>
      </div>
      <div>
        <select
          name="language"
          id="language"
          className="bg-transparent text-white"
        >
          <option
            value="English"
            className="text-white bg-black font-semibold text-[16px]"
          >
            English
          </option>
          <option
            value="Urdu"
            className="text-white bg-black font-semibold text-[16px]"
          >
            Urdu
          </option>
        </select>
      </div>
    </div>
  );
};

export default Top_header;
