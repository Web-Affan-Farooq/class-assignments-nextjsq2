import React from 'react';
import "./style.css";
import Card from './Card';


const Scroll_container = () => {
  return (
    <div className='scroll-container border-2 border-solid border-black p-2 overflow-x-auto whitespace-nowrap'>
        <Card/>
    </div>
  )
}

export default Scroll_container;