"use client";

import React, { useEffect, useRef } from 'react';
import "./style.css";
import Card from './Card';

const Scroll_container = () => {

  const scrollRef = useRef<HTMLDivElement>(null);


  const handleScrolling = (e:React.WheelEvent<HTMLDivElement>) => {
    if(scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
      scrollRef.current.scrollBy({left:e.deltaY, behavior:"smooth"})
    }

    e.stopPropagation();

  }

  return (
    <div className='scroll-container2 border-2 border-solid border-black p-2 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth' onWheel={handleScrolling} ref={scrollRef}>
<div className=" w-max border-2 border-solid border-green-500 flex flex-row gap-10">

        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        <Card image="" offer="-45%" name="HAVIT HV-G92 Gamepad" initialPrice="$160" dicountedPrice="$120" stars={5} ratingsCount={88} isLiked={false}/>
        
</div>
    </div>
  )
}

export default Scroll_container;