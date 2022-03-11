import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "../../components/Header";

import MOON from "/public/destination/image-moon.webp";
import MARS from "/public/destination/image-mars.webp";
import EUROPA from "/public/destination/image-europa.webp";
import TITAN from "/public/destination/image-titan.png";
import ListSelector from "@/components/ListSelector";

const Destination = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="background--destination">
      <Head>
        <title>Space Destination</title>
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
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex justify-start items-center text-center w-full lg:basis-6/12 xl:basis-8/12">
              <div className="flex flex-col justify-start items-center text-center w-full">
                <div className="flex flex-col justify-between items-center mt-2 w-5/6 lg:w-full">
                  <div className="w-3/5 lg:w-3/4 xl:w-2/4">
                    {activeButton === 0 && (
                      <Image
                        src={MOON}
                        className="fade-in"
                        alt="Picture of the planet Moon"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 1 && (
                      <Image
                        src={MARS}
                        className="fade-in"
                        alt="Picture of the planet Mars"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 2 && (
                      <Image
                        src={EUROPA}
                        className="fade-in"
                        alt="Picture of the planet Europa"
                        layout="responsive"
                        priority
                      />
                    )}
                    {activeButton === 3 && (
                      <Image
                        src={TITAN}
                        className="fade-in"
                        alt="Picture of the planet Titan"
                        layout="responsive"
                        priority
                      />
                    )}
                  </div>
                </div>
                <div className="md:hidden">
                  <ListSelector
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    content={["Moon", "Mars", "Europa", "Titan"]}
                    variant="underlined"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between xl:justify-start items-center lg:items-start md:mt-10 mt-4 lg:basis-6/12 xl:basis-4/12 ">
              <div className="hidden md:block">
                <ListSelector
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                  content={["Moon", "Mars", "Europa", "Titan"]}
                  variant="underlined"
                />
              </div>

              <div className="flex flex-col justify-between items-center lg:text-left lg:items-start md:mt-10 lg:ml-4 xl:mt-10">
                <h2 className="uppercase text-6xl text-white font-bellefair">
                  {activeButton == 0
                    ? "Moon"
                    : activeButton == 1
                    ? "Mars"
                    : activeButton == 2
                    ? "Europa"
                    : "Titan"}
                </h2>
                <h3 className="my-2 mx-4 xl:mr-10 lg:mx-0 md:w-3/4 lg:w-3/4 md:my-4 text-base text-blue lg:text-left font-barlow font-normal not-italic">
                  {activeButton == 0
                    ? `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`
                    : activeButton == 1
                    ? `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`
                    : activeButton == 2
                    ? `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`
                    : `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`}
                </h3>

                <hr className="text-dark-gray h-2 w-11/12 my-2" />

                <div className="flex flex-col justify-between md:flex-row md:mb-10 lg:text-left">
                  <div className="flex flex-col mx-5 lg:mx-0 lg:pr-10">
                    <h4 className="uppercase text-blue font-barlow tracking-widest mt-4">
                      AVG. DISTANCE
                    </h4>
                    <span className="uppercase text-white text-2xl font-bellefair tracking-widest my-2">
                      225 MIL. km
                    </span>
                  </div>
                  <div className="flex flex-col mx-5">
                    <h5 className="uppercase text-blue font-barlow tracking-widest mt-4">
                      Est. travel time
                    </h5>
                    <span className="uppercase text-white text-2xl font-bellefair tracking-widest my-2">
                      9 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Destination;
