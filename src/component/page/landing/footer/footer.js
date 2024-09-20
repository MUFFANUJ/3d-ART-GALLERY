import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-top">
        <img
          src="https://yourwebsite.com/static/logo.png" // Replace with KalaKriti logo URL
          alt="KalaKriti logo"
          className="footer-logo"
        />
        <section className="footer-contact">
          <h4>Contact Us</h4>
          <p>Mehak Jain</p>
          <p>Phone: <a href="tel:+917037309567">+91 7037309567</a></p>
          <p>Email: <a href="mailto:mehak26114@gmail.com">mehak26114@gmail.com</a></p>
        </section>
      </section>

      <div className="footer-links">
        <div className="footer-column">
          <h6>About KalaKriti</h6>
          <nav>
            <a href="/about">Who We Are</a>
            <a href="/blog">Blog</a>
            <a href="/careers">Work With Us</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </div>

        <div className="footer-column">
          <h6>Shop Categories</h6>
          <nav>
            <a href="/paintings">Paintings</a>
            <a href="/sculptures">Sculptures</a>
            <a href="/photography">Photography</a>
            <a href="/handicrafts">Handicrafts</a>
            <a href="/custom-orders">Custom Orders</a>
          </nav>
        </div>

        <div className="footer-column">
          <h6>Customer Service</h6>
          <nav>
            <a href="/shipping">Shipping Information</a>
            <a href="/returns">Return Policy</a>
            <a href="/faq">FAQs</a>
          </nav>
        </div>

        <div className="footer-column">
          <h6>Legal</h6>
          <nav>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/security">Security</a>
          </nav>
        </div>
      </div>

      <hr />

      <p className="footer-terms">
        By using this website, you agree to our <a href="/terms">Terms of Service</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookie Policy</a>. All rights reserved. 2024 © KalaKriti.
      </p>
    </div>
  );
};

export default Footer;
