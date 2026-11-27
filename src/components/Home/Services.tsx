import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Server, Smartphone, Sparkles } from "lucide-react";
import { services } from "../../data/portfolio";
import { staggerContainer, fadeUp } from "../../utils/animations";
import SectionHeader from "../UI/SectionHeader";

const icons = [Globe, Smartphone, Sparkles, Server, Database, Code];

const Services: React.FC = () => (
  <section id="services" className="scroll-mt-20 py-20 lg:py-32">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6"
    >
      <SectionHeader
        index="02"
        title={<>What I<br />Offer</>}
        description="Services to help bring your ideas to life — from the first prototype to a production-ready product."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group relative bg-background p-7 sm:p-9 min-h-[240px] flex flex-col overflow-hidden"
            >
              {/* hover fill */}
              <span className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <div className="relative flex items-start justify-between mb-10">
                <Icon className="w-7 h-7 group-hover:text-background transition-colors duration-500" strokeWidth={1.5} />
                <span className="font-mono text-[11px] tracking-widest text-neutral-400 group-hover:text-background/50 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative font-grotesk font-bold text-xl sm:text-2xl tracking-tight mb-3 group-hover:text-background transition-colors duration-500">
                {s.title}
              </h3>
              <p className="relative text-neutral-600 leading-relaxed group-hover:text-background/70 transition-colors duration-500">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default Services;
