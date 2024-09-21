import React from 'react';
import Rating from './Rating'; // Assuming Rating is a separate component

const Card = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div style={{
      position: 'relative',
      width: '300px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add shadow for better visual separation
      backgroundColor: '#fff', // Background color for the card
      borderRadius: '8px', // Rounded corners
      overflow: 'hidden' // Keeps everything inside the border radius
    }}>
      <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '10px 0' }}>{product.title}</h3>
        <p>{product.story}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <span>${product.price}</span>
          <Rating value={product.rating} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          <button onClick={() => onBuyNow(product)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
