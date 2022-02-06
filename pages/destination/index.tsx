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

        <div className="flex flex-col justify-start items-center text-center mt-4 mx-1 ">
          <h1 className="uppercase my-6 text-base text-white tracking-widest">
            <span className="opacity-25 pr-4 font-bold">01</span> Pick your
            destination
          </h1>
          <div className="flex flex-col justify-between items-center mt-8 w-5/6">
            <div className="w-3/5">
              {activeButton === 0 && (
                <Image
                  src={MOON}
                  alt="Picture of the planet Moon"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 1 && (
                <Image
                  src={MARS}
                  alt="Picture of the planet Mars"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 2 && (
                <Image
                  src={EUROPA}
                  alt="Picture of the planet Europa"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 3 && (
                <Image
                  src={TITAN}
                  alt="Picture of the planet Titan"
                  layout="responsive"
                  priority
                />
              )}
            </div>
          </div>

          <ListSelector
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            content={["Moon", "Mars", "Europa", "Titan"]}
            variant="underlined"
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Destination;
