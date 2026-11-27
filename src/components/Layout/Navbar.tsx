import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Command } from "lucide-react";
import { EASE_PREMIUM } from "../../utils/animations";
import StaggeredMenu from "./StaggeredMenu";
import { socials } from "../../data/portfolio";
import { NAV_LINKS, openCommandPalette } from "../../utils/nav";


/** Tracks which section is currently in view (scroll-spy). */
function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, enabled]);
  return active;
}

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(
    NAV_LINKS.map((l) => l.id),
    isHome,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP / TABLET ================= */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_PREMIUM }}
        className="hidden md:block fixed inset-x-0 top-0 z-50 px-4"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "mt-4 max-w-5xl rounded-full border border-black/10 bg-background/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 py-2.5"
              : "mt-0 max-w-7xl px-2 py-5"
          }`}
        >
          <Link to="/" className="font-grotesk text-base font-bold uppercase tracking-tight">
            Swapnil Sen
          </Link>

          <ul className="flex gap-1 lg:gap-2 font-mono text-[11px] tracking-widest uppercase">
            {NAV_LINKS.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    className={`relative block px-3 py-1.5 rounded-full transition-colors ${
                      isActive ? "text-background" : "text-neutral-500 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">
                      <span className="opacity-50">0{i + 1}.</span> {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openCommandPalette}
              className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase text-neutral-500 hover:text-foreground border border-border rounded-full px-3 py-1.5 transition-colors"
              aria-label="Open command menu"
            >
              <Command size={12} /> K
            </button>
            <a
              href={socials.email}
              className="font-mono text-[11px] tracking-widest uppercase bg-foreground text-background rounded-full px-4 py-2 hover:bg-neutral-700 transition-colors"
            >
              Let's talk
            </a>
          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <StaggeredMenu
          colors={["#d4d4d8", "#0c0c0c"]}
          accentColor="#0c0c0c"
          items={NAV_LINKS.map((l) => ({ label: l.label, ariaLabel: l.label, link: `/#${l.id}` }))}
          socialItems={[
            { label: "GitHub", link: socials.github },
            { label: "LinkedIn", link: socials.linkedin },
            { label: "Email", link: socials.email },
          ]}
          onMenuOpen={() => (document.body.style.overflow = "hidden")}
          onMenuClose={() => (document.body.style.overflow = "")}
        />
      </div>
    </>
  );
};

export default Navbar;
