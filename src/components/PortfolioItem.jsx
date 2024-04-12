import React from "react";
import Link from "next/link"

import styles from "../styles/components/PortfolioItem.module.css";

const PortfolioItem = ({ link, title, imgUrlDark, imgUrlLight, bodyText }) => {
  const paragraphs = bodyText.split("\n").map((line, index) => (
    <p key={index} className={styles.line}>
      {line}
    </p>
  ));

  return (
    <div className={styles.PortfolioItem}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrlLight}
          className={`${styles.image} ${styles.lightModeImage}`}
        />
        <img
          src={imgUrlDark}
          className={`${styles.image} ${styles.darkModeImage}`}
        />
      </a>
      {paragraphs}
    </div>
  );
};

export default PortfolioItem;
