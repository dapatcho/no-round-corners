import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Determine the icon based on the resolved theme or the theme.
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const currentTheme = resolvedTheme || theme;

    if (currentTheme) {
      const iconPath = currentTheme === "dark" ? "/sun.svg" : "/moon.svg";
      setIcon(iconPath);
    }
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = (resolvedTheme || theme) === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!icon) return null;

  return (
    <div onClick={toggleTheme}>
      <Image
        src={icon}
        width={50}
        height={50}
        alt="Toggle theme"
        style={{ cursor: "pointer", transition: "opacity 0.3s" }}
      />
    </div>
  );
};

export default ThemeToggle;
