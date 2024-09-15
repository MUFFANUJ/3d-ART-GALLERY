import React, { useState } from 'react';
import '../index.css';  // Assuming the path is correct

const faqs = [
  {
    question: "What is a 3D Showcase Art Gallery?",
    answer: "Our 3D Showcase Art Gallery allows you to view artworks in a virtual three-dimensional space from the comfort of your home."
  },
  {
    question: "How do I navigate the 3D gallery?",
    answer: "Navigate the 3D gallery using your mouse or touchpad. Click and drag to rotate the view, scroll to zoom in and out."
  },
  {
    question: "Can I purchase art directly from the 3D gallery?",
    answer: "Artworks in the 3D gallery are available for purchase. Click on the artwork for purchasing options."
  }
];

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-box">
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <p onClick={() => toggleAccordion(index)}>
              <strong>{faq.question}</strong>
              <span className="arrow"></span> {/* Arrow added here */}
            </p>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Remaining Contact Us section remains unchanged */}
      <div className="contact-box">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>If you have any questions, please feel free to contact:</p>
          <p><strong>Mehak Jain</strong></p>
          <p>Phone: 703-730-9567</p>
        </div>
        
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/mehak-jain-587b81288/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactFAQ;
