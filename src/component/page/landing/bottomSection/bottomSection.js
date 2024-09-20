import React from 'react';
import TopArtist from './topArtist';
import Icon from './icon';

const BottomSection = () => {
  const artists = [
    {
      image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT3aSb4ttWw4r6FAX9SCkYE4H3KNPV58ajFu9gdo-5tNczb7cnJ2gRs_J2Da3Kc9-yC',
      name: 'Leonardo da Vinci',
      description: 'Famous Indian Artist'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEKd02e-UADD5nLoYdT0_lKmV_Cl24s2HWdQcg3CoPy6KAS-S',
      name: 'Pablo Picasso',
      description: 'Renowned for abstract work'
    },
    {
      image: 'https://www.archerindia.com/pub/media/catalog/tmp/category/MF_Husain_new_3.jpg',
      name: 'M. F. Husain',
      description: 'Modern art specialist'
    },
    {
      image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSDFIkcBYeEZbdZGf1I5ur5mcLreEREFColf4PRw93IBFJHndwmWJ_t7f1xc56VZ1-T',
      name: 'Rabindranath Tagore',
      description: 'A pioneer in visual arts'
    },
    {
      image: 'https://www.odisha.plus/wp-content/uploads/2023/10/7ef527a6-36cf-4043-8b52-e85c0ad1f1b8.jpeg',
      name: 'Raja Ravi Verma',
      description: 'Traditional Indian art expert'
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0', fontFamily: "'Playfair Display', serif" }}>
        Top Artists
      </h1>
      <TopArtist artists={artists} />
      <Icon/>
    </div>
  );
};

export default BottomSection;
