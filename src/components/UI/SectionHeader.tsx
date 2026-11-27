import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

type Props = {
  index: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  aside?: React.ReactNode;
};

/** Shared editorial header: numbered label + big title on the left, copy on the right. */
const SectionHeader: React.FC<Props> = ({ index, title, description, aside }) => (
  <motion.div
    variants={fadeUp}
    className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-6 lg:gap-24 mb-12 lg:mb-20 border-t border-foreground pt-6"
  >
    <div>
      <p className="font-mono text-xs tracking-widest text-neutral-500 mb-3">/{index}</p>
      <h2 className="font-grotesk font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-tight uppercase">
        {title}
      </h2>
    </div>
    <div className="flex flex-col justify-end gap-4">
      {description && (
        <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">{description}</p>
      )}
      {aside}
    </div>
  </motion.div>
);

export default SectionHeader;
