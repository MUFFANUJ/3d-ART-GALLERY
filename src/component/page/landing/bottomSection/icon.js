import React from "react";
import { MdWorkspacePremium } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import "./icon.css";

const Icon = () => {
  return (
    <div className="icon-container">
      <div className="icon-box">
        <MdWorkspacePremium className="icon" />
        <h2>PREMIUM MATERIALS</h2>
        <p>Art crafted from the finest Materials & Ink.</p>
      </div>
      <div className="icon-box">
        <FaShippingFast className="icon" />
        <h2>FAST SHIPPING</h2>
        <p>All Art is dispatched in 3-4 Working Days.</p>
      </div>
      <div className="icon-box">
        <IoWalletOutline className="icon" />
        <h2>SECURE CHECKOUT</h2>
        <p>Shop with ease.</p>
      </div>
    </div>
  );
};

export default Icon;
