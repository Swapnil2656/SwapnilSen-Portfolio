import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "../../utils/animations";

const Contact: React.FC = () => {
  const links = [
    {
      label: "EMAIL",
      href: "mailto:swapnilsen2656@gmail.com",
    },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/swapnil-sen-812030309/",
    },
    {
      label: "GITHUB",
      href: "https://github.com/Swapnil2656",
    },
    {
      label: "WHATSAPP",
      href: "https://wa.me/918770854635?text=Hello%20Swapnil",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-14 py-20 lg:py-40"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Section number */}
        <motion.p variants={fadeUp} className="font-mono text-sm tracking-widest text-neutral-400 uppercase mb-4">
          05. Contact
        </motion.p>

        {/* Giant heading — reference style */}
        <motion.h2
          variants={fadeUp}
          className="
            font-grotesk font-bold
            text-[clamp(3.5rem,10vw,9rem)]
            leading-[0.9]
            tracking-tight
            uppercase
            text-foreground
            mb-8
          "
        >
          ESTABLISH
          <br />
          CONNECTION
        </motion.h2>

        {/* Italic quote */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-sm sm:text-base italic text-neutral-500 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          "There's always a way to connect. Whether it's through code,
          a collaboration, or a shared idea."
        </motion.p>

        {/* Social links — separated by / like the reference */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          {links.map((link, i) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                target={link.label === "EMAIL" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-1
                  font-mono text-xs sm:text-sm tracking-widest uppercase
                  text-neutral-600 hover:text-foreground
                  transition-colors
                "
              >
                {link.label}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all"
                />
              </a>
              {i < links.length - 1 && (
                <span className="text-neutral-300 font-mono text-xs">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
