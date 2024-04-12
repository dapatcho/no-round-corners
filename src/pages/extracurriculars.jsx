import fs from "fs";
import path from "path";
import React from "react";
import BufferBar from "@/components/BufferBar";
import ExtracurricularItem from "@/components/ExtracurricularItem";

export async function getStaticProps() {
  const showsDirectory = path.join(process.cwd(), "public/shows");
  const photographyDirectory = path.join(process.cwd(), "public/photography");

  const showFilenames = fs.readdirSync(showsDirectory);
  const showImgUrls = showFilenames.map(
    (filename) => `/shows/${filename}`
  );

  const photographyFilenames = fs.readdirSync(photographyDirectory);
  const photographyImgUrls = photographyFilenames.map(
    (filename) => `/photography/${filename}`
  );

  return {
    props: {
      showImgUrls,
      photographyImgUrls,
    },
  };
}

function extracurriculars({ showImgUrls, photographyImgUrls }) {
  return (
    <div className="">
      <ExtracurricularItem
        title={`community radio`}
        link={`https://radio.cfrc.ca/programs/15`}
        imgUrls={`/NSLogo.png`}
        bodyText={`sounds for the few`}
      />
      <BufferBar accentColor="var(--accent)" />
      <ExtracurricularItem
        title={`DIY music`}
        link={`https://www.instagram.com/nostaticforever/`}
        imgUrls={showImgUrls}
        bodyText={`shows for the few`}
      />
      <BufferBar accentColor="var(--accent)" />
      <ExtracurricularItem
        title={`photography`}
        link={`https://www.flickr.com/photos/187257129@N06/`}
        imgUrls={photographyImgUrls}
        bodyText={`a little outdated`}
      />
    </div>
  );
}

export default extracurriculars;
