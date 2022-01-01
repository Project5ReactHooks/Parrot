import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="footerColsContainer">
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Parrot</h3>
          </div>
          <div className="footerSiteDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            molestias aliquam provident magnam voluptatibus et ad deleniti atque
            qui, nulla id labore saepe,
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Links</h3>
          </div>
          <div className="footerColPagesLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/findtutor">Find a tutor</Link>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerColTitle">
            <h3>Follow Us</h3>
          </div>
          <div className="footerColLinks">
            <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram-square fa-3x"></i>
            </a>
            <a
              href="https://github.com/Project5ReactHooks/Parrot"
              target="_blank" rel="noreferrer"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyRightArea">ALL RIGHT RESERVED 2021 &copy;</div>
    </div>
  );
}

export default Footer;
