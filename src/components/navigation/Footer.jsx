import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className="right">
        <div className="stripe"></div>
        <div className="tagline"><p>websites, engineered</p></div>
      </div>
      <div className="left">
        <div className="linkedin">
          <Link href="https://www.linkedin.com/in/boulosm/">
            linkedin: michael boulos
          </Link>
        </div>
        <div className="email">
          <p>boulosmk@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
