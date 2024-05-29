import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutimg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are!</h3>
        <p>
          s a nurse, we have the opportunity to heal the heart, mind, soul and
          body of our patients, their families and ourselves. They may not
          remember your name, but they will never forget the way you made them
          feel.
        </p>
        <p>
          A physician is obligated to consider more than a diseased organ, more
          than even the whole man
        </p>
        <p>Sometimes I inspire my patients; more often they inspire me</p>
        <p>
          The greatest mistake in the treatment of diseases is that there are
          physicians for the body and physicians for the soul, although the two
          cannot be separated
        </p>
        <p>
          He is the best physician who is the most ingenious inspirer of hope
        </p>
        <p>Wherever the art of Medicine is loved</p>
      </div>
    </div>
  );
};

export default Biography;
