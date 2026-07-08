import { motion, useInView, Variants } from "motion/react";
import { useRef, ElementType } from "react";

interface WordRevealProps {
  text: string;
  tag?: ElementType;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export const WordReveal = ({ 
  text, 
  tag: Tag = "div", 
  className = "", 
  delay = 0,
  wordDelay = 0.05
}: WordRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: wordDelay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      y: "40%", 
      opacity: 0,
      rotate: 2
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to any to bypass strict easing type if necessary
      },
    },
  };

  const Component = Tag as any;

  return (
    <Component 
      ref={ref} 
      className={`relative flex flex-wrap gap-x-[0.2em] gap-y-0 ${className}`}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-flex flex-wrap"
      >
        {words.map((word, i) => (
          <span key={i} className="relative inline-block overflow-hidden py-[0.1em] -my-[0.1em]">
            <motion.span
              variants={wordVariants}
              className="inline-block"
            >
              {word === "" ? "\u00A0" : word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
