"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
}

const Marquee = ({ items, className = "" }: MarqueeProps) => {
  // duplicate so the loop is seamless
  const doubled = [...items, ...items];
  return (
    <div className={`marquee ${className}`} aria-hidden>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span>{item}</span>
            <span className="opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
