import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-content-wrapper">
        {slides.map((slide, index) => (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <div className="slide-container">
                <img src={slide.image} alt={slide.title} className="slide-image"/>
                <div className="text-container">
                  <h2>{slide.title}</h2>
                  <h4>{slide.artist}</h4>
                  <p>{slide.story}</p>
                  <button className="shop-now-btn">Shop Now</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

