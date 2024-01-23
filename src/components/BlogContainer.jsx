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
      </div>
    </div>
  );
};

export default BlogContainer;
