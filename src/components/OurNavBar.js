import React, { useState } from "react";
import "../style/OurNavBar.css";
import { Link } from "react-router-dom";

function OurNavBar({ isLoggedIn }) {
  const [toggleNav, setToggleNav] = useState(false);
  let obj = toggleNav
    ? { display: "flex", flexDirection: "column" }
    : {};

  return (
    <nav className="navMainContainer">
      <div className="logoContainer">
        <Link to="/" onClick={() => setToggleNav(false)}>
          <h1>Parrot</h1>
        </Link>
      </div>
      <ul className="burgerMenu">
        <li>
          <i
            className="fas fa-bars"
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </li>
      </ul>
      <div className="pagesLinks" style={obj}>
        <ul>
          <li>
            <Link to="/" onClick={() => setToggleNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/findtutor" onClick={() => setToggleNav(false)}>
              Find Tutor
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setToggleNav(false)}>
              About Us
            </Link>
          </li>
        </ul>
        {!isLoggedIn ? (
          <ul>
            <li>
              <Link to="/login" onClick={() => setToggleNav(false)}>
                Login/Register
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/account" onClick={() => setToggleNav(false)}>
                My Account
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default OurNavBar;
