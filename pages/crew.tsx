import Head from "next/head";

import Header from "../components/Header";

import Image from "next/image";

import DOUGLAS from "../public/crew/image-douglas-hurley.webp";

const Crew = () => {
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
          <h1 className="uppercase my-6 text-white">
            <span className="opacity-25 pr-4">02</span> Meet your crew
          </h1>
          <div className="flex flex-col justify-between items-center mt-8 border-b border-dark-gray w-5/6">
            <div className="w-2/4">
              <Image
                src={DOUGLAS}
                alt="Picture of the author"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Crew;
