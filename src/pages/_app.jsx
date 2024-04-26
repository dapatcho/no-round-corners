import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a full page load.
    // You might want to replace this with actual data fetching logic.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // adjust time based on your needs

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme-initialized", true);
  }, []);

  return (
    <>
      <ThemeProvider
        attribute="data-theme"
        enableSystem={true}
        defaultTheme="system"
      >
        {" "}
        <div
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.5s ease-in",
          }}
        >
          {" "}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  );
}
