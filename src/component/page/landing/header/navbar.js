import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='header'>
        <img src="/assets/images/mainlogo.png" alt="Kalakriti" className="logo" />
        <div className="nav-icons">
          <div className="nav-icon">
            <FaRegHeart />
            <span>Favourites</span>
          </div>
          <div className="nav-icon">
            <CgProfile />
            <span>Profile</span>
          </div>
        </div>
      </nav>  
    </div>
  );
};

export default Navbar;
