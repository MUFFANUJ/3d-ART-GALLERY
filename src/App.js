import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './component/page/landing/landingpage';
import Collection from './component/page/landing/collection';
import Login from './component/page/landing/auth/login';
// import NatureCollection from './component/page/landing/naturecollection'; // Make sure this path is correct
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/collection/:category" element={<Collection />} />
        {/* <Route path="/collection/:category" element={<NatureCollection />} /> */}
        </Routes>
        {showLogin && <Login closeLoginPopup={handleCloseLogin} />}
    </Router>
  );
}

export default App;
