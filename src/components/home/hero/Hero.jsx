import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";



const Hero = () => {
  const handleScrollDown = () => {
    const scrollOptions = {
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    };
  
    window.scrollTo(scrollOptions);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="quote">
          <h2>From awareness to action,</h2>
          <h2>embrace CarbonSense today.</h2>
        </div>
        <div className="center">
          <button className="scroll-button" onClick={handleScrollDown}>
            Know More!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
