import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-right">
        <div className="footer-stripe"></div>
        <div className="footer-tagline">websites, engineered</div>
      </div>
      <div className="footer-left">
        <div className="footer-linkedin">
          <Link href="https://www.linkedin.com/in/boulosm/">
            linkedin: michael boulos
          </Link>
        </div>
        <div className="footer-email">
          <p>boulosmk@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
