import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import { staggerContainer, fadeUp } from "../../utils/animations";
import SectionHeader from "../UI/SectionHeader";

const Skills: React.FC = () => (
  <section id="skills" className="scroll-mt-20 py-20 lg:py-32">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        index="03"
        title="Skills"
        description="The technologies I use to build fast, reliable and scalable systems — from interfaces to infrastructure."
      />

      <div className="border-t border-border">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="grid md:grid-cols-[minmax(280px,360px)_1fr] gap-4 md:gap-24 py-7 border-b border-border"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-grotesk font-bold uppercase tracking-tight text-xl sm:text-2xl">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="font-mono text-sm border border-border px-3 py-1.5 hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
