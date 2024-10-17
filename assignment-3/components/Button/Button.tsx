import React from 'react';

interface Button {
    type: string
}
const Button = ({ type }: Button) => {
    if (type === "hide-responsive") {
        return (
            <button type="button" className='bg-blue-700 text-white md:px-8 px-0 py-3 rounded-xl font-bold text-1xl transition md:block hidden'>Click</button>
        )
    }else if(type === "small") {
        return (
            <button type="button" className='bg-blue-700 text-white md:px-8 px-0 py-2 rounded-xl font-bold text-1xl transition md:block hidden'>Click</button>
        )
    } 
    else {
        return (
            <button type="button" className='bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-1xl transition'>Click</button>
        )
    }
}

export default Button