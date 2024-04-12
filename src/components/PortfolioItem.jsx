import React from "react";

import styles from "../styles/components/PortfolioItem.module.css";


const PortfolioItem = ({ link, title, imgUrl, bodyText }) => {
  return (
    <div className={styles.PortfolioItem}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <img src={imgUrl} className={styles.image} />
      <p>{bodyText}</p>
    </div>
  );
};

export default PortfolioItem;
