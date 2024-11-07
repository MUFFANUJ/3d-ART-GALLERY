import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/gallery/all");
  };

  return (
    <div className="button-container">
      <button className="button" onClick={handleButtonClick}>
        EXPLORE COLLECTION
      </button>
    </div>
  );
};

export default Button;
