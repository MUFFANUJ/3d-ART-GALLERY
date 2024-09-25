import React from "react";
import Header from "./header/header";
import Topsection from "./topSection/topSection";
import BottomSection from "./bottomSection/bottomSection";
import Footer from "./footer/footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Topsection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
