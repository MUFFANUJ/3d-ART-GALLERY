import React from 'react';
import { Link } from 'react-router-dom';
import styles from './categories.css';

const Category = ({ imageUrl, link, title }) => {
  return (
    <div className={styles.container}>
      <Link to={link}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.image}
        />
      </Link>
    </div>
  );
};

export default Category;


