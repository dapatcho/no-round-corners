import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/Navbar.module.css";
import autoprefixer from "autoprefixer";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles["title"]}>
          <div className={styles["header"]}>
            <h2>michael boulos</h2>
          </div>
          <div className={styles["toggle"]}>
            <Image src={"/sun.svg"} width={50} height={50} className="dark" />
            <Image
              src={"/moon-svgrepo-com 1.svg"}
              width={50}
              height={50}
              className="light"
            />
          </div>
        </div>
        <div className={styles["content"]}>
          <ul>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/portfolio"> portfolio</Link>
            </li>
            <li>
              <Link href="/extracurriculars">extracurriculars</Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1brgbsz5AwMSB-pvRdVr99Hmjh7gcpy6p/view?usp=drive_link">
                resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
