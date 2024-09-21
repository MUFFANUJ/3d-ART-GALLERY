import React from "react";
import { useNavigate } from 'react-router-dom';
import Category from "./categories";
import Button from "./button";
// import Collection from './Collection'; 

const Topsection = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate('/Gallery'); // Navigate to the link passed from the category component
  };

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
          onClick={handleClick}
          
        />
        <Category
          imageUrl="https://artevenue.com/static/images/artevenue_banners/natures_pallete_banner.jpg"
          onClick={handleClick}
          link="/natures-palette"
          title="Nature's Palette"
        />
      </div>
    </div>
  );
};

export default Topsection;
