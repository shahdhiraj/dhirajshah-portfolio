import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useSmoothScroll } from "../context/SmoothScrollContext";
import { RevealText } from "./ui/RevealText";

const Hero = () => {
  const lenis = useSmoothScroll();

  const scrollToContact = () => {
    if (lenis) {
      lenis.scrollTo("#contact");
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToWork = () => {
    if (lenis) {
      lenis.scrollTo("#projects");
    } else {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 py-32 pt-40 md:pt-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <RevealText
              text="Dhiraj Kumar Shah"
              tag="h2"
              className="text-neutral-500 font-medium text-lg md:text-xl mb-6 tracking-wide uppercase"
            />

            <div className="mb-8">
              <RevealText
                text="Senior Brand,"
                tag="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-neutral-900"
                delay={0.1}
              />
              <RevealText
                text="UI/UX & Digital"
                tag="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-neutral-900"
                delay={0.2}
              />
              <RevealText
                text="Design Leader"
                tag="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-neutral-900"
                delay={0.3}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-12"
            >
              I lead brand identity, design systems, and digital experiences for
              premium technology and product-driven companies — turning complex
              products into clear, conversion-driven experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button
                onClick={scrollToWork}
                className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group cursor-hover"
              >
                View Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 border border-neutral-300 text-neutral-900 rounded-full font-medium text-lg hover:border-neutral-900 transition-all flex items-center justify-center cursor-hover"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative background blob */}
            <div
              className="absolute inset-0 rounded-3xl bg-neutral-100"
              style={{
                transform: "translate(16px, 16px)",
                zIndex: 0,
              }}
            />

            <div className="relative z-10 w-full max-w-sm md:max-w-md">
              <img
                src="/profile.png"
                alt="Dhiraj Kumar Shah — Senior Brand & UI/UX Design Leader"
                className="w-full h-auto rounded-3xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  boxShadow:
                    "0 32px 64px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-neutral-100 flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-neutral-900">
                  Available for Projects
                </span>
              </motion.div>

              {/* Years badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -top-5 -right-5 bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold leading-none">7+</p>
                <p className="text-xs text-neutral-400 mt-0.5">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
