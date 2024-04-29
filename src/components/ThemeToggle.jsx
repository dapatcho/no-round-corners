import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import styles from "../styles/components/navigation/Navbar.module.css";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Determine the icon based on the resolved theme or the theme.
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme((resolvedTheme || theme) === "dark");
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = (resolvedTheme || theme) === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const sunIcon = "/sun.svg";
  const moonIcon = "/moon.svg";

  return (
    <div onClick={toggleTheme} className={styles.themeToggle}>
      <div className={styles.iconContainer}>
        <div className={styles.icon} style={{ opacity: isDarkTheme ? 0 : 1 }}>
          <Image src={moonIcon} width={50} height={50} alt="Sun icon" />
        </div>
        <div className={styles.icon} style={{ opacity: isDarkTheme ? 1 : 0 }}>
          <Image src={sunIcon} width={50} height={50} alt="Moon icon" />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
