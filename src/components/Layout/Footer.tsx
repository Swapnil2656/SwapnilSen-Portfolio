import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          
          <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
            BUILT WITH ♥ BY SWAPNIL
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
