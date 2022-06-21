import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMemuOpen] = useState(false);
  const onMobileNavClickHandler = () => {
    setMobileMemuOpen((prev) => !prev);
  };
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="main-nav">
          <nav>
            <ul>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="login-nav">
          <nav>
            <ul>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <button
                  className="btn-signup"
                  onClick={onMobileNavClickHandler}
                >
                  <a href="">Sign Up</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-nav" onClick={onMobileNavClickHandler}>
          &nbsp;
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="mobile-links">
          <nav>
            <ul>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <span className="line">&nbsp;</span>
              <li>
                <a href="">Login</a>
              </li>
              <li className="btn-signup-wrapper">
                <button className="btn-signup">
                  <a href="">Sign Up</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
