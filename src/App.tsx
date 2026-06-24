import SEO from "./components/SEO";
import Navbar from "./components/layout/Navbar";
import ScrollTop from "./components/layout/ScrollTop";
import Hero from "./components/app/Hero";
import About from "./components/app/About";
import FunFacts from "./components/app/FunFacts";
import Skills from "./components/app/Skills";
import Projects from "./components/app/Projects";
import Timeline from "./components/app/Timeline";
import Testimonials from "./components/app/Testimonials";
import Contact from "./components/app/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
    <>
      <SEO
          title="Denis Firdaus Portfolio"
          description="Frontend Developer Portfolio"
        />

        <Navbar />

        ...
      </>
      <Navbar />
      <ScrollTop />
      <Hero />
      <About />
      <FunFacts />
      <Skills />
      <Projects />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}