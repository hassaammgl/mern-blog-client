import React from 'react';
import { IoIosClock } from "react-icons/io";
const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannercontent">
            <button>Communication & Marketing</button>
            <h2>The Definitive Guide to AI for Nonprofits</h2>
            <div className="clock">
            <IoIosClock className='icon' /> 
            <p>5 min</p>
            </div>
        </div>
    </div>
  )
}

export default Banner