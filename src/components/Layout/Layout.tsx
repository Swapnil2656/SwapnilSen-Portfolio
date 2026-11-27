import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/** Scrolls to #hash targets after route changes, otherwise to the top. */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so the target section has rendered.
      const raf = requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      );
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
};

const Layout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 font-mono text-xs uppercase tracking-widest"
    >
      Skip to content
    </a>
    <ScrollManager />
    <Navbar />
    <main id="main" className="flex-1 pt-24 md:pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
