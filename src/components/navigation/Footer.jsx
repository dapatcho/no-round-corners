import React from "react";
import styles from "../../styles/components/navigation/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className={styles["footer"]}>
        <div className={styles["right"]}>
          <div className={styles["linkedin"]}>
            <Link
              href="https://www.linkedin.com/in/boulosm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin: michael boulos
            </Link>
          </div>
          <div className={styles["email"]}>
            <p>boulosmk@gmail.com</p>
          </div>
        </div>
        <div className={styles["left"]}>
          <div className={styles["stripe"]}>
            <div></div>
          </div>
          <div className={styles["tagline"]}>
            <p>websites, engineered</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
