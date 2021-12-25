import React from "react";
import '../style/OurNavBar.css'

function OurNavBar() {
  return (
    <nav className="navMainContainer">
      <div className="logoContainer">
        <h1>Parrot</h1>
      </div>
      <div className="pagesLinks">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Find Tutor</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default OurNavBar;
