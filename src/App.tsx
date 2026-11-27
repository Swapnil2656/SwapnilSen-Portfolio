import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./routes/AppRoutes";
import PageLoader from "./components/Loaders/PageLoader";
import CustomCursor from "./components/UI/CustomCursor";
import CommandPalette from "./components/UI/CommandPalette";

/** Intro loader shows once per session, for a short fixed time, on top of the
 *  already-rendering page — it never blocks the content from loading. */
const LOADER_MS = 1100;

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    try {
      return !sessionStorage.getItem("intro-seen");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showLoader) return;
    const t = window.setTimeout(() => {
      setShowLoader(false);
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {
        /* ignore */
      }
    }, LOADER_MS);
    return () => window.clearTimeout(t);
  }, [showLoader]);

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <AnimatePresence>{showLoader && <PageLoader key="loader" />}</AnimatePresence>
        <CustomCursor />
        <CommandPalette />
        <AppRoutes />
        <Analytics />
      </Router>
    </MotionConfig>
  );
}

export default App;
