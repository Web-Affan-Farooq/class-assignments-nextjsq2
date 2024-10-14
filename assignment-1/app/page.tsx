"use client";
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("Hello sir Hamza ! did you like it?")
    }, 5000);
  })
  
  return (
    <div>
      This is home page ...
    </div>
  )
}

export default Home;