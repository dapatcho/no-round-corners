import React from "react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const Layout = ({ theme, children }) => {
  return (
    <div className="parent-div">
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
