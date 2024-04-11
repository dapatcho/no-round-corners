import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/navigation/Navbar.module.css";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles["title"]}>
          <div className={styles["header"]}>
            <Link href="/">
              <h2>michael boulos</h2>
            </Link>
          </div>
          <div className={styles["toggle"]}>
            <ThemeToggle />
          </div>
          <div
            className={`${styles.burger} ${
              isNavExpanded ? styles.burgerMenuOpen : styles.burgerMenuClosed
            }`}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <div class="text-5xl">Ξ</div>
          </div>
        </div>
        <div
          className={`${styles.content} ${
            isNavExpanded ? styles.expanded : ""
          }`}
        >
          <div className={styles["toggle"]}>
            <div className="flex justify-center pl-5">
              <ThemeToggle />
            </div>
          </div>
          <ul>
            <li className={isActive("/") ? styles.active : ""}>
              <Link href="/">about</Link>
            </li>
            <li className={isActive("/portfolio") ? styles.active : ""}>
              <Link href="/portfolio"> portfolio</Link>
            </li>
            <li className={isActive("/extracurriculars") ? styles.active : ""}>
              <Link href="/extracurriculars">extracurriculars</Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1brgbsz5AwMSB-pvRdVr99Hmjh7gcpy6p/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
