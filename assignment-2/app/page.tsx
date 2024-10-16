"use client";
import React, { useEffect } from 'react';
import Section_1 from './Section-1';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      alert("Hello sir Hamza ! did you like it?")
    }, 5000);
  })
  
  return (
    <div>
      <Section_1/>
    </div>
  )
}

export default Home;