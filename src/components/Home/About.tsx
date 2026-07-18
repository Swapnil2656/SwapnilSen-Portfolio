import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import {
  staggerContainer,
  staggerContainerSlow,
  fadeUp,
  EASE_PREMIUM,
} from "../../utils/animations";

/* ===================== DATA ===================== */

const journeyItems = [
  {
    year: "2024 - 2028",
    title: "Parul Institute of Engineering",
    details:
      "Pursuing B.Tech in Computer Science Engineering (AI & ML) in Vadodara, Gujarat.",
  },
  {
    year: "2022 - 2024",
    title: "Holy Cross Convent Sr. Sec.",
    details:
      "Completed Senior Secondary education (PCM) in Ambikapur, Chhattisgarh.",
  },
];

/* ===================== COMPONENT ===================== */

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isDesktop = () => window.innerWidth >= 1024;
  const toggleItem = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="about" className="py-16 lg:py-28 scroll-mt-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* ── TWO-COLUMN EDITORIAL HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16 lg:mb-24">
          {/* LEFT: Numbered section label */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-[clamp(1rem,2vw,1.2rem)] text-neutral-400 leading-none mb-1">04.</p>
            <h2 className="font-grotesk font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase text-foreground">
              ABOUT
            </h2>
          </motion.div>

          {/* RIGHT: Description paragraphs */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center gap-5">
            <p className="text-base sm:text-lg leading-[1.9] text-neutral-700">
              I am a Computer Science student with a specialization in AI & ML, focused strictly on full-stack development, real-world execution, and scalable system design — backed by a certified IT Specialist foundation. Rather than relying solely on tutorials and theory, my drive is to design and ship real, working software.
            </p>
            <p className="text-base sm:text-lg leading-[1.9] text-neutral-700">
              Currently, my technical focus spans React Native, Next.js, FastAPI, and MongoDB. I've shipped 8+ full-stack projects across hackathons — most recently Carbonix, a multi-agent carbon-intelligence platform for cloud infrastructure, and Cafe POS, a full-stack restaurant system with live kitchen displays and real-time table management. Alongside shipping these products, I'm sharpening my fundamentals in DSA (Java/Python) and system design, with a growing focus on scalable backend architecture.
            </p>
            {/* Quote block — reference style */}
            <div className="border border-border p-5 mt-2">
              <p className="font-mono text-sm italic text-neutral-500 leading-relaxed">
                "You don't learn to build by reading about it. You learn by shipping."
              </p>
            </div>
          </motion.div>
        </div>

        {/* JOURNEY */}
        <motion.div variants={staggerContainerSlow}>
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">Journey</span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="space-y-10 md:space-y-14 lg:space-y-20">
            {journeyItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  onHoverStart={() => isDesktop() && setActiveIndex(idx)}
                  onHoverEnd={() => isDesktop() && setActiveIndex(null)}
                  className="relative"
                >
                  <motion.div
                    onClick={() => !isDesktop() && toggleItem(idx)}
                    whileHover={isDesktop() ? { x: 8 } : undefined}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="cursor-pointer py-2 sm:py-3 lg:py-4"
                  >
                    {/* MOBILE */}
                    <div className="lg:hidden space-y-2">
                      <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                        {item.year}
                      </span>
                      <div className="flex items-center justify-between gap-6 mt-2">
                        <h4 className="font-grotesk font-bold text-xl sm:text-3xl leading-tight tracking-tight text-foreground">
                          {item.title}
                        </h4>
                        <motion.span
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ type: "spring", stiffness: 360, damping: 22 }}
                          className="text-neutral-500"
                        >
                          <Plus size={24} />
                        </motion.span>
                      </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex items-center justify-between gap-10">
                      <div className="flex items-center gap-10">
                        <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase w-20">
                          {item.year}
                        </span>
                        <h4 className="font-grotesk font-bold text-[clamp(1.9rem,3vw,2.5rem)] leading-tight tracking-tight text-foreground max-w-3xl">
                          {item.title}
                        </h4>
                      </div>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 360, damping: 22 }}
                        className="text-neutral-500"
                      >
                        <Plus size={26} />
                      </motion.span>
                    </div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.5, ease: EASE_PREMIUM },
                            opacity: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.3 } }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 max-w-3xl text-neutral-600 text-base sm:text-lg leading-[1.85] font-mono">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 lg:mt-8 h-px bg-border" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
