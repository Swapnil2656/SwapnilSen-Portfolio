import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Server, Database, TrendingUp, Cpu, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { staggerContainer, fadeUp } from "../../utils/animations";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  icon: string;
  title: string;
}

const services: ServiceItem[] = [
  { icon: "Globe", title: "Full-Stack Web Development" },
  { icon: "Smartphone", title: "Native iOS Development" },
  { icon: "TrendingUp", title: "AI & ML Solutions" },
  { icon: "Server", title: "Backend & APIs" },
  { icon: "Database", title: "Database Management" },
  { icon: "Code", title: "Web Scraping & Automation" },
];

const iconMap: Record<string, any> = {
  Code,
  Globe,
  Server,
  Database,
  TrendingUp,
  Cpu,
  Smartphone,
};

const Services: React.FC = () => {
  const topRow = [...services, ...services, ...services]; // Triple for smoother loop
  const bottomRow = [
    ...services.slice().reverse(),
    ...services.slice().reverse(),
    ...services.slice().reverse(),
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Continuous Marquee
      // Slower duration for a calmer feel (35s instead of 25s)
      gsap.to(topRowRef.current, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 35,
      });

      gsap.to(bottomRowRef.current, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 35,
      });
      // Start box from -50 back to 0 for right scroll
      gsap.set(bottomRowRef.current, { xPercent: -50 });
      gsap.to(bottomRowRef.current, {
        xPercent: 0,
        ease: "none",
        repeat: -1,
        duration: 35,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="scroll-mt-14 py-8 lg:py-16 flex flex-col relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ── TWO-COLUMN EDITORIAL HEADER ── */}
        <motion.div variants={fadeUp}>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16">
            {/* LEFT: Numbered label */}
            <div>
              <p className="font-mono text-[clamp(1rem,2vw,1.2rem)] text-neutral-400 leading-none mb-1">05.</p>
              <h2 className="font-grotesk font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase text-foreground">
                WHAT I<br />OFFER
              </h2>
            </div>

            {/* RIGHT: Sub-text */}
            <div className="flex flex-col justify-center">
              <p className="mt-4 text-base sm:text-lg leading-[1.9] text-neutral-600 max-w-3xl">
                Services to help bring your ideas to life — from development to
                optimization and learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Rows Container */}
        <motion.div
          variants={fadeUp}
          className="space-y-16 relative overflow-hidden w-full"
        >
          {/* Top Row - scroll left */}
          <div ref={topRowRef} className="flex gap-4 sm:gap-6 md:gap-8 w-max">
            {topRow.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div
                  key={`top-${index}`}
                  className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex-shrink-0 flex flex-col items-start cursor-pointer hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 rounded-full border border-foreground/20">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Row - scroll right */}
          <div
            ref={bottomRowRef}
            className="flex gap-4 sm:gap-6 md:gap-8 w-max"
          >
            {bottomRow.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div
                  key={`bottom-${index}`}
                  className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex-shrink-0 flex flex-col items-start cursor-pointer hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 rounded-full border border-foreground/20">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
