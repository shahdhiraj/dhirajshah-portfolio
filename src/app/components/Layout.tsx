import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Preloader } from "./Preloader";
import { motion, useScroll, useSpring } from "motion/react";
import { SmoothScrollProvider } from "../context/SmoothScrollContext";

const LayoutContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <Preloader />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neutral-900 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Layout = () => {
  return (
    <SmoothScrollProvider>
      <LayoutContent />
    </SmoothScrollProvider>
  );
};

export default Layout;
