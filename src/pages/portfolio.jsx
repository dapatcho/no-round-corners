import React from "react";
import Link from "next/link";
import BufferBar from "@/components/BufferBar";
import PortfolioItem from "@/components/PortfolioItem";

export default function portfolio() {
  return (
    <div>
      <PortfolioItem
        title=""
        link="https://www.civiconnect.ca/"
        imgUrlDark="/civi-dark.png"
        imgUrlLight="/civi-light.png"
        bodyText={`-During my four month internship I was part of the three person team developing the redesigned Civiconnect website redesign from the ground up, making a dynamic and mobile friendly device with Node.js and Strapi CMS integration. \n -Designed and implemented engaging and responsive website components which.\n-Components also had extensive integration with Strapi CMS to provide the end users with autonomy and a practical means of maintaining and updating content throughout the site.`}
      />{" "}
      <BufferBar accentColor="var(--accent)" />
      <PortfolioItem
        title="mboulos.dev"
        link="https://mboulos.dev/"
        bodyText="My personal website, designed from the ground up in Figma, written in HTML, CSS, and JavaScript using the React framework."
      />{" "}
    </div>
  );
}
