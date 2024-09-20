import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FullPage from './component/page/landing/FullPage';
import Gallery from './Gallery'; // Assuming Gallery is properly defined in your project
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './component/page/landing/landingpage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
