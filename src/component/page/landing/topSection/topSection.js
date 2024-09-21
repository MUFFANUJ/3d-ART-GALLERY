import React from "react";
import { useNavigate } from 'react-router-dom';
import Category from "./categories";
import Button from "./button";

const Topsection = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/category'); // Navigate to the category page
  // };

  const handleClick = (category) => {
    navigate(`/collection/${category}`);
  }

  return (
    <div>
      <Button/>
      <h1 style={{
        textAlign: "center",
        margin: "20px 0",
        fontFamily: "'Playfair Display', serif",
      }}>
        Categories
      </h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
      }}>
        <Category
          imageUrl="https://artevenue.com/static/images/artevenue_banners/pichwai_banner.jpg"
          onClick={() => handleClick("pichwai")}
        />
        <Category
          imageUrl="https://artevenue.com/static/images/artevenue_banners/natures_pallete_banner.jpg"
          onClick={() => handleClick("nature")}
        />
      </div>
    </div>
  );
};
export default Topsection;

