import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-title">
        <h2>michael boulos</h2>
      </div>
      <div className="nav-content">
        <nav>
          <ul>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link href="/extracurriculars">extracurriculars</Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1brgbsz5AwMSB-pvRdVr99Hmjh7gcpy6p/view?usp=drive_link">
                resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
