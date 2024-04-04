import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["right"]}>
        <div className={styles["linkedin"]}>
          <Link href="https://www.linkedin.com/in/boulosm/">
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
  );
}

export default Footer;
