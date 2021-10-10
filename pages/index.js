import Head from "next/head";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Trinkerr</title>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

      </Head>
      <div className="page-wrapper">
        <Header />
        <MainContent />
      </div>
      <Footer />
    </>
  );
};

export default Home;
