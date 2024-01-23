import React from "react";
import prog from "../../public/prog.jpg";
import girl from "../../public/girl.jpg";
import {PiClockFill } from "react-icons/pi";

const BlogContainer = () => {
  return (
    <div className="blogcontainer">
      <div className="top">
        <img src={prog} className="img" alt="" />
      </div>
      <div className="bottom">
        <div className="bottomb">
        <button>hassaam</button>
        <h2>The Definitive Guide to AI for Nonprofits </h2>
        </div>
        <div className="bottomcontent">
          <div className="clock">
            <PiClockFill className="icon" />
            <p>5 min</p>
          </div>
          <div className="review">
            <img src={girl} className="girl" alt="" />
            <p>Hassaan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
