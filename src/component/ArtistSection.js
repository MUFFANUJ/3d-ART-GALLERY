import React, { useState } from 'react';
import '../index.css';  // Assuming your styles are correctly set in this CSS file.

// Mock data for the cards
const cardData = [
  { id: 1, name: 'Leonardo da Vinci', description: 'CEO & Co-founder', imageUrl: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT3aSb4ttWw4r6FAX9SCkYE4H3KNPV58ajFu9gdo-5tNczb7cnJ2gRs_J2Da3Kc9-yC' },
  { id: 2, name: 'Pablo Picasso', description: 'CTO & Co-founder', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEKd02e-UADD5nLoYdT0_lKmV_Cl24s2HWdQcg3CoPy6KAS-S' },
  { id: 3, name: 'M. F. Husain', description: 'CFO & Co-founder', imageUrl: 'https://www.archerindia.com/pub/media/catalog/tmp/category/MF_Husain_new_3.jpg' },
  { id: 4, name: 'Rabindranath Tagore', description: 'CMO & Co-founder', imageUrl: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSDFIkcBYeEZbdZGf1I5ur5mcLreEREFColf4PRw93IBFJHndwmWJ_t7f1xc56VZ1-T' },
  { id: 5, name: 'Raja Ravi Verma', description: 'CSO & Co-founder', imageUrl: 'https://www.odisha.plus/wp-content/uploads/2023/10/7ef527a6-36cf-4043-8b52-e85c0ad1f1b8.jpeg' },
  { id: 6, name: 'Founder 6', description: 'COO & Co-founder', imageUrl: 'https://rishihood.edu.in/wp-content/uploads/2024/08/Vivek-Sharma.png' }
];

function ArtistSection() {
  const [current, setCurrent] = useState(0);
  const [itemToShow] = useState(4); // Number of items to show in the viewport

  const handlePrev = () => {
    setCurrent((prevCurrent) => prevCurrent > 0 ? prevCurrent - 1 : cardData.length - itemToShow);
  };

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % (cardData.length - itemToShow + 1));
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel1" style={{ transform: `translateX(-${current * (100 / itemToShow)}%)` }}>
        {cardData.map((card, index) => (
          <div className="card" key={card.id}>
            <div className="card-image">
              <img src={card.imageUrl} alt={card.name} />
            </div>
            <div className="card-info">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>⟵</button>
      <button className="next" onClick={handleNext}>⟶</button>
    </div>
  );
}

export default ArtistSection;
