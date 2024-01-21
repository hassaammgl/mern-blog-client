import React from 'react';
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
        <img src="companylogo.png" className="img"  alt="" />
        <div className="rightheader">
            <FaRegBell />
        </div>
    </div>
  )
}

export default Header