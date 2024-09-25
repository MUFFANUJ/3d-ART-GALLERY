import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./navbar.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const cart = localStorage.getItem("cart");
  useEffect(() => {
    setCartItems(JSON.parse(cart));
  }, [cart]);
  console.log(cartItems);
  return (
    <div>
      <nav className="header">
        <img
          src="/assests/images/mainlogo.png"
          alt="Kalakriti"
          className="logo"
        />
        <div className="nav-icons">
          <div className="nav-icon">
            <SignedOut>
              <SignInButton
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className="nav-icon">
            <IoCartOutline />
            <span>Cart {cartItems.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
