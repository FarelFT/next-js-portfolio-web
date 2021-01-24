import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              Nisi esse laboris eiusmod mollit nulla dolore Lorem duis est
              incididunt nulla eu veniam. Pariatur adipisicing cillum
              reprehenderit proident mollit ad. Veniam mollit in ipsum sint
              veniam ea mollit Lorem consectetur laborum dolor. Nisi sit
              exercitation labore cupidatat Lorem non do. lorem
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
