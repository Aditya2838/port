import Head from "next/head";
import Navbar from "../components/navbar";
import { BackToTop } from "../components/btt";
import Main from "../components/main";
import Footer from "../components/footer";
import About from "../components/section/about";
import Projects from "../components/section/projects";
import Contact from "../components/section/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Kaveti Aditya</title>
        <meta name="description" content="Portfolio of Kaveti Aditya - MERN & Java Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BackToTop />

      <svg width="0" height="0">
        <linearGradient id="instagram-gradient" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </svg>

      <div className="w-full pb-12 antialiased">
        <div className="mx-auto">
          <Navbar />
          <main>
            <Main />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
