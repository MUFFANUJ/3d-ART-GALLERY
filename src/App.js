import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/page/Authentication/Login";
import SignUp from "./component/page/Authentication/Signup"; 

import Gallery from "./Gallery";
import LandingPage from "./component/page/landing/landingpage";
import Collection from "./component/page/landing/collection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import AdminAddProduct from "./component/page/admin/AdminAddProduct";
import Navbar from "./component/page/landing/header/navbar";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery/:category" element={<Gallery />} />
          <Route path="/collection/:category" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<><Navbar/><AdminAddProduct/></>}/>
        </Routes>
      </Router>
  );
}

export default App;
