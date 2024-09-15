import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import NewArtPieces from './component/NewArtPieces';
import ArtistSection from './component/ArtistSection';
import ContactFAQ from './component/ContactFAQ';
// import ContactPage from './component/Contact';
import './index.css';


function LandingPage() {
  return (
    <div className='page-background'>
      <Navbar />
      <HeroSection />
      <NewArtPieces />
      <ArtistSection />
      <ContactFAQ />
      {/* <ContactPage/> */}
    </div>
  );
}

export default LandingPage;