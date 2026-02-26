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
    <section className="min-h-screen flex flex-col justify-center relative px-6 py-20 pt-40 md:pt-32 overflow-hidden bg-background">
      {/* Dynamic Background Elements - Cleaned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
              <span className="text-xs font-semibold text-neutral-600 uppercase tracking-widest">Available for Projects</span>
            </div>

            <RevealText
              text="Dhiraj Kumar Shah"
              tag="h2"
              className="text-neutral-500 font-medium text-lg md:text-xl mb-4 tracking-wide uppercase"
            />

            <div className="mb-10">
              <RevealText
                text="Senior Brand,"
                tag="h1"
                className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-neutral-900"
                delay={0.1}
              />
              <RevealText
                text="UI/UX & Digital"
                tag="h1"
                className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-neutral-900"
                delay={0.2}
              />
              <RevealText
                text="Design Leader"
                tag="h1"
                className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-neutral-900"
                delay={0.3}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-neutral-600 max-w-xl leading-relaxed mb-12 font-light"
            >
              I help tech companies build brands and digital experiences that people actually love — making the complicated feel simple and human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button
                onClick={scrollToWork}
                className="px-10 py-5 bg-neutral-900 text-white rounded-full font-semibold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 group cursor-hover shadow-lg shadow-neutral-200"
              >
                View Latest Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToContact}
                className="px-10 py-5 border-2 border-neutral-200 text-neutral-900 rounded-full font-semibold text-lg hover:border-neutral-900 hover:bg-neutral-50 transition-all flex items-center justify-center cursor-hover"
              >
                Let's Collaborate
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group perspective-1000">
              {/* Image Container with sophisticated elements */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                <img
                  src="/about-image.png"
                  alt="Dhiraj Kumar Shah"
                  className="w-full h-full object-cover object-top transition-all duration-1000"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-neutral-200 rounded-[2.5rem] -z-10 group-hover:scale-110 transition-transform duration-1000 opacity-50" />

              {/* Years badge - Re-imagined */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-neutral-900 text-white rounded-full flex flex-col items-center justify-center border-4 border-white shadow-2xl z-20"
              >
                <span className="text-3xl md:text-4xl font-bold leading-none">7+</span>
                <span className="text-[10px] md:text-xs text-neutral-400 font-medium uppercase tracking-widest mt-1">Years Exp</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-neutral-400 group cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">Discover More</span>
        <div className="w-[1px] h-12 bg-neutral-200 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[30%] bg-neutral-900"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
