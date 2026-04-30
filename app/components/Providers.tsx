"use client";
import "../hooks/i18n";
import SmoothScroll from "./SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}
