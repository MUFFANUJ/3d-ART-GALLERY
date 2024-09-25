import React, { useState } from "react";
import "./trending.css";

const artList = [
  {
    id: 1,
    name: "Mona Lisa",
    image:
      "https://www.nookatyou.com/cdn/shop/files/1.1_e565aa3c-7d4a-4dbe-814d-072bd18fad32_540x.jpg?v=1722603399",
  },
  {
    id: 2,
    name: "Starry Night",
    image:
      "https://www.nookatyou.com/cdn/shop/files/1.1_7bac4fd2-1d81-4a15-8108-686a32b18672_540x.jpg?v=1719579158",
  },
  {
    id: 3,
    name: "The Scream",
    image:
      "https://www.nookatyou.com/cdn/shop/files/1.1_bf9ff153-5a82-444d-8f7e-bf0e99cd6072_540x.jpg?v=1719579299",
  },
  {
    id: 4,
    name: "Girl with a Pearl Earring",
    image:
      "https://www.nookatyou.com/cdn/shop/files/1.1_18f6828e-8298-4786-b3ab-95469c9e9e60_540x.jpg?v=1719580520",
  },
];

const Trending = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div className="explore-menu">
      <h1 className="explore-menu-header">Trending Art</h1>
      <div className="explore-menu-list">
        {artList.map((art) => (
          <div
            key={art.id}
            className={`explore-menu-item ${
              selectedArt === art.name ? "selected-art" : ""
            }`}
            onClick={() => setSelectedArt(art.name)}
          >
            <div className="inner-circle">
              <img src={art.image} alt={art.name} />
            </div>
            <p>{art.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
