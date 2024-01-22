import React from 'react';
import { PiClockFill } from "react-icons/pi";const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannercontent">
            <button>Communication & Marketing</button>
            <h2>The Definitive Guide to AI for Nonprofits</h2>
            <div className="clock">
            <PiClockFill className='icon' /> 
            <p>5 min</p>
            </div>
        </div>
    </div>
  )
}

export default Banner