import React, { useEffect, useState } from "react";
// import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import "./navbar.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// import LoginModal from "../../../../LoginModal";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  const cart = localStorage.getItem("cart");
  useEffect(() => {
    setCartItems(JSON.parse(cart));
  }, [cart]);
  console.log(cartItems);
  return (
    <div>
      {/* {isOpen && console.log(isOpen, "cfvbdbbvcb")}
      {isOpen && (

        <div>
          <LoginModal />
        </div>
      )} */}
      <nav className="header">
        <img
          src="/assests/images/mainlogo.png"
          alt="Kalakriti"
          className="logo"
        />
        <div className="nav-icons">
          <div
            // onClick={() => {
            //   setIsOpen(true);
            // }}
            className="nav-icon"
          >
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
            {/* <CgProfile /> */}
            
            {/* <span>Sign in</span> */}
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
