import React from "react";
import "./footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  const scrollToTrendingArt = () => {
    const section = document.getElementById('trending-art');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTopArtists = () => {
    const section = document.getElementById('top-artists');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="footer">
      <hr className="hr" />
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/assests/images/mainlogo.png" alt="Kalakriti Logo" />
          <p>
            Explore the tales behind each masterpiece. Read, resonate, and
            purchase at your leisure.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/mehak-jain-587b81288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin size={35} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={35} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); scrollToTrendingArt(); }}>Trending Art</a></li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); scrollToTopArtists(); }}>Top Artists</a></li>
            {/* <li>Delivery</li>
            <li>Privacy policy</li> */}
          </ul>
        </div>
        <div className="footer-content-right">
          <ul>
            <li>
              <FaPhone className="footer-icon" /> 7037309567
            </li>
            <li>
              <FaEnvelope className="footer-icon" /> mehak26114@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright © 2024 Kalakriti. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
