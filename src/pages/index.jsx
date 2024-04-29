import React from "react";
import Image from "next/image";
import styles from "../styles/pages/index.module.css";
import BufferBar from "@/components/BufferBar";

export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.spacer}></div>
      <div className={styles.content}>
        <p className="">
          Hey, I’m Michael, web developer and civil engineer, as well as radio
          show host, DIY music organizer, performer, and graphic designer. I
          love music, have an obsession with coffee, and clearly wear too many
          hats.
        </p>
      </div>
      <div className={styles.headshot}>
        <img
          src="/Headshot.png"
          alt="Headshot of Michael Boulos, web developer"

        />
      </div>
    </div>
  );
}
