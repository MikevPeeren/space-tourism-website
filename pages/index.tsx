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
      <main>
        <Header />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
