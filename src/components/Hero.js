import React from "react";
import hero from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="desc">
        <h1> More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn-start">Get Started</button>
      </div>
      <div className="hero-img">
        <img src={hero} alt="lady browsing on desktop" />
      </div>
    </div>
  );
};

export default Hero;
