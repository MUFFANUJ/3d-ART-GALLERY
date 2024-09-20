import React from "react";
import Carousel from "./Carousel";
import Navbar from "./navbar";

const slidesData = [
  {
    image:
      "https://www.nookatyou.com/cdn/shop/files/Banner_june_-_2.jpg?v=1718796790&width=1200",
    title: "Capitol in Spring",
    artist: "Elena Martinez",
    story: "Experience urban renewal with 'Capitol in Spring' where the majestic Capitol meets vibrant spring foliage. Perfect for adding a serene yet grand touch to any space.",
  },
  {
    image:
      "https://www.nookatyou.com/cdn/shop/files/Aug-Banner.jpg?v=1724846852&width=1200",
    title: "Whispers of Nature",
    artist: "Evelyn Harper",
    story: "Transform your home into a peaceful retreat with the Whispers of Nature collection, featuring serene landscapes and calming countryside scenes. Perfect for any space, these artworks offer timeless beauty and tranquility.",
  },
];

const Header = () => {
  return (
    <div>
      <Navbar />
      <Carousel slides={slidesData} />
    </div>
  );
};

export default Header;