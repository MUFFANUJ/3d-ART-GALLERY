import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "./button";
import Trending from "./trending";

const Topsection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/collection/${category}`);
  }

  return (
    <div style={{ paddingBottom: "120px"}}>
  <Button />
  <Trending/>
  <div style={{height:"60px"}}></div>
  <h1 style={{
    textAlign: "center",
    margin: "20px 0",
    fontFamily: "'Playfair Display', serif",
    paddingBottom: "150px"
  }}>
    Categories
  </h1>
  <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
    height: "60vh", 
  }}>
    <div style={{
      width: "48%",
      height: "100%", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <img
        src="https://artevenue.com/static/images/artevenue_banners/pichwai_banner.jpg"
        style={{
          width: "100%", 
          height: "100vh",
          objectFit: "cover", 
        }}
        onClick={() => handleClick("pichwai")}
        alt="Pichwai Art"
      />
    </div>
    <div style={{
      width: "48%",
      height: "100%", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <img
        src="https://artevenue.com/static/images/artevenue_banners/natures_pallete_banner.jpg"
        style={{
          width: "100%", 
          height: "100vh",
          objectFit: "cover", 
        }}
        onClick={() => handleClick("nature")}
        alt="Nature's Palette"
      />
    </div>
  </div>
</div>

  );
};
export default Topsection;

