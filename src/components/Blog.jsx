import React from "react";
import { IoIosMail } from "react-icons/io";
import BlogContainer from "./BlogContainer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <h2 className="h2">Welcome to DevLogs Blog!</h2>
      <div className="blog">
        <div className="blogs">
          {/* <Link to={"/BlogDeatils"}> */}
          <BlogContainer />
          {/* </Link> */}
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
        </div>
        <div className="bloog">
          <div className="message">
            <div className="msg">
              <IoIosMail />
            </div>
            <h3>The Holy Grail of Nonprofit Tips ✨</h3>
          </div>
          <p>
            Get all of the information you need to efficiently manage your
            nonprofit with our monthly newsletter.
          </p>
          <input className="input" type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Blog;
