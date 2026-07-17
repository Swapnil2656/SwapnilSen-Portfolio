import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code,
  Braces,
  Database,
  Server,
  Globe,
  Github,
  Layers,
} from "lucide-react";
import { staggerContainer, fadeUp } from "../../utils/animations";

export interface TechStackItem {
  name: string;
  icon: React.ReactNode;
}

/* ── SKILL CATEGORIES — reference-style proficiency cards ── */
const skillCategories = [
  {
    title: "Languages",
    proficiency: 88,
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "Swift"],
  },
  {
    title: "Frontend & Frameworks",
    proficiency: 85,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & Databases",
    proficiency: 82,
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Tools & Infrastructure",
    proficiency: 78,
    skills: ["Docker", "Git & GitHub", "Web Scraping"],
  },
];

/* ── TECH ICONS (kept for potential use) ── */
export const techStack: TechStackItem[] = [
  { name: "Python", icon: <Code /> },
  { name: "Java", icon: <Code /> },
  { name: "C", icon: <Code /> },
  { name: "JavaScript", icon: <Code /> },
  { name: "TypeScript", icon: <Braces /> },
  { name: "Swift", icon: <Code /> },
  { name: "React.js", icon: <Layers /> },
  { name: "Next.js", icon: <Layers /> },
  { name: "Tailwind CSS", icon: <Braces /> },
  { name: "HTML/CSS", icon: <Globe /> },
  { name: "MySQL", icon: <Database /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "SQL", icon: <Database /> },
  { name: "Docker", icon: <Server /> },
  { name: "Git & GitHub", icon: <Github /> },
  { name: "Web Scraping", icon: <Globe /> },
];

/* ------------------------------ Animations ------------------------------ */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-28 scroll-mt-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* ── TWO-COLUMN EDITORIAL HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16">
          {/* LEFT: Numbered label */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-[clamp(1rem,2vw,1.2rem)] text-neutral-400 leading-none mb-1">03.</p>
            <h2 className="font-grotesk font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase text-foreground">
              SKILLS
            </h2>
          </motion.div>

          {/* RIGHT: Sub-heading */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              A curated set of technologies I use to build fast, reliable, and scalable systems — from frontend interfaces to backend infrastructure.
            </p>
          </motion.div>
        </div>

        {/* ── PROFICIENCY CARDS — reference style ── */}
        <motion.div
          variants={sectionVariants}
          className="space-y-4"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-border p-6 sm:p-8 hover:border-foreground/30 transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-center mb-4 pb-4 border-b border-border">
                <h3 className="font-grotesk font-bold text-sm sm:text-base tracking-widest uppercase text-foreground">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List — reference style with underlines */}
              <div className="flex flex-wrap gap-8 mt-4">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="font-mono text-sm text-foreground lowercase">
                    {skill.toLowerCase()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
