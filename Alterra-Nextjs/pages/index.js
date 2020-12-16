import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alterra - Productos Sustentables</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
