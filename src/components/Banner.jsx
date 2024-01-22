import React from 'react';
import { PiClockFill } from "react-icons/pi";
import girl from "../../public/girl.jpg"

const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannercontent">
            <button>Communication & Marketing</button>
            <h2>The Definitive Guide to AI for Nonprofits</h2>
            <div className="clock">
            <PiClockFill className='icon' /> 
            <p>5 min</p>
            </div>
            <div className="review">
                <img src={girl} className='girl'  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner