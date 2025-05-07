"use client";
import React, {useRef, useState, useEffect} from "react";
import Card from "./Card";
const Section_7 = () => {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [count, setcount] = useState(0);

  useEffect(() => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({left:30, behavior:'smooth'});  // ignore this error
    }
  },[]);

  // function for handling forward scroll
  const handleForwardScroll = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({left:460, behavior:'smooth'});  // ignore this error
    }

    if(count <4) {
      setcount(count +1)
    }

  }


    // function for handling forward scroll
  const handleBackwardScroll = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({left:-460, behavior:'smooth'});  // ignore this error
    }

    if(count >0) {
      setcount(count - 1);
     }

  }

  return (
    <section className="w-full p-5 text-left">
      <h1 className="font-bold text-[48px] max-sm:text-[40px] leading-10">Customer testimonials</h1>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <br />
      <br />

{/*scroll container start*/}
<div className="w-full p-5 overflow-x-auto whitespace-nowrap transition-all scroll-smooth scroll-hidden" ref={scrollRef}>
    <div className="flex flex-shrink-0 justify-between">
      <div className="flex flex-row flex-nowrap gap-5">
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/1.svg"
          userName="Muhammad Affan"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/2.svg"
          userName="Ayesha Umar"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/3.svg"
          userName="Ahmed Faraz"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/6.svg"
          userName="Areeba Khan"
          userPassion="web developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/3.svg"
          userName="Muhammad Aqib"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/1.svg"
          userName="Sarim Ali"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/1.svg"
          userName="Muhammad Faris"
          userPassion="Web Developer"
        />
        <Card
          statement="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cupiditate ad asperiores, iusto maiores exercitationem repellendus nesciunt placeat autem. Possimus dolorum qui delectus ipsa architecto id nobis voluptates recusandae veniam!"
          userImage="/images/section-6-images/1.svg"
          userName="Dua Khan"
          userPassion="Web Developer"
        />
      </div>
    </div>
  </div>{/*scroll container end */}
<div className="flex flex-row justify-between p-5 items-center">
  <div className="w-[100px] flex flex-row flex-nowrap gap-2">
    <div className={`w-[8px] h-[8px] rounded-full ${count === 0? "bg-black" : "bg-gray-400"}`}></div>
    <div className={`w-[8px] h-[8px] rounded-full ${count === 1? "bg-black" : "bg-gray-400"}`}></div>
    <div className={`w-[8px] h-[8px] rounded-full ${count === 2? "bg-black" : "bg-gray-400"}`}></div>
    <div className={`w-[8px] h-[8px] rounded-full ${count === 3? "bg-black" : "bg-gray-400"}`}></div>
    <div className={`w-[8px] h-[8px] rounded-full ${count === 4? "bg-black" : "bg-gray-400"}`}></div>
  </div>
  <div className="flex flex-row flex-nowrap gap-3 justify-center items-center">
    <button type="button" className=" w-[20px] h-[20px] border-[1px] border-solid border-black rounded-full flex flex-row flex-nowrap justify-center align-middle items-center p-5" onClick={handleBackwardScroll}><i className="fa-solid fa-arrow-left"></i></button>
    <button type="button" className=" w-[20px] h-[20px] border-[1px] border-solid border-black rounded-full flex flex-row flex-nowrap justify-center align-middle items-center p-5" onClick={handleForwardScroll}><i className="fa-solid fa-arrow-right"></i></button>
  </div>
</div>
    </section>
  );
};

export default Section_7;


//import useref
// create a useref to store the value of scrolling i.e left and behaviour values for scrolling
// refer using ref={} attribute for refering container