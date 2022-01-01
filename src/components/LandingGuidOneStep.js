import React from "react";

function LandingGuidOneStep({num,stepTitle,stepDesc,imgLink}) {
  return (
    <div className="oneGuidStepContainer">
      <div className="num">{num}</div>
      <div className="textArea">
        <h3>{stepTitle}</h3>
        <p>
          {stepDesc}
        </p>
      </div>
      <div className="imageContainer">
        <img
          src={imgLink}
          alt="step"
        />
      </div>
    </div>
  );
}

export default LandingGuidOneStep;
