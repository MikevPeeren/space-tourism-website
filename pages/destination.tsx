import Head from "next/head";

import Header from "../components/Header";

const Destination = () => {
  return (
    <div className="background">
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Created by Mike van Peeren" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col min-h-screen text-center">
        <div className="h-20">
          <Header />
        </div>

        <div className="flex flex-col justify-start items-center min-h-screen text-center mt-10 mx-1"></div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Destination;
