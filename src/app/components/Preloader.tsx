import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-900 text-white"
        >
          <div className="container max-w-6xl px-6 flex flex-col items-start justify-center h-full">
            <div className="flex flex-col gap-2 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-medium tracking-tight"
              >
                Dhiraj Kumar
              </motion.h2>
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-neutral-500 text-lg md:text-xl font-light"
              >
                Portfolio ©2026
              </motion.p>
            </div>

            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Initializing Experience</span>
                <span className="text-5xl md:text-7xl font-light tabular-nums">
                  {Math.min(progress, 100)}%
                </span>
              </div>
              <div className="w-full h-[1px] bg-neutral-800 relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: Math.min(progress / 100, 1) }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 bg-white origin-left"
                />
              </div>
            </div>
          </div>

          {/* Curved Bottom Overlay for smooth transition */}
          <motion.div 
            initial={{ height: 0 }}
            exit={{ height: "100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 bg-neutral-900 pointer-events-none"
            style={{ 
                borderRadius: "0 0 50% 50% / 0 0 10% 10%",
                transform: "translateY(100%)"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
