import React from 'react';
import { useCart } from './cartContext';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import './navbar.css';

const Navbar = () => {
  const { cart } = useCart(); // Access cart from context

  return (
    <div>
      <nav className='header'>
        <img src="/assests/images/mainlogo.png" alt="Kalakriti" className="logo" />
        <div className="nav-icons">
          <div className="nav-icon">
            <FaRegHeart />
            <span>Favourites</span>
          </div>
          <div className="nav-icon">
            <CgProfile />
            <span>Sign in</span>
          </div>
          <div className="nav-icon">
            <IoCartOutline />
            <span>Cart ({cart.length})</span>  {/* Display cart count here */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
