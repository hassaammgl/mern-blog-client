import React from 'react';
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
        <h2>DevLogs.</h2>
        {/* <img src="companylogo.png" className="img"  alt="" /> */}
        <div className="rightheader">
            <FaRegBell className="icon" />
            <p>Discover DevLogs</p>
            <button>Try DevLogs</button>
        </div>
    </div>
  )
}

export default Header