import React from "react";
import prog from "../../public/prog.jpg";

const BlogContainer = () => {
  return (
    <div className="blogcontainer">
      <div className="top">
        <img src={prog} className="img" alt="" />
      </div>
      <div className="bottom">
        <button>hassaam</button>
        <h2>The Definitive Guide to AI for Nonprofits</h2>
      </div>
    </div>
  );
};

export default BlogContainer;
