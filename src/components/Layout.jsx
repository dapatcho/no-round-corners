import React from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="main-content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
