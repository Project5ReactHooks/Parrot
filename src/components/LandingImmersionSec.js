import React from "react";
import "../style/LandingImmersionSec.css";
function LandingImmersionSec() {
  return (
    <div className="ImmersionSecContainer">
      <div className="imageContainer">
        <img
          src="https://www.cambly.com/fe/static/landing_page/chat.webp"
          alt="web chat"
        />
      </div>
      <div className="textArea">
        <h2>English immersion from anywhere</h2>
        <p>
          Build English proficiency and confidence through real conversations
          with friendly tutors from the US, UK, Australia, and more. All you
          need is your device!
        </p>
        <button>START LEARNING</button>
      </div>
    </div>
  );
}

export default LandingImmersionSec;
