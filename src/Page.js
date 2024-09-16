import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import NewArtPieces from './component/NewArtPieces';
import ArtistSection from './component/ArtistSection';
import ContactFAQ from './component/ContactFAQ';
import './index.css';

function LandingPage() {
  return (
    <div className="page-background">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="new-arrivals">
        <NewArtPieces />
      </div>
      <div id="artists">
        <ArtistSection />
      </div>
      <div id="contact">
        <ContactFAQ />
      </div>
    </div>
  );
}

export default LandingPage;
