import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";

import VEHICLE from "/public/technology/image-launch-vehicle-landscape.jpg";
import CAPSULE from "/public/technology/image-space-capsule-landscape.jpg";
import SPACEPORT from "/public/technology/image-spaceport-landscape.jpg";
import ListSelector from "@/components/ListSelector";

const Technology = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="background--technology">
      <Head>
        <title>Technology</title>
      </Head>
      <main className="flex flex-col min-h-screen text-center relative">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start items-center text-center mt-4 mx-1 ">
          <h1 className="uppercase my-6 text-base text-white tracking-widest">
            <span className="opacity-25 pr-4 font-bold">03</span>Space Launch
            101
          </h1>
        </div>

        <div className="mt-3 w-full">
          <div className="w-full">
            {activeButton === 0 && (
              <Image
                src={VEHICLE}
                alt="Picture of Launch Vehicle"
                layout="responsive"
                priority
              />
            )}
            {activeButton === 1 && (
              <Image
                src={SPACEPORT}
                alt="Picture of Spaceport"
                layout="responsive"
                priority
              />
            )}
            {activeButton === 2 && (
              <Image
                src={CAPSULE}
                alt="Picture of Capsule"
                layout="responsive"
                priority
              />
            )}
          </div>
        </div>

        <ListSelector
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          content={[1, 2, 3]}
          variant="md"
        />

        <div className="flex flex-col justify-start items-center text-center mt-4 mx-1 "></div>
        <div className="flex flex-col justify-between items-center mt-8">
          <h2 className="uppercase text-base text-white opacity-50 font-bellefair mb-2">
            The Terminology
          </h2>
          <h3 className="uppercase text-2xl text-white font-bellefair">
            {activeButton == 0
              ? "Launch Vehicle"
              : activeButton == 1
              ? "SPACEPORT"
              : "SPACE CAPSULE"}
          </h3>
          <h4 className="my-6 mx-4 text-base text-blue font-barlow not-italic">
            {activeButton == 0
              ? `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
              : activeButton == 1
              ? `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
              : `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`}
          </h4>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Technology;
