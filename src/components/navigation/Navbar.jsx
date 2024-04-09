import React from "react";
import Link from "next/link";
import styles from "../../styles/components/navigation/Navbar.module.css";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles["title"]}>
          <div className={styles["header"]}>
            <h2>michael boulos</h2>
          </div>
          <div className={styles["toggle"]}>
            <ThemeToggle />
          </div>
        </div>
        <div className={styles["content"]}>
          <ul>
            <li className={isActive("/") ? styles.active : ""}>
              <Link href="/">about</Link>
            </li>
            <li className={isActive("/portfolio") ? styles.active : ""}>
              <Link href="/portfolio"> portfolio</Link>
            </li>
            <li className={isActive("extracurriculars") ? styles.active : ""}>
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
