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
    description: "Architected a scalable AI-powered platform utilizing Microservices to estimate and visualize carbon emissions, processing 10,000+ real-time grid intensity data points via RESTful APIs.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://github.com/Swapnil2656/CarboniX",
    image: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bbda48652ad8?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "Orderly",
    description: "Native iOS productivity application using Swift, SwiftUI, and scalable Design Patterns, delivering a seamless offline-first experience with a 50% reduction in app load latency.",
    tech: ["Swift", "SwiftUI", "SpriteKit", "UserDefaults"],
    link: "https://github.com/Swapnil2656/Orderly2.0",
    image: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "ChemCraft",
    description: "Interactive Chemistry Learning Platform featuring a gamified periodic table, boosting student learning retention. Processes over 1,000 interactive query sessions.",
    tech: ["HTML", "CSS", "JavaScript", "REST APIs", "TypeScript", "Three.js"],
    link: "https://github.com/Swapnil2656/Chemcraft",
    image: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "StackIt",
    description: "Scalable MERN stack Q&A platform structured around Microservices, architected to handle seamless collaboration for 1,000+ concurrent requests.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/Swapnil2656",
    image: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "fleet-management-System",
    description: "A fleet management system built with TypeScript to organize and monitor vehicles effectively.",
    tech: ["TypeScript"],
    link: "https://github.com/Swapnil2656/fleet-management-System",
    image: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "Voxify",
    description: "A JavaScript-based application for audio processing or voice-related features.",
    tech: ["JavaScript"],
    link: "https://github.com/Swapnil2656/Voxify",
    image: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "Weather-App",
    description: "A dynamic web application to check real-time weather forecasts across different locations.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Swapnil2656/Weather-App",
    image: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "CamPhish",
    description: "Grab cam shots & GPS location from target's phone front camera or PC webcam just sending a link.",
    tech: ["Shell", "Bash"],
    link: "https://github.com/Swapnil2656/CamPhish",
    image: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "rocketride-server",
    description: "High-performance AI pipeline engine with a C++ core and 50+ Python-extensible nodes. Build, debug, and scale LLM workflows.",
    tech: ["C++", "Python", "TypeScript", "Docker"],
    link: "https://github.com/Swapnil2656/rocketride-server",
    image: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    ],
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
