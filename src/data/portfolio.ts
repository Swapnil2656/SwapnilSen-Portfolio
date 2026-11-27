/* =========================================================
   SINGLE SOURCE OF TRUTH FOR SITE CONTENT
   Edit this file to update text, projects, skills, etc.
   ========================================================= */

export const SITE_URL = "https://swapnilsen.in";

export const profile = {
  name: "Swapnil Sen",
  role: "Software Engineer",
  tagline: "Software Engineer · AI & ML · Full Stack",
  location: "Vadodara, India",
  timezone: "Asia/Kolkata",
  email: "swapnilsen2656@gmail.com",
  resume: "/assets/Swapnil_Sen_Resume_tex.pdf",
  heroImage: {
    small: "/assets/swapnil-900.webp",
    large: "/assets/swapnil-1600.webp",
  },
  bio:
    "Computer Science student specialising in AI & ML. I design and ship real, working software — full-stack web apps, native iOS, and developer tools — with a focus on scalable systems and clean execution.",
  available: true,
  availabilityText: "Active / Building",
};

export const socials = {
  github: "https://github.com/Swapnil2656",
  linkedin: "https://www.linkedin.com/in/swapnil-sen-812030309/",
  whatsapp: "https://wa.me/918770854635?text=Hello%20Swapnil",
  email: `mailto:${profile.email}`,
};

export const stats = [
  { value: "15+", label: "Projects" },
  { value: "4+", label: "Hackathons" },
  { value: "4", label: "Certifications" },
];

/* ---------------------------- PROJECTS ---------------------------- */

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  /** Screenshots in /public/assets/projects/... — add them to show a gallery. */
  images?: string[];
  status: "completed" | "in-progress";
  type: "personal" | "client" | "hackathon";
};

export const projects: Project[] = [
  {
    slug: "carbonix",
    title: "CarboniX",
    tagline: "Postman for sustainability APIs",
    year: "2026",
    role: "Full-stack developer",
    category: "Developer tool",
    summary:
      "A mobile-first developer tool that tells you the carbon cost of your cloud infrastructure and exposes it as an open API.",
    problem:
      "Teams pick cloud regions and instance types on price and latency alone. The carbon cost of those choices is invisible, and there is no developer-friendly way to measure or compare it.",
    solution:
      "CarboniX calculates precise CO₂ output for cloud instances using real grid-intensity data, compares regions side by side, and surfaces actionable optimisations — e.g. “Switching from us-east-1 to eu-north-1 reduces emissions by 98%”.",
    features: [
      "SDK abstraction — npm install carbonix",
      "Touch-optimised mobile console to visualise API requests",
      "Real-time carbon calculation mapped to geographical grids",
      "Recommendation engine for multi-region deployments",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "Turborepo", "Tailwind CSS"],
    github: "https://github.com/Swapnil2656/CarboniX",
    live: "https://carbonix-web.vercel.app",
    status: "completed",
    type: "personal",
  },
  {
    slug: "orderly",
    title: "Orderly",
    tagline: "Native iOS productivity app",
    year: "2025",
    role: "iOS developer",
    category: "Mobile app",
    summary:
      "A native iOS productivity app built with Swift and SwiftUI, delivering a seamless offline-first task-management experience.",
    problem:
      "Most to-do apps are slow to open and depend on a network connection, which breaks the quick-capture flow that productivity apps live or die by.",
    solution:
      "Orderly is offline-first: data is cached locally with UserDefaults, the UI is rendered natively in SwiftUI, and interactive elements use SpriteKit — cutting app load latency by 50%.",
    features: [
      "Offline-first architecture with local caching",
      "50% reduction in app load latency",
      "Fluid, interactive UI rendering with SpriteKit",
      "Scalable design patterns for maintainable growth",
    ],
    tech: ["Swift", "SwiftUI", "SpriteKit", "UserDefaults"],
    github: "https://github.com/Swapnil2656/Orderly2.0",
    status: "completed",
    type: "personal",
  },
  {
    slug: "chemcraft",
    title: "ChemCraft",
    tagline: "Interactive chemistry learning platform",
    year: "2025",
    role: "Full-stack developer",
    category: "EdTech",
    summary:
      "A modern, interactive web app that makes chemistry learning fun — with a 3D periodic table, an element mixer and adaptive quizzes.",
    problem:
      "Chemistry is usually taught through static diagrams and memorisation, which makes abstract ideas like bonding and compound formation hard to grasp.",
    solution:
      "ChemCraft turns those ideas into something students can play with: a complete interactive periodic table, a real-time element mixer that simulates reactions and compound formation, and a quiz system that adapts to the learner.",
    features: [
      "Complete interactive periodic table",
      "Real-time element mixer simulating reactions",
      "Adaptive quiz system",
      "3D visuals with Three.js / React Three Fiber",
    ],
    tech: ["Next.js", "TypeScript", "Three.js", "Zustand", "Tailwind CSS", "Clerk"],
    github: "https://github.com/Swapnil2656/Chemcraft",
    live: "https://chemcraft-ten.vercel.app",
    status: "completed",
    type: "personal",
  },
  {
    slug: "stackit",
    title: "StackIt",
    tagline: "Scalable developer Q&A platform",
    year: "2025",
    role: "Full-stack developer",
    category: "Web platform",
    summary:
      "A MERN-stack Q&A platform for developers, architected around microservices for high availability and low latency.",
    problem:
      "Developer Q&A communities need to stay fast and available under bursty traffic, which a single monolithic server struggles with.",
    solution:
      "StackIt splits the backend into microservices on Node.js and Express with MongoDB, designed to handle 1,000+ concurrent requests, with a responsive React + Tailwind front end and real-time updates.",
    features: [
      "Microservices architecture",
      "Designed for 1,000+ concurrent requests",
      "Real-time updates",
      "Responsive interface built with Tailwind CSS",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "completed",
    type: "personal",
  },
];

/* ---------------------------- SERVICES ---------------------------- */

export const services = [
  {
    title: "Full-Stack Web Development",
    description: "Production-ready web apps with React, Next.js and Node — from database schema to polished UI.",
  },
  {
    title: "Native iOS Development",
    description: "Fast, offline-first iPhone apps built natively with Swift and SwiftUI.",
  },
  {
    title: "AI & ML Solutions",
    description: "Integrating models and LLMs into real products — pipelines, agents and data-driven features.",
  },
  {
    title: "Backend & APIs",
    description: "REST APIs and services designed for reliability, clear contracts and room to scale.",
  },
  {
    title: "Database Design",
    description: "Relational and document data modelling with MySQL and MongoDB.",
  },
  {
    title: "Scraping & Automation",
    description: "Scripts and bots that collect data and remove repetitive manual work.",
  },
];

/* ----------------------------- SKILLS ----------------------------- */

export const skillGroups = [
  { title: "Languages", skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "Swift"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "SwiftUI", "HTML / CSS"] },
  { title: "Backend & Data", skills: ["Node.js", "Express.js", "FastAPI", "MySQL", "MongoDB", "SQL"] },
  { title: "Tools & Infra", skills: ["Docker", "Git & GitHub", "AWS", "Vercel", "Web Scraping"] },
];

/* ------------------------------ ABOUT ----------------------------- */

export const aboutParagraphs = [
  "I am a Computer Science student with a specialisation in AI & ML, focused on full-stack development, real-world execution and scalable system design — backed by a certified IT Specialist foundation. Rather than relying on tutorials and theory, my drive is to design and ship real, working software.",
  "My technical focus spans React Native, Next.js, FastAPI and MongoDB. I've shipped 8+ full-stack projects across hackathons — most recently CarboniX, a multi-agent carbon-intelligence platform for cloud infrastructure, and Cafe POS, a full-stack restaurant system with live kitchen displays and real-time table management. Alongside that I'm sharpening my fundamentals in DSA (Java / Python) and system design.",
];

export const journey = [
  {
    year: "2024 — 2028",
    title: "Parul Institute of Engineering & Technology",
    subtitle: "B.Tech, Computer Science Engineering (AI & ML)",
    details: "Vadodara, Gujarat.",
  },
  {
    year: "2022 — 2024",
    title: "Holy Cross Convent Sr. Sec.",
    subtitle: "Senior Secondary (PCM)",
    details: "Ambikapur, Chhattisgarh.",
  },
];

/* ---------------------- CERTS & HACKATHONS ------------------------ */

export const certifications = [
  { name: "AWS Academy Graduate — Data Engineering", issuer: "AWS Academy" },
  { name: "Computer Networks and Internet Protocol", issuer: "NPTEL" },
  { name: "Python Programming", issuer: "IBM Skills Network" },
  { name: "GenAI Job Simulation", issuer: "Tata Group" },
];

export const hackathons = [
  { name: "DevBhoomi Uttarakhand 2024", detail: "Third Prize Winner", highlight: true },
  { name: "Vadodara Hackathon 6.0 (SIH)", detail: "Participant" },
  { name: "Odoo Hackathon 2025 & 2026", detail: "Participant" },
  { name: "HackerHazards 2025", detail: "Participant" },
  { name: "Google Solution Challenge 2025", detail: "AI-driven solution for real-world challenges" },
];
