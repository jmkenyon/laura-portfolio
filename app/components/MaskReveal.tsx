"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/** Wrap a single line of text — mask reveal animates child upward from below. */
const MaskReveal = ({
  children,
  delay = 0,
  duration = 1.1,
  className = "",
}: MaskRevealProps) => {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default MaskReveal;
