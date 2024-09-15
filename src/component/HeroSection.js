import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function HeroSection() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const goToGallery = () => {
    navigate('/gallery');
  };

  const buttonStyle = hover ? {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    border: 'none',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    transform: 'scale(1.05)'
  } : {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #a777e3, #6e8efb)',
    border: 'none',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ height: '100vh', position: 'relative', padding: '20px 20px 20px 20px' }}> {/* Added padding for overall margin */}
      <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: 'calc(100% - 40px)', height: 'calc(100% - 40px)', objectFit: 'cover', zIndex: 0 }}>
        <source src="/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <Canvas style={{ zIndex: -2, width: '100%', height: '100%' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Environment background={false} files="venice/venice_sunset_1k.hdr" />
        <OrbitControls />
      </Canvas>
      <div style={{ position: 'absolute', top: '20%', left: '10%', color: 'white', zIndex: 1, padding: '10px' }}> {/* Added padding for content margin */}
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
    </div>
  );
}  
export default HeroSection;
