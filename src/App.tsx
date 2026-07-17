import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import PageLoader from "./components/Loaders/PageLoader";
import CustomCursor from "./components/UI/CustomCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  // AOS + Handle Full Page Load (images/fonts)
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading)
    return (
      <AnimatePresence>
        <PageLoader />
      </AnimatePresence>
    );

  return (
    <Router>
      <CustomCursor />
      <AppRoutes />
    </Router>
  );
}

export default App;
