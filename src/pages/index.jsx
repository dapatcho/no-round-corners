import React from "react";
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 `}
    >
      <p>
        Hey, I’m Michael (he/they), web developer and civil engineering
        graduate. Additionally, a radio show host, DIY music organizer,
        performer, and graphic designer. I love music, have an obsession with
        coffee, and clearly wear too many hats.
      </p>
      <p>
        I am pursuing web dev work to better align my creative tendencies and
        work in faster paced and more engaging environments. I bring a wealth of
        professional experience working at civil engineering consultancies. I am
        extremely familiar working with moving targets and a plethora of
        stakeholders, where I consistently turn over quality work.
      </p>
    </main>
  );
}
