import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  const [hover, setHover] = useState(null);

  const getStyle = (isHovered) => ({
    ...linkStyle,
    backgroundColor: isHovered ? '#d0d0d0' : '#e0e0e0'
  });

  const handleNavClick = (id) => () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
      {['home', 'new-arrivals', 'artists', 'contact'].map((item) => (
        <Link
          key={item}
          to="/" // keeps the URL clean
          onClick={handleNavClick(item)}
          style={getStyle(hover === item)}
          onMouseEnter={() => setHover(item)}
          onMouseLeave={() => setHover(null)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </nav>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  borderRadius: '5px',
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
  display: 'inline-block'
};

export default Navbar;
