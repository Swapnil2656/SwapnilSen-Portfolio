import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import { projectItem } from "../utils/constants";
import Certifications from "../components/Home/Certifications";

const projects: projectItem[] = [
  {
    title: "CarboniX",
    description: "**CarboniX - Postman for Sustainability APIs**\\nA mobile-first developer tool that tells you the carbon cost of your cloud infrastructure and exposes it as an open API. It calculates precise cloud instance CO₂ outputs using real grid intensity data, compares regions, and offers actionable optimizations (e.g., 'Switching from us-east-1 to eu-north-1 reduces emissions by 98%'). Features include an SDK abstraction (`npm install carbonix`), a touch-optimized mobile console to visualize API requests, real-time carbon calculation mapped to geographical grids, and a recommendation engine to optimize multi-region deployments.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://github.com/Swapnil2656/CarboniX",
    image: [],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "Orderly",
    description: "**Orderly - Native iOS Productivity App**\\nA native iOS productivity application built using Swift, SwiftUI, and scalable Design Patterns. Orderly delivers a seamless offline-first experience, engineered with a 50% reduction in app load latency. It utilizes local caching through UserDefaults and fluid interactive UI rendering using SpriteKit to significantly enhance workflow efficiency and provide a robust task management experience.",
    tech: ["Swift", "SwiftUI", "SpriteKit", "UserDefaults"],
    link: "https://github.com/Swapnil2656/Orderly2.0",
    image: [],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "ChemCraft",
    description: "**ChemCraft - Interactive Chemistry Learning Platform**\\nA modern, interactive web application built with Next.js, TypeScript, and Tailwind CSS designed to make chemistry learning fun and engaging. It features a complete interactive periodic table, a real-time element mixer to simulate chemical reactions and compound formation, and an adaptive quiz system. It utilizes Zustand for state management and Framer Motion for smooth, accessible transitions, providing students with an immersive educational experience.",
    tech: ["HTML", "CSS", "JavaScript", "REST APIs", "TypeScript", "Three.js"],
    link: "https://github.com/Swapnil2656/Chemcraft",
    image: [],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "StackIt",
    description: "**StackIt - Scalable Developer Q&A Platform**\\nA highly scalable MERN stack (MongoDB, Express.js, React, Node.js) Q&A platform engineered specifically around a Microservices architecture. It provides a robust, responsive environment for developers to collaborate, architected to handle over 1,000 concurrent requests seamlessly. The platform features an intuitive interface styled with Tailwind CSS, real-time updates, and an optimized backend designed for high availability and low latency.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/Swapnil2656",
    image: [],
    status: "completed",
    projectType: "personal",
  }
];

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects projects={projects} />
      <Certifications />
      <Skills />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
