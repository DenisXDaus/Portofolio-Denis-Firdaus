import { useEffect } from "react";
import SEO from "./components/SEO";
import Navbar from "./components/layout/Navbar";
import ScrollTop from "./components/layout/ScrollTop";
import Hero from "./components/app/Hero";
import About from "./components/app/About";
import Skills from "./components/app/Skills";
import Projects from "./components/app/Projects";
import Timeline from "./components/app/Timeline";
import Contact from "./components/app/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const textElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#root h1, #root h2, #root h3, #root h4, #root h5, #root h6, #root p, #root a, #root button, #root li, #root label, #root span, #root strong, #root em, #root small, #root time",
      ),
    ).filter((element) =>
      Array.from(element.childNodes).some(
        (node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()),
      ),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("text-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
    );

    textElements.forEach((element) => {
      element.classList.add("text-reveal");
      observer.observe(element);
    });

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("#root h1, #root h2, #root h3, #root h4, #root h5, #root h6"),
    );
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("terminal-heading-visible");
          headingObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -24px 0px" },
    );

    headings.forEach((heading) => {
      const text = heading.textContent?.trim() ?? "";
      heading.dataset.glitchText = text;
      heading.style.setProperty("--heading-steps", String(Math.max(text.length, 1)));
      heading.style.setProperty(
        "--heading-duration",
        `${Math.min(Math.max(text.length * 0.035, 0.65), 1.6)}s`,
      );
      headingObserver.observe(heading);
    });

    return () => {
      observer.disconnect();
      headingObserver.disconnect();
      textElements.forEach((element) => {
        element.classList.remove("text-reveal", "text-revealed");
      });
      headings.forEach((heading) => {
        heading.classList.remove("terminal-heading-visible");
        delete heading.dataset.glitchText;
        heading.style.removeProperty("--heading-steps");
        heading.style.removeProperty("--heading-duration");
      });
    };
  }, []);

  return (
    <>
      <SEO
        title="Denis Firdaus — Frontend Developer"
        description="Portofolio Denis Firdaus, frontend developer yang membangun pengalaman web dengan React, TypeScript, dan teknologi modern."
        url="https://portofolio-denis-firdaus.vercel.app/"
      />
      <Navbar />
      <ScrollTop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
