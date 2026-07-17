import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Trophy } from "lucide-react";

/* ===================== Types ===================== */

interface Certification {
  name: string;
  issuer: string;
}

interface Hackathon {
  name: string;
  detail: string;
}

/* ===================== Data ===================== */

const certifications: Certification[] = [
  {
    name: "AWS Academy Graduate – Data Engineering Badge",
    issuer: "AWS Academy",
  },
  {
    name: "Computer Networks and Internet Protocol",
    issuer: "NPTEL",
  },
  {
    name: "Python Programming Certification",
    issuer: "IBM Skills Network",
  },
  {
    name: "GenAI Job Simulation",
    issuer: "Tata Group",
  },
];

const hackathons: Hackathon[] = [
  {
    name: "DevBhoomi Uttarakhand 2024",
    detail: "Third Prize Winner",
  },
  {
    name: "Vadodara Hackathon 6.0 (SIH)",
    detail: "Participant",
  },
  {
    name: "Odoo Hackathon (2025, 2026)",
    detail: "Participant",
  },
  {
    name: "HackerHazards 2025",
    detail: "Participant",
  },
  {
    name: "Google Solution Challenge 2025",
    detail: "AI-driven solution addressing real-world challenges",
  },
];

/* ===================== Animations ===================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

/* ===================== Component ===================== */

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="scroll-mt-14 py-8 lg:py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-10 lg:mb-15 px-4 sm:px-6">
          <h2 className="text-[clamp(3.2rem,7vw,5.5rem)] font-black leading-[1.1] tracking-tight">
            Certifications
            <br />
            <span className="font-light text-muted-foreground">
              & Hackathons
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Continuous learning and competitive programming, showcasing problem-solving abilities and domain expertise.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div variants={stagger} className="px-2 sm:px-6">
          <motion.div
            variants={fadeUp}
            className="bg-foreground rounded-2xl text-background shadow-xl"
          >
            <div
              className="
                grid grid-cols-1 gap-10 px-4 py-8 sm:px-6 sm:py-12
                lg:grid-cols-[1fr_1fr]
              "
            >
              {/* Left - Certifications */}
              <motion.div variants={stagger} className="space-y-7">
                <h3 className="text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-tight">
                  Certifications
                </h3>
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    variants={fadeUp}
                    className="
                      flex flex-col gap-2
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Award size={18} />
                      <span className="font-semibold text-base break-words">
                        {cert.name}
                      </span>
                    </div>
                    <p className="ml-7 text-sm leading-relaxed text-background/80">
                      {cert.issuer}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right - Hackathons */}
              <motion.div variants={stagger} className="space-y-7">
                 <h3 className="text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-tight">
                  Hackathons
                </h3>
                {hackathons.map((hackathon) => (
                  <motion.div
                    key={hackathon.name}
                    variants={fadeUp}
                    className="
                      flex flex-col gap-2
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Trophy size={18} />
                      <span className="font-semibold text-base break-words">
                        {hackathon.name}
                      </span>
                    </div>

                    <p className="ml-7 text-sm leading-relaxed text-background/80">
                      {hackathon.detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
