import React, { useState, useEffect } from "react";
import styles from "../styles/components/ExtracurricularItem.module.css";

const ExtracurricularItem = ({ link, title, imgUrls, bodyText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isArray = Array.isArray(imgUrls);

  useEffect(() => {
    if (!isArray) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [imgUrls, isArray]);

  const currentImageUrl = isArray ? imgUrls[currentImageIndex] : imgUrls;

  return (
    <div className={styles.ExtracurricularItem}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={currentImageUrl} className={`${styles.image} `} />
      </a>
      <p>{bodyText}</p>
    </div>
  );
};

export default ExtracurricularItem;
