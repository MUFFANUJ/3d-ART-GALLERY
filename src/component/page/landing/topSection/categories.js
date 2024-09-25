import React from "react";
import styles from "./categories.css";

const Category = ({ imageUrl, link, title, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(link)}>
      <img src={imageUrl} alt={title} className={styles.image} />
    </div>
  );
};

export default Category;
