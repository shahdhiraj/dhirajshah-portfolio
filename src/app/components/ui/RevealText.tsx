import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealTextProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

export const RevealText = ({ text, tag: Tag = "div", className = "", delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <Tag ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="block"
      >
        {text}
      </motion.span>
    </Tag>
  );
};
