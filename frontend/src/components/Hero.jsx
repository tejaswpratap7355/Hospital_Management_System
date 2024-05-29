import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Only the healing art enables one to make a name for himself and at the
          same time give benefit to others.” “A physician is obligated to
          consider more than a diseased organ, more than even the whole man—he
          must view the man in his world.” “Sometimes I inspire my patients;
          more often they inspire me.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
