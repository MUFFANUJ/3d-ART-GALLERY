import React, { useState } from 'react';
import './topArtist.css';

const TopArtist = ({ artists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < Math.max(artists.length - 4, 0)) { // Prevents going out of bounds
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div className="carousel-images-wrapper">
        <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {artists.map((artist, index) => (
            <div className="carousel-item" key={index}>
              <img src={artist.image} alt={`artist-${index}`} className="carousel-image" />
              <div className="artist-info">
                <span className="artist-name">{artist.name}</span> - <span className="artist-description">{artist.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default TopArtist;
