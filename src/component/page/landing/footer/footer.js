import React from "react";
import "./footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhone, FaEnvelope} from "react-icons/fa"; 

const Footer = () => {
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
            <CiLinkedin size={35} />
            <FaInstagram size={35} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
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
