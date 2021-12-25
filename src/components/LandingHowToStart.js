import React from "react";
import "../style/LandingHowToStart.css";
import LandingGuidOneStep from "./LandingGuidOneStep";

function LandingHowToStart() {
  return (
    <div className="landingHowToStartMainContainer">
      <div className="howToStartHeading">
        <h2>How Parrot works</h2>
        <p>Learn online with the world's best tutors</p>
      </div>
      <div className="guidContainer">
        <LandingGuidOneStep
          num="1"
          stepTitle="Find the best tutor"
          stepDesc="Choose from over 49,000 online tutors. Use filters to narrow your search and find the perfect fit"
          imgLink="https://static.preply.com/static/ssr/_next/static/images/step-1-a9a87e884b956e567f44642ee76c5ff8.webp"
        />
        <LandingGuidOneStep
          num="2"
          stepTitle="Take lessons anytime"
          stepDesc="Find the perfect time for your busy schedule. Book lessons in seconds via desktop or mobile"
          imgLink="https://static.preply.com/static/ssr/_next/static/images/step-2-f56ab539540d6d663ef552f18131d6ea.webp"
        />
        <LandingGuidOneStep
          num="3"
          stepTitle="Enter virtual classroom"
          stepDesc="When it’s lesson time, connect with your tutor through our comprehensive video platform"
          imgLink="https://static.preply.com/static/ssr/_next/static/images/step-3-feeae6564b5d004de9310d502f3b5b57.webp"
        />
        <LandingGuidOneStep
          num="4"
          stepTitle="Enjoy structured learning"
          stepDesc="Keep track of your learning progress. Improve your speaking and vocabulary with our Learning plans"
          imgLink="https://static.preply.com/static/ssr/_next/static/images/step-4-4a01d56f3d6e21b52770a6b0ed763b2e.webp"
        />
      </div>
    </div>
  );
}

export default LandingHowToStart;
