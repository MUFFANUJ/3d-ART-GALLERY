import React from "react";

const Button = ({ onShowLogin }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onShowLogin}>
        EXPLORE ART PIECES
      </button>
    </div>
  );
};

export default Button;
