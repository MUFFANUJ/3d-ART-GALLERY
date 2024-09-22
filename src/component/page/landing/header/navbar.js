import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import './navbar.css';

const Navbar = () => {
  const [favouriteCount, setFavouriteCount] = useState(0); // State to track favourites

  const handleFavouriteClick = () => {
    setFavouriteCount(favouriteCount + 1); // Increase favourite count
  };

  return (
    <div>
      <nav className='header'>
        <img src="/assests/images/mainlogo.png" alt="Kalakriti" className="logo" />
        <div className="nav-icons">
          <div className="nav-icon" onClick={handleFavouriteClick}>
            <FaRegHeart />
            <span>Favourites ({favouriteCount})</span> {/* Display updated count */}
          </div>
          <div className="nav-icon">
            <CgProfile />
            <span>Profile</span>
          </div>
          <div className="nav-icon">
            <IoCartOutline />
            <span>Cart</span>
          </div>
        </div>
      </nav>  
    </div>
  );
};

export default Navbar;
