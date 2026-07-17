import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show on desktop
    setIsDesktop(window.innerWidth > 768);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
