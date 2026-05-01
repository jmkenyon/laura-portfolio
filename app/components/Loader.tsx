"use client";

import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center bg-white gap-6">
      <div className="relative w-16 h-16">
        <motion.span
          className="absolute inset-0 rounded-full border border-foreground/30"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border border-foreground/50"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.2, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <span className="absolute inset-0 m-auto block w-1.5 h-1.5 rounded-full bg-foreground" />
      </div>
      <div className="label-mono text-foreground-muted">
        loading — please wait
      </div>
    </div>
  );
};

export default Loader;
