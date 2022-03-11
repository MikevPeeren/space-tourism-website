import React, { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import ListSelector from "@/components/ListSelector";

import DOUGLAS from "/public/crew/image-douglas-hurley.webp";
import MARK from "/public/crew/image-mark-shuttleworth.webp";
import VICTOR from "/public/crew/image-victor-glover.webp";
import ANOUSHEH from "/public/crew/image-anousheh-ansari.webp";
import useWindowDimensions from "@/utils/hooks/useWindowDimension";

const Crew = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = width && width < 768;

  return (
    <div className="background--crew">
      <Head>
        <title>Space Crew</title>
      </Head>
      <main className="flex flex-col min-h-screen text-center relative">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start md:items-start md:ml-9 items-center text-center mt-4 mx-1">
          <h1 className="uppercase my-6 lg:my-20 lg:mx-20 text-base lg:text-2xl text-white tracking-widest">
            <span className="opacity-25 pr-4 font-bold">01</span> Pick your
            destination
          </h1>
          <div className="flex flex-col lg:flex-row-reverse w-full">
            <div className="flex flex-col justify-start items-center text-center w-full">
              <div className="flex flex-col justify-between items-center mt-8 border-b border-gray w-5/6 lg:w-2/4 border-opacity-30 md:border-none static">
                {mounted && isMobile ? (
                  <div className="w-3/4 md:w-2/4">
                    {activeButton === 0 && (
                      <Image
                        src={DOUGLAS}
                        className="fade-in"
                        alt="Picture of Douglas Hurley"
                        layout="fixed"
                        width={200}
                        height={223}
                        priority
                      />
                    )}
                    {activeButton === 1 && (
                      <Image
                        src={MARK}
                        className="fade-in"
                        alt="Picture of Mark Shuttleworth"
                        layout="fixed"
                        width={200}
                        height={223}
                        priority
                      />
                    )}
                    {activeButton === 2 && (
                      <Image
                        src={VICTOR}
                        className="fade-in"
                        alt="Picture of Victor Glover"
                        layout="fixed"
                        width={200}
                        height={223}
                        priority
                      />
                    )}
                    {activeButton === 3 && (
                      <Image
                        src={ANOUSHEH}
                        className="fade-in"
                        alt="Picture of Anousheh Ansari"
                        layout="fixed"
                        width={200}
                        height={223}
                        priority
                      />
                    )}
                  </div>
                ) : (
                  <div className="w-3/4 md:w-4/12 lg:w-4/12 absolute bottom-0 lg:right-10">
                    {activeButton === 0 && (
                      <Image
                        src={DOUGLAS}
                        className="fade-in"
                        alt="Picture of Douglas Hurley"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 1 && (
                      <Image
                        src={MARK}
                        className="fade-in"
                        width={100}
                        height={125}
                        alt="Picture of Mark Shuttleworth"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 2 && (
                      <Image
                        src={VICTOR}
                        className="fade-in"
                        alt="Picture of Victor Glover"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 3 && (
                      <Image
                        src={ANOUSHEH}
                        className="fade-in"
                        alt="Picture of Anousheh Ansari"
                        layout="responsive"
                        priority
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="md:hidden">
                <ListSelector
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  content={["", "", "", ""]}
                  variant="sm"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start mt-20 lg:my-20 lg:mx-20">
              <h2 className="uppercase text-base lg:text-2xl text-white opacity-50 font-bellefair mb-2 lg:mb-4">
                {activeButton == 0
                  ? "Commander"
                  : activeButton == 1
                  ? "Mission Specialist"
                  : activeButton == 2
                  ? "Pilot"
                  : "Flight Engineer"}
              </h2>
              <h3 className="uppercase text-2xl lg:text-6xl text-white lg:text-left font-bellefair">
                {activeButton == 0
                  ? "Douglas Hurley"
                  : activeButton == 1
                  ? "MARK SHUTTLEWORTH"
                  : activeButton == 2
                  ? "Victor Glover"
                  : "Anousheh Ansari"}
              </h3>
              <h4 className="my-6 mx-4 md:w-2/4 lg:w-3/4 lg:mx-0 lg:text-left lg:text-xl  text-base text-blue font-barlow not-italic">
                {activeButton == 0
                  ? `Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.`
                  : activeButton == 1
                  ? `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`
                  : activeButton == 2
                  ? `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`
                  : `Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.`}
              </h4>

              <div className="hidden md:block">
                <ListSelector
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  content={["", "", "", ""]}
                  variant="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Crew;
