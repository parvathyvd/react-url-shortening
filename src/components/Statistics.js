import React from "react";
import recognition from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="stat-desc">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="card-img">
            <img src={recognition} alt="recognition" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="card card-2">
          <div className="card-img">
            <img src={detailed} alt="detailed" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card card-3">
          <div className="card-img">
            <img src={customizable} alt="customizable" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
