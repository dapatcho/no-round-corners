import styles from "../styles/pages/index.module.css";

import BufferBar from "@/components/BufferBar";

import React from "react";

export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.spacer}></div>
      <div className={styles.content}>
        <p className="">
          Hey, I’m Michael, web developer and civil engineering graduate.
          Additionally, a radio show host, DIY music organizer, performer, and
          graphic designer. I love music, have an obsession with coffee, and
          clearly wear too many hats.
        </p>
        <BufferBar accentColor="var(--accent)" />
        {/* <br/> */}
        <p>
          I am pursuing web dev work to better align my creative tendencies and
          work in faster paced and more engaging environments. I bring a wealth
          of professional experience working at civil engineering consultancies.
          I am extremely familiar working with moving targets and a plethora of
          stakeholders, where I consistently turn over quality work.
        </p>
      </div>
    </div>
  );
}
