import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, socials, stats, skillGroups } from "../../data/portfolio";
import { staggerContainerSlow, fadeUp, fadeUpSlow, scaleReveal } from "../../utils/animations";

const marqueeItems = skillGroups.flatMap((g) => g.skills);

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 min-h-[calc(100svh-5rem)] grid lg:grid-cols-[1fr_minmax(0,1.25fr)] gap-8 items-center py-10">
        {/* PHOTO */}
        <motion.div
          variants={scaleReveal}
          initial="hidden"
          animate="show"
          className="relative hidden sm:flex justify-center lg:justify-start order-2 lg:order-1 h-[52vh] lg:h-[82vh]"
        >
          <img
            src={profile.heroImage.small}
            srcSet={`${profile.heroImage.small} 403w, ${profile.heroImage.large} 716w`}
            sizes="(min-width: 640px) 40vw, 0px"
            alt="Portrait of Swapnil Sen"
            width={403}
            height={900}
            {...{ fetchpriority: "high" } /* React 18 needs the lowercase DOM attribute */}
            decoding="async"
            className="h-full w-auto object-contain grayscale hover:grayscale-0 transition-[filter] duration-700"
          />
          {/* Spec tag */}
          <div className="absolute bottom-6 right-0 lg:right-4 bg-background/90 backdrop-blur border border-foreground px-4 py-3 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
            <p className="text-neutral-500">Based in</p>
            <p>{profile.location}</p>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-2 z-10"
        >
          <motion.p variants={fadeUp} className="font-mono text-xs tracking-widest text-neutral-500 mb-5">
            /* Initializing profile<span className="animate-blink">_</span> */
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={fadeUpSlow}
            className="font-grotesk font-bold uppercase leading-[0.88] tracking-tighter text-[clamp(3.5rem,10vw,8.5rem)] mb-6"
          >
            Swapnil
            <br />
            Sen<span className="text-neutral-400">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-mono text-xs sm:text-sm tracking-widest text-neutral-500 uppercase mb-6"
          >
            {profile.tagline}
          </motion.p>

          <motion.p variants={fadeUp} className="max-w-xl text-base lg:text-lg text-neutral-600 leading-relaxed mb-8">
            {profile.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-3 border border-border px-4 py-2 font-mono text-xs tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="text-neutral-500">Status:</span>
              <span className="text-accent-green">{profile.availabilityText}</span>
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background font-mono text-xs tracking-widest uppercase border border-foreground hover:bg-neutral-800 transition-colors"
            >
              View my work
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-400 font-mono text-xs tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
            >
              <Download size={14} /> Download CV
            </a>
          </motion.div>

          <motion.dl variants={fadeUp} className="grid grid-cols-3 max-w-lg border-t border-border">
            {stats.map((s) => (
              <div key={s.label} className="pt-4 pr-4 flex flex-col-reverse justify-end">
                <dt className="mt-2 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-500 uppercase">
                  {s.label}
                </dt>
                <dd className="font-grotesk text-3xl sm:text-5xl font-bold leading-none">{s.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp} className="flex items-center gap-5 mt-8 text-neutral-500">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github size={18} /></a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            <a href={socials.email} aria-label="Email" className="hover:text-foreground transition-colors"><Mail size={18} /></a>
            <span className="h-px w-10 bg-border" />
            <a href="#contact" className="group inline-flex items-center gap-1 font-mono text-[11px] tracking-widest uppercase hover:text-foreground">
              Establish connection <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-foreground bg-foreground text-background overflow-hidden py-3" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {marqueeItems.map((s) => (
                <span key={`${k}-${s}`} className="font-mono text-xs tracking-widest uppercase px-6 whitespace-nowrap">
                  {s} <span className="text-background/40 pl-6">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
