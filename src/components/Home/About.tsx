import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { aboutParagraphs, certifications, hackathons, journey } from "../../data/portfolio";
import { staggerContainer, fadeUp } from "../../utils/animations";
import SectionHeader from "../UI/SectionHeader";

const SubHeading: React.FC<{ children: React.ReactNode; count?: number }> = ({ children, count }) => (
  <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs tracking-widest uppercase text-neutral-500">{children}</span>
    <span className="flex-1 h-px bg-border" />
    {count !== undefined && <span className="font-mono text-xs text-neutral-400">({String(count).padStart(2, "0")})</span>}
  </motion.div>
);

const About: React.FC = () => (
  <section id="about" className="scroll-mt-20 py-20 lg:py-32">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="max-w-7xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        index="04"
        title="About"
        description={aboutParagraphs[0]}
        aside={<p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">{aboutParagraphs[1]}</p>}
      />

      <motion.blockquote
        variants={fadeUp}
        className="font-grotesk font-bold tracking-tight text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.05] max-w-4xl mb-20 lg:mb-28"
      >
        “You don't learn to build by reading about it. <span className="text-neutral-400">You learn by shipping.”</span>
      </motion.blockquote>

      {/* JOURNEY */}
      <SubHeading>Journey</SubHeading>
      <ol className="mb-20 lg:mb-28">
        {journey.map((item) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            className="group grid md:grid-cols-[minmax(280px,360px)_1fr] gap-2 md:gap-24 py-6 border-b border-border"
          >
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-500 pt-2">{item.year}</span>
            <div className="group-hover:translate-x-2 transition-transform duration-500">
              <h3 className="font-grotesk font-bold text-2xl sm:text-3xl tracking-tight">{item.title}</h3>
              <p className="mt-1 text-neutral-600">
                {item.subtitle} · {item.details}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>

      {/* CERTS & HACKATHONS */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
        <div>
          <SubHeading count={certifications.length}>Certifications</SubHeading>
          <ul>
            {certifications.map((c) => (
              <motion.li key={c.name} variants={fadeUp} className="flex items-start gap-4 py-4 border-b border-border">
                <Award size={18} className="mt-0.5 shrink-0 text-neutral-500" />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium">{c.name}</span>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-neutral-500 shrink-0">{c.issuer}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <SubHeading count={hackathons.length}>Hackathons</SubHeading>
          <ul>
            {hackathons.map((h) => (
              <motion.li key={h.name} variants={fadeUp} className="flex items-start gap-4 py-4 border-b border-border">
                <Trophy size={18} className={`mt-0.5 shrink-0 ${h.highlight ? "text-foreground" : "text-neutral-500"}`} />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium">{h.name}</span>
                  <span
                    className={`font-mono text-[11px] tracking-widest uppercase shrink-0 ${
                      h.highlight ? "bg-foreground text-background px-2 py-0.5" : "text-neutral-500"
                    }`}
                  >
                    {h.detail}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
