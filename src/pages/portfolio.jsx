import React from "react";
import Link from "next/link";
import BufferBar from "@/components/BufferBar";
import PortfolioItem from "@/components/PortfolioItem";

export default function portfolio() {
  return (
    <div className="">
      <PortfolioItem
        title="mboulos.dev"
        link="https://mboulos.dev/"
        imgUrl=""
        bodyText="my personal website, designed from the ground up in Figma, written in HTML, CSS, and JavaScript using the Next.JS React framework"
      />{" "}
      <BufferBar accentColor="var(--accent)" />
      <PortfolioItem
        title="mboulos.dev"
        link="https://mboulos.dev/"
        bodyText="my personal website, designed from the ground up in Figma, written in HTML, CSS, and JavaScript using the React framework"
      />{" "}
    </div>
  );
}
