import React from "react";
import Button from "./button";
import Trending from "./trending";
import Category from "./categories";

const Topsection = () => {
  return (
    <div>
      <Button />
      <Trending />
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Categories
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Category
          imageUrl="https://artevenue.com/static/images/artevenue_banners/pichwai_banner.jpg"
          link="/category"
        />
        <Category
          imageUrl="https://artevenue.com/static/images/artevenue_banners/natures_pallete_banner.jpg"
          link="/category"
        />
      </div>
    </div>
  );
};

export default Topsection;
