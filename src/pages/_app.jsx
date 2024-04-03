import "@/styles/globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import { google } from "next/font/google";

const firaCode = google({
  family: "Fira Code",
  weight: ["100", "400", "700"], // Add the weights you need
});

const firaSans = google({
  family: "Fira Sans",
  weight: ["700"], // Add the weights you need
});

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
