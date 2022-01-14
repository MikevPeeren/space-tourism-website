import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import clsx from "clsx";

import Header from "../components/Header";

import DOUGLAS from "../public/crew/image-douglas-hurley.webp";
import MARK from "../public/crew/image-mark-shuttleworth.webp";
import VICTOR from "../public/crew/image-victor-glover.webp";
import ANOUSHEH from "../public/crew/image-anousheh-ansari.webp";

const Crew = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleCrewChange = (event) => {
    setActiveButton(event.target.id);
  };

  return (
    <div className="background--crew">
      <Head>
        <title>Space Crew</title>
      </Head>
      <main className="flex flex-col min-h-screen text-center">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start items-center min-h-screen text-center mt-10 mx-1">
          <h1 className="uppercase my-6 text-base text-white">
            <span className="opacity-25 pr-4">02</span> Meet your crew
          </h1>
          <div className="flex flex-col justify-between items-center mt-8 border-b border-dark-gray w-5/6">
            <div className="w-2/4">
              <Image
                src={
                  activeButton == 1
                    ? DOUGLAS
                    : activeButton == 2
                    ? MARK
                    : activeButton == 3
                    ? VICTOR
                    : ANOUSHEH
                }
                alt="Picture of the author"
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-8">
            <button
              id="1"
              className={clsx({
                "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer": true,
                "bg-opacity-20": activeButton != 1,
              })}
              onClick={(event) => {
                handleCrewChange(event);
              }}
            ></button>
            <button
              id="2"
              className={clsx({
                "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer": true,
                "bg-opacity-20": activeButton != 2,
              })}
              onClick={(event) => {
                handleCrewChange(event);
              }}
            ></button>
            <button
              id="3"
              className={clsx({
                "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer": true,
                "bg-opacity-20": activeButton != 3,
              })}
              onClick={(event) => {
                handleCrewChange(event);
              }}
            ></button>
            <button
              id="4"
              className={clsx({
                "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer": true,
                "bg-opacity-20": activeButton != 4,
              })}
              onClick={(event) => {
                handleCrewChange(event);
              }}
            ></button>
          </div>
          <div className="flex flex-col justify-between items-center mt-8">
            <h2 className="uppercase text-base text-white opacity-50">
              Commander
            </h2>
            <h3 className="uppercase text-2xl text-blue">Douglas Hurley</h3>
            <h4 className="my-6 mx-4 text-base text-blue font-normal not-italic">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </h4>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Crew;
