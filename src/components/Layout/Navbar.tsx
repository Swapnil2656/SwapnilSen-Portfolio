import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { EASE_PREMIUM } from "../../utils/animations";
import StaggeredMenu from "./StaggeredMenu";
import { Github, Linkedin, Mail } from "lucide-react";

/* ===================== ANIMATIONS ===================== */

const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_PREMIUM },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.8, ease: EASE_PREMIUM },
  }),
};

/* ===================== COMPONENT ===================== */

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    if (windowWidth >= 768) setMenuOpen(false);
  }, [windowWidth]);

  const links = [
    { label: "01. Projects", id: "projects" },
    { label: "02. Services", id: "services" },
    { label: "03. Skills", id: "skills" },
    { label: "04. About", id: "about" },
    { label: "05. Contact", id: "contact" },
  ];

  const menuItems = links.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: `#${item.id}`,
  }));

  const staggeredSocials = [
    { label: "GitHub", link: "https://github.com/Swapnil2656" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/swapnil-sen-812030309/" },
  ];

  let maxWidth = windowWidth;
  let marginLeft = 0;

  if (scrolled && windowWidth >= 768) {
    if (windowWidth >= 1440) maxWidth = windowWidth * 0.6;
    else if (windowWidth >= 1024) maxWidth = windowWidth * 0.8;
    else maxWidth = windowWidth * 0.95;
    marginLeft = (windowWidth - maxWidth) / 2;
  }

  return (
    <>
      {/* ================= DESKTOP / TABLET ================= */}
      {windowWidth >= 768 && (
        <motion.header
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          className={`fixed ${scrolled ? "top-5" : "top-0"} left-0 z-50`}
          style={{
            width: "100%",
            maxWidth,
            marginLeft,
            padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
            borderRadius: scrolled ? "2.5rem" : "0rem",
            backgroundColor: scrolled
              ? "rgba(242,242,245,0.85)"
              : "var(--color-background)",
            backdropFilter: scrolled ? "blur(18px)" : "none",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
            border: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
            transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="w-full xl:max-w-7xl mx-auto flex items-center justify-between">
            {/* LOGO */}
            <motion.span
              custom={0}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="text-base font-bold tracking-tight font-grotesk uppercase"
            >
              Swapnil Sen
            </motion.span>

            {/* NUMBERED LINKS */}
            <ul className="flex md:gap-4 xl:gap-6 text-[11px] font-bold tracking-widest uppercase font-mono">
              {links.map((item, i) => (
                <motion.li
                  key={item.id}
                  custom={i + 1}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={`#${item.id}`}
                    className="text-neutral-500 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* SOCIAL ICONS */}
            <motion.div
              custom={links.length + 1}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 text-foreground"
            >
              <a href="https://github.com/Swapnil2656" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/swapnil-sen-812030309/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:swapnilsen2656@gmail.com" className="hover:text-neutral-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.header>
      )}

      {/* ================= MOBILE ================= */}
      {windowWidth < 768 && (
        <>
          <StaggeredMenu
            items={menuItems}
            socialItems={staggeredSocials}
            onMenuOpen={() => setMenuOpen(true)}
            onMenuClose={() => setMenuOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
