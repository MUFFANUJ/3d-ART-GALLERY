import React, { useState } from "react";
import "./topArtist.css";

const TopArtist = ({ artists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < Math.max(artists.length - 4, 0)) {
      // Prevents going out of bounds
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="top-artist-carousel-container">
      <button className="top-artist-carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div className="top-artist-carousel-images-wrapper">
        <div
          className="top-artist-carousel-images"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {artists.map((artist, index) => (
            <div className="top-artist-carousel-item" key={index}>
              <img
                src={artist.image}
                alt={`artist-${index}`}
                className="top-artist-carousel-image"
              />
              <div className="top-artist-artist-info">
                <span className="top-artist-artist-name">{artist.name}</span>
                <span className="top-artist-artist-description">
                  {artist.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="top-artist-carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default TopArtist;
