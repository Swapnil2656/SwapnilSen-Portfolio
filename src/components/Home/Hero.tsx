import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import YourImg from "/assets/retouch_2026071723312479.png";
import CVPDF from "/assets/Swapnil_Sen_Resume_tex.pdf";
import { SocialLink } from "../../utils/constants";
import {
  staggerContainerSlow,
  fadeUp,
  fadeUpSlow,
  scaleReveal,
} from "../../utils/animations";

/* ===================== COMPONENT ===================== */

const Hero: React.FC = () => {
  const socials: SocialLink[] = [
    { href: "https://github.com/Swapnil2656", icon: <Github size={18} /> },
    { href: "https://www.linkedin.com/in/swapnil-sen-812030309/", icon: <Linkedin size={18} /> },
    { href: "mailto:swapnilsen2656@gmail.com", icon: <Mail size={18} /> },
  ];

  return (
    <section className="relative mb-10 sm:mb-0 sm:h-[96vh] overflow-hidden">
      <div className="xl:max-w-7xl mx-auto px-4 sm:px-6 w-full h-full">
        <div className="flex gap-20 h-full lg:items-center">

          {/* RIGHT — TEXT */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="show"
            className="w-full max-w-2xl z-10 relative ml-auto"
          >
            {/* Code-comment label — from reference portfolio */}
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs tracking-widest text-neutral-500 mb-5"
            >
              /* Initializing profile... */
            </motion.p>

            <motion.h1
              variants={fadeUpSlow}
              className="
                text-[clamp(3rem,9vw,7rem)]
                font-grotesk
                font-bold
                leading-[0.92]
                tracking-tight
                uppercase
                mb-6 md:mb-8
              "
            >
              Swapnil Sen
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="sm:max-w-sm lg:max-w-xl font-mono text-xs sm:text-sm tracking-widest text-neutral-500 mb-5 uppercase"
            >
              Software Engineer · AI & ML · Full Stack
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="sm:max-w-sm md:max-w-md lg:max-w-xl text-base lg:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8"
            >
              I am a Computer Science student with a specialization in AI & ML, focused strictly on full-stack development, real-world execution, and scalable system design — backed by a certified IT Specialist foundation. Rather than relying solely on tutorials and theory, my drive is to design and ship real, working software.
            </motion.p>

            {/* STATUS BADGE — reference style */}
            <motion.div variants={fadeUp} className="mb-6 md:mb-8">
              <div
                className="
                  inline-flex items-center gap-3
                  border border-border
                  px-4 py-2
                  font-mono text-xs tracking-widest uppercase
                "
              >
                <span className="text-neutral-500">STATUS:</span>
                <span style={{ color: "var(--color-accent-green)" }}>
                  ACTIVE / BUILDING
                </span>
              </div>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeUp}
              className="mb-6 md:mb-8 gap-10 flex justify-center sm:justify-start text-neutral-800 text-center"
            >
              <div>
                <p className="text-3xl sm:text-5xl font-grotesk font-bold leading-none">15+</p>
                <p className="mt-1 text-xs tracking-widest text-neutral-500 uppercase font-mono">Projects</p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl font-grotesk font-bold leading-none">4+</p>
                <p className="mt-1 text-xs tracking-widest text-neutral-500 uppercase font-mono">Hackathons</p>
              </div>
            </motion.div>

            {/* CTA BUTTONS — sharp rectangular, reference style */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  px-8 py-3.5
                  bg-foreground text-background
                  font-mono text-xs tracking-widest uppercase
                  border border-foreground
                  hover:bg-neutral-800
                  transition-colors
                  hover:cursor-pointer
                "
              >
                ◎ Establish Connection
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href={CVPDF}
                download
                className="
                  px-8 py-3.5
                  border border-neutral-400
                  font-mono text-xs tracking-widest uppercase
                  hover:bg-neutral-200
                  transition-colors
                  text-center
                "
              >
                ↓ Download CV
              </motion.a>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center sm:justify-start items-center gap-6 mt-8"
            >
              {socials.map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-foreground transition-colors"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* FLOATING HERO IMAGE */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            animate="show"
            className="
              hidden
              sm:block
              absolute
              sm:-left-[10%]
              md:left-4
              lg:left-[5%]
              xl:left-[8%]
              top-0
              h-full
              z-0
            "
          >
            <div className="h-full flex items-center">
              <img
                src={YourImg}
                alt="Swapnil Sen"
                loading="lazy"
                className="
                  h-[90%]
                  w-auto
                  object-contain
                  grayscale
                  transition-all
                  duration-700
                  hover:grayscale-0
                  hover:scale-[1.02]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
