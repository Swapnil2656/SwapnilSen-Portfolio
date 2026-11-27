import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import { useDocumentMeta } from "../utils/useDocumentMeta";

const Home: React.FC = () => {
  useDocumentMeta();
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Home;
