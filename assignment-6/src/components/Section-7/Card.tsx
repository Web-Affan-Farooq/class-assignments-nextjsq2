import React from 'react';
import Image from 'next/image';

interface CardInfo {
    statement:string;
    userImage:string;
    userName:string;
    userPassion:string;
}
const Card = ({statement, userImage, userName, userPassion}: CardInfo) => {
  return (
    <div className="border-[1px] border-solid border-black p-5 w-[362px] whitespace-normal">
    <div className="flex flex-row flex-nowrap gap-2 justify-start align-middle items-center">
      <Image
        src={"/images/section-7-images/vector.svg"}
        alt="stars"
        width={20}
        height={20}
        className="object-cover"
      />
      <Image
        src={"/images/section-7-images/vector.svg"}
        alt="stars"
        width={20}
        height={20}
        className="object-cover"
      />
      <Image
        src={"/images/section-7-images/vector.svg"}
        alt="stars"
        width={20}
        height={20}
        className="object-cover"
      />
      <Image
        src={"/images/section-7-images/vector.svg"}
        alt="stars"
        width={20}
        height={20}
        className="object-cover"
      />
      <Image
        src={"/images/section-7-images/vector.svg"}
        alt="stars"
        width={20}
        height={20}
        className="object-cover"
      />
    </div>
    <br />
    <p>
      {statement}
    </p>
    <br />
    <div className="flex flex-row flex-nowrap gap-3 justify-start items-center">
      <Image
        src={userImage}
        alt="stars"
        width={50}
        height={50}
        className="object-cover rounded-full"
      />
      <div>
        <h2 className="text-[19px] font-bold">{userName}</h2>
        <p>{userPassion}</p>
      </div>
    </div>
  </div>
  )
}

export default Card;