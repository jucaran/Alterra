import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alterra - Productos Sustentables</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Grandstander:wght@300&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Fredoka One', Verdana, sans-serif;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-weight: normal;
        }

        h1 {
          font-size: 3.5rem;
        }

        p {
          font-family: 'Grandstander', cursive;
        }
      `}</style>
    </div>
  );
}
