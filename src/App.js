import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './Page'; // Importing LandingPage component
import Gallery from './Gallery'; // Assuming Gallery is properly defined in your project
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
