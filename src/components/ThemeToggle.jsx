import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Image
          src="/sun.svg"
          width={40}
          height={50}
          alt="Switch to light theme"
          style={{
            cursor: "pointer",
            transition: "opacity 0.3s",
            // opacity: theme === "dark" ? 1 : 0,
          }}
        />
      ) : (
        <Image
          src="/moon-svgrepo-com 1.svg"
          width={40}
          height={50}
          alt="Switch to dark theme"
          style={{
            cursor: "pointer",
            transition: "opacity 0.3s",
            // opacity: theme === "light" ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
