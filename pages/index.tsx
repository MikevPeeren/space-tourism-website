import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";

const Home = () => {
  const router = useRouter();

  return (
    <div className="background !h-full">
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Created by Mike van Peeren" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col text-center lg:text-left h-full min-h-screen">
        <div className="h-20">
          <Header />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:min-h-full min-h-screen">
          <div className="flex flex-col items-center lg:items-start md:mt-10 lg:mt-0">
            <h1 className="uppercase my-6 text-base lg:text-xl text-blue tracking-wider lg:tracking-widest">
              So, you want to travel to
            </h1>
            <h2 className="uppercase text-white text-7xl md:text-8xl lg:text-9xl font-bellefair">
              Space
            </h2>
            <h3 className="my-6 mx-4 lg:mx-0 text-base lg:text-lg text-blue max-w-md explore button font-barlow lg:tracking-widest">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </h3>
          </div>
          <div className=" lg:static inset-x-0 bottom-40 lg:bottom-0 h-16 lg:h-auto">
            <button
              className="relative bg-white m-auto rounded-full w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] font-bellefair text-xl text-black uppercase tracking-wider leading-6 hover:ring-[40px] hover:ring-gray hover:ring-opacity-60 transition ease-in-out duration-500 bottom-0 mt-10"
              onClick={() => router.push("/destination")}
            >
              Explore
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
