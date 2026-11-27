import React from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../../utils/animations";
import { profile } from "../../data/portfolio";

const PageLoader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-background flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: EASE_PREMIUM } }}
      aria-hidden="true"
    >
      <h1 className="font-grotesk text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight uppercase leading-none">
        {profile.name}
      </h1>
      <div className="relative w-56 h-px bg-border overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-foreground"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
        />
      </div>
      <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
        Initialising system<span className="animate-blink">_</span>
      </span>
    </motion.div>
  );
};

export default PageLoader;
