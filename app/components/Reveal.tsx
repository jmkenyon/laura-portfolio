"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
  once?: boolean;
}

const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
