// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../index.css';

// function HeroSection() {
//   const navigate = useNavigate();
//   const [hover, setHover] = useState(false);

//   const goToGallery = () => {
//     navigate('/gallery');
//   };

//   const buttonStyle = hover ? {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
//     border: 'none',
//     color: 'white',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
//     transform: 'scale(1.05)'
//   } : {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     background: 'linear-gradient(135deg, #a777e3, #6e8efb)',
//     border: 'none',
//     color: 'white',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//   };

//   return (
//     <div style={{ height: '100vh', position: 'relative', padding: '20px' }}>
//       <div>
//         <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: 'calc(100% - 40px)', height: 'calc(100% - 40px)', objectFit: 'cover', zIndex: 0 }}>
//           <source src="/herosection.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white', zIndex: 1, padding: '10px' }}>
//         <h1>Welcome to Our Art Gallery</h1>
//         <p>Explore a world of creativity and wonder.</p>
//         <button
//           style={buttonStyle}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//           onClick={goToGallery}
//         >
//           Explore Art Pieces
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function HeroSection() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const goToGallery = () => {
    navigate('/gallery');
  };

  const buttonStyle = hover
    ? {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        border: 'none',
        color: 'white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        transform: 'scale(1.05)',
      }
    : {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #a777e3, #6e8efb)',
        border: 'none',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
      {/* Left Side: Text and Button */}
      <div style={{ width: '50%', color: 'white', zIndex: 1 }}>
        <h1>Welcome to Our Art Gallery</h1>
        <p>Explore a world of creativity and wonder.</p>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={goToGallery}
        >
          Explore Art Pieces
        </button>
      </div>

      {/* Right Side: Card and Video */}
      <div style={{ position: 'relative', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Card-Like Structure Behind the Video */}
        {/* <div
          style={{
            position: 'relative',
            width: '80%', // Adjust the card width relative to the container
            backgroundColor: '#f0f0f0', // Light gray card color
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden', // Ensures the video doesn't overflow the card
          }}
        > */}
          {/* Video Element */}
          <video
            autoPlay
            loop
            muted
            style={{
              width: '800px',
              height: '800px',
              objectFit: 'cover',
              borderRadius: '20px',
              border: '20px solid white'
            }}
          >
            <source src="/herosection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
