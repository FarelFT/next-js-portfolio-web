import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Nisi esse laboris eiusmod mollit nulla dolore Lorem duis est
              incididunt nulla eu veniam. Pariatur adipisicing cillum
              reprehenderit proident mollit ad. Veniam mollit in ipsum sint
              veniam ea mollit Lorem consectetur laborum dolor. Nisi sit
              exercitation labore cupidatat Lorem non do. lorem
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: farelft02@gmail.com</li>
              <li className="contact-item">Phone: +6321321321312</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
