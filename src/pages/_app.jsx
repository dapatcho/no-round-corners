import "@/styles/globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";


export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
