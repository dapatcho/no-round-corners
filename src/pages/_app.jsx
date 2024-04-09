import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </ThemeProvider>
  );
}
