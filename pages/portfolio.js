import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Nisi esse laboris eiusmod mollit nulla dolore Lorem duis est
              incididunt nulla eu veniam. Pariatur adipisicing cillum
              reprehenderit proident mollit ad. Veniam mollit in ipsum sint
              veniam ea mollit Lorem consectetur laborum dolor. Nisi sit
              exercitation labore cupidatat Lorem non do. lorem
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/porto-1.png" className="portfolio-image" />

                <h4 className="portfolio-name">Salad App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="/porto-2.png" className="portfolio-image" />

                <h4 className="portfolio-name">VPN App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
