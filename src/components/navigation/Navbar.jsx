import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../../styles/components/navigation/Navbar.module.css";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navbarRef = useRef(null);

  const isActive = (pathname) => router.pathname === pathname;

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbarRef]);

  return (
    <nav>
      <div className={styles.navbar} ref={navbarRef}>
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
              <a
                href="/files/Michael Boulos - Web Dev.pdf"
                alt="My Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
