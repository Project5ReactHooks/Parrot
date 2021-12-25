import React from "react";
import "../style/OurNavBar.css";
import { Link } from "react-router-dom";

function OurNavBar() {
  return (
    <nav className="navMainContainer">
      <div className="logoContainer">
        <h1>Parrot</h1>
      </div>
      <div className="pagesLinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/findtutor">Find Tutor</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default OurNavBar;
