// import React from 'react';
// import './footer.css';

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <section className="footer-top">
//         <img
//           src="https://yourwebsite.com/static/logo.png" // Replace with KalaKriti logo URL
//           alt="KalaKriti logo"
//           className="footer-logo"
//         />
//         <section className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Mehak Jain</p>
//           <p>Phone: <a href="tel:+917037309567">+91 7037309567</a></p>
//           <p>Email: <a href="mailto:mehak26114@gmail.com">mehak26114@gmail.com</a></p>
//         </section>
//       </section>

//       <div className="footer-links">
//         <div className="footer-column">
//           <h6>About KalaKriti</h6>
//           <nav>
//             <a href="/about">Who We Are</a>
//             <a href="/blog">Blog</a>
//             <a href="/careers">Work With Us</a>
//             <a href="/contact">Contact Us</a>
//           </nav>
//         </div>

//         <div className="footer-column">
//           <h6>Shop Categories</h6>
//           <nav>
//             <a href="/paintings">Paintings</a>
//             <a href="/sculptures">Sculptures</a>
//             <a href="/photography">Photography</a>
//             <a href="/handicrafts">Handicrafts</a>
//             <a href="/custom-orders">Custom Orders</a>
//           </nav>
//         </div>

//         <div className="footer-column">
//           <h6>Customer Service</h6>
//           <nav>
//             <a href="/shipping">Shipping Information</a>
//             <a href="/returns">Return Policy</a>
//             <a href="/faq">FAQs</a>
//           </nav>
//         </div>

//         <div className="footer-column">
//           <h6>Legal</h6>
//           <nav>
//             <a href="/privacy">Privacy Policy</a>
//             <a href="/terms">Terms of Service</a>
//             <a href="/security">Security</a>
//           </nav>
//         </div>
//       </div>

//       <hr />

//       <p className="footer-terms">
//         By using this website, you agree to our <a href="/terms">Terms of Service</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookie Policy</a>. All rights reserved. 2024 © KalaKriti.
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import "./footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa"; // Importing phone, email, and up-arrow icons

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the "up arrow" button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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

      {/* Up Arrow Button */}
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp className="arrow-up-icon" />
          <div className="tooltip">Move to Top</div> {/* Tooltip text */}
        </div>
      )}
    </div>
  );
};

export default Footer;
