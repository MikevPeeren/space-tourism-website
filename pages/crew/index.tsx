import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import ListSelector from "@/components/ListSelector";

import DOUGLAS from "/public/crew/image-douglas-hurley.webp";
import MARK from "/public/crew/image-mark-shuttleworth.webp";
import VICTOR from "/public/crew/image-victor-glover.webp";
import ANOUSHEH from "/public/crew/image-anousheh-ansari.webp";

const Crew = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="background--crew">
      <Head>
        <title>Space Crew</title>
      </Head>
      <main className="flex flex-col min-h-screen text-center relative">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start items-center text-center mt-4 mx-1 ">
          <h1 className="uppercase my-6 text-base text-white tracking-widest">
            <span className="opacity-25 pr-4">02</span> Meet your crew
          </h1>
          <div className="flex flex-col justify-between items-center mt-8 border-b border-dark-gray w-5/6">
            <div className="w-2/4">
              {activeButton === 1 && (
                <Image
                  src={DOUGLAS}
                  alt="Picture of Douglas Hurley"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 2 && (
                <Image
                  src={MARK}
                  alt="Picture of Mark Shuttleworth"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 3 && (
                <Image
                  src={VICTOR}
                  alt="Picture of Victor Glover"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 4 && (
                <Image
                  src={ANOUSHEH}
                  alt="Picture of Anousheh Ansari"
                  layout="responsive"
                  priority
                />
              )}
            </div>
          </div>

          <ListSelector
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />

          <div className="flex flex-col justify-between items-center mt-8">
            <h2 className="uppercase text-base text-white opacity-50 font-bellefair mb-2">
              {activeButton == 1
                ? "Commander"
                : activeButton == 2
                ? "Mission Specialist"
                : activeButton == 3
                ? "Pilot"
                : "Flight Engineer"}
            </h2>
            <h3 className="uppercase text-2xl text-white font-bellefair">
              {activeButton == 1
                ? "Douglas Hurley"
                : activeButton == 2
                ? "MARK SHUTTLEWORTH"
                : activeButton == 3
                ? "Victor Glover"
                : "Anousheh Ansari"}
            </h3>
            <h4 className="my-6 mx-4 text-base text-blue font-barlow not-italic">
              {activeButton == 1
                ? `Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.`
                : activeButton == 2
                ? `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`
                : activeButton == 3
                ? `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`
                : `Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.`}
            </h4>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Crew;
