import React from "react";
import { Logo } from "../Logo";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";

import pininterset from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <Logo className="footer-logo" />
        </div>
        <nav className="footer-nav">
          <div className="first">
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="second">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="third">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <div className="social">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pininterset} alt="pininterset" />
          <img src={instagram} alt="instagram" />
        </div>
      </footer>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/profile/parvathyvd"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Parvathy Vazhoor</a>.
      </div>
    </>
  );
};

export default Footer;
