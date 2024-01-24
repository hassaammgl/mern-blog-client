import { PiClockFill } from "react-icons/pi";
import girl from "/girl.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_content">
        <Link to={"/"}>Communication & Marketing</Link>
        <h2>The Definitive Guide to AI for Nonprofits</h2>
        <div className="read_time">
          <PiClockFill className="icon" />
          <p>5 min</p>
        </div>
        <div className="author">
          <img src={girl} className="girl" alt="" />
          <p>Hassaan</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
/*
function readingTime() {
  const text = document.getElementById("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time;
}
readingTime();
*/
