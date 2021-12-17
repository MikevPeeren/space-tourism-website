import Head from "next/head";

import Header from "../components/Header";

const Home = () => {
  return (
    <div className="background">
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Created by Mike van Peeren" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col min-h-screen text-white text-center">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start items-center min-h-screen text-white text-center my-10 mx-1">
          <h1 className="uppercase my-6">So, you want to travel to</h1>
          <h2 className="uppercase">Space</h2>
          <h3 className="my-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h3>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
