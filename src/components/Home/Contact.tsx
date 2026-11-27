import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile, socials } from "../../data/portfolio";
import { staggerContainer, fadeUp } from "../../utils/animations";

const channels = [
  { label: "LinkedIn", handle: "in/swapnil-sen", cta: "Connect professionally", href: socials.linkedin },
  { label: "GitHub", handle: "@Swapnil2656", cta: "Explore repositories", href: socials.github },
  { label: "WhatsApp", handle: "Quick chat", cta: "Message me", href: socials.whatsapp },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = socials.email;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <motion.p variants={fadeUp} className="font-mono text-xs tracking-widest uppercase text-neutral-500 mb-6 border-t border-foreground pt-6">
          /05 Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-grotesk font-bold uppercase tracking-tighter leading-[0.88] text-[clamp(3.25rem,11vw,10rem)] mb-8"
        >
          Establish
          <br />
          <span className="text-neutral-400">Connection</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-neutral-600 max-w-2xl mb-14">
          Building something, hiring, or just want to talk code? My inbox is always open.
        </motion.p>

        {/* Primary email card */}
        <motion.div
          variants={fadeUp}
          className="bg-foreground text-background p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-4"
        >
          <div className="min-w-0">
            <p className="font-mono text-[11px] tracking-widest uppercase text-background/50 mb-2">Email</p>
            <a
              href={socials.email}
              className="font-grotesk font-bold tracking-tight text-[clamp(1.4rem,4.2vw,3rem)] break-all hover:opacity-70 transition-opacity"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-background/30 px-5 py-3 font-mono text-xs tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors"
              aria-live="polite"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}
            </button>
            <a
              href={socials.email}
              className="inline-flex items-center gap-2 bg-background text-foreground px-5 py-3 font-mono text-xs tracking-widest uppercase hover:bg-neutral-300 transition-colors"
            >
              Write <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Other channels */}
        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map((c) => (
            <motion.a
              key={c.label}
              variants={fadeUp}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border hover:border-foreground p-6 flex flex-col gap-6 transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] tracking-widest uppercase text-neutral-500">{c.label}</span>
                <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <p className="font-grotesk font-bold text-xl">{c.handle}</p>
                <p className="text-sm text-neutral-500">{c.cta} →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
