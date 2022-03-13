import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";

import VEHICLE from "/public/technology/image-launch-vehicle-landscape.jpg";
import VEHICLE_PORTRAIT from "/public/technology/image-launch-vehicle-portrait.jpg";
import CAPSULE from "/public/technology/image-space-capsule-landscape.jpg";
import CAPSULE_PORTRAIT from "/public/technology/image-space-capsule-portrait.jpg";
import SPACEPORT from "/public/technology/image-spaceport-landscape.jpg";
import SPACEPORT_PORTRAIT from "/public/technology/image-spaceport-portrait.jpg";
import ListSelector from "@/components/ListSelector";
import useWindowDimensions from "@/utils/hooks/useWindowDimension";

const Technology = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderPortrait = width && width < 1024;

  return (
    <div className="background--technology">
      <Head>
        <title>Technology</title>
      </Head>
      <main className="flex flex-col min-h-screen text-center relative">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start md:items-start md:ml-9 items-center text-center lg:text-left mt-4 mx-1">
          <h1 className="uppercase my-6 lg:my-20 lg:mx-20 text-base lg:text-2xl text-white tracking-widest">
            <span className="opacity-25 pr-4 font-bold">03</span> Space launch
            101
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center mb-20">
          <div className="mt-3 lg:mt-0 w-full block lg:relative flex items-center">
            <div className="w-full lg:max-w-[500px] block lg:right-0 lg:absolute">
              {activeButton === 0 && (
                <Image
                  src={mounted && !renderPortrait ? VEHICLE_PORTRAIT : VEHICLE}
                  className="fade-in"
                  alt="Picture of Launch Vehicle"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 1 && (
                <Image
                  src={
                    mounted && !renderPortrait ? SPACEPORT_PORTRAIT : SPACEPORT
                  }
                  className="fade-in"
                  alt="Picture of Spaceport"
                  layout="responsive"
                  priority
                />
              )}
              {activeButton === 2 && (
                <Image
                  src={mounted && !renderPortrait ? CAPSULE_PORTRAIT : CAPSULE}
                  className="fade-in"
                  alt="Picture of Capsule"
                  layout="responsive"
                  priority
                />
              )}
            </div>
          </div>

          <div className="mt-10 lg:hidden block">
            <ListSelector
              activeButton={activeButton}
              page="technology"
              setActiveButton={setActiveButton}
              content={[1, 2, 3]}
              variant="md"
            />
          </div>

          <div className="flex flex-col justify-between items-center lg:items-start mt-14 md:mb-8 lg:mt-14 lg:!text-left">
            <h2 className="uppercase text-base text-blue lg:text-2xl font-bellefair mb-2 text-left">
              The Terminology...
            </h2>
            <h3 className="uppercase text-2xl lg:text-6xl text-white font-bellefair">
              {activeButton == 0
                ? "Launch Vehicle"
                : activeButton == 1
                ? "SPACEPORT"
                : "SPACE CAPSULE"}
            </h3>
            <h4 className="my-6 mx-4 lg:mx-0 text-base md:w-2/4 lg:w-3/4 text-blue lg:text-xl font-barlow not-italic">
              {activeButton == 0
                ? `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
                : activeButton == 1
                ? `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
                : `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`}
            </h4>
          </div>
          <div className="mt-10 lg:mt-0 hidden lg:block">
            <ListSelector
              activeButton={activeButton}
              page="technology desktop"
              extraClassNames="flex flex-col justify-around mx-10 mt-0"
              setActiveButton={setActiveButton}
              content={[1, 2, 3]}
              variant="md"
            />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Technology;
