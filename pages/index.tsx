import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";

const Home = () => {
  const router = useRouter();

  return (
    <div className="background">
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Created by Mike van Peeren" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col text-center">
        <div className="h-20">
          <Header />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="uppercase my-6 text-base text-blue tracking-wider">
            So, you want to travel to
          </h1>
          <h2 className="uppercase text-white text-7xl font-bellefair">
            Space
          </h2>
          <h3 className="my-6 mx-4 text-base text-blue max-w-md explore button">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h3>
        </div>
        <div className="absolute inset-x-0 bottom-40 h-16">
          <button
            className="bg-white m-auto rounded-full w-[150px] h-[150px] font-bellefair text-xl text-black uppercase tracking-wider leading-6 hover:ring-[40px] hover:ring-gray hover:ring-opacity-60 transition ease-in-out duration-500"
            onClick={() => router.push("/destination")}
          >
            Explore
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
