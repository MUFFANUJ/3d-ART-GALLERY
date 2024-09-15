import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './New.css'; // Make sure your custom styles are defined here

function NewArtPieces() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handling the previous click
  const handlePrevClick = () => {
    console.log('Clicked Previous');
    setCurrentSlide(prev => (prev === 0 ? 2 : prev - 1)); // Assuming there are 3 slides, adjust accordingly
  };

  // Handling the next click
  const handleNextClick = () => {
    console.log('Clicked Next');
    setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1)); // Assuming there are 3 slides, adjust accordingly
  };

  return (
    <div className="container-fluid custom-container"> {/* Use container-fluid for full width and remove padding */}
      <div className="card custom-card-style"> {/* Added custom class for specific styling */}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[
              "https://t3.ftcdn.net/jpg/02/73/22/74/360_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg",
              "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg",
              "https://www.tccd.edu/magazine/assets/images/volume-03/issue-02/arts/the-importance-of-art-social-share.jpg"
            ].map((src, index) => (
              <div className={`carousel-item ${currentSlide === index ? 'active' : ''}`} key={index}>
                <img
                  src={src}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: 'cover', height: '500px' }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
            onClick={handlePrevClick}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
            onClick={handleNextClick}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArtPieces;


