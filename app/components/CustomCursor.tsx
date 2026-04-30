"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor:
 * - dot follows mouse 1:1
 * - ring eases toward mouse with smoothing
 * - expands on links / images / buttons
 * - shows a contextual label when hovering elements with `data-cursor` attr
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState<"default" | "hover" | "text">(
    "default"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouseX + 28}px, ${mouseY + 28}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, [data-cursor]"
      ) as HTMLElement | null;
      if (interactive) {
        const cursorLabel = interactive.getAttribute("data-cursor");
        const variantAttr = interactive.getAttribute("data-cursor-variant");
        if (variantAttr === "text") setVariant("text");
        else setVariant("hover");
        setLabel(cursorLabel ?? "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const onLeave = () => {
      setVariant("default");
      setLabel("");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseleave", onLeave);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div
        ref={ringRef}
        className={`cursor-ring ${variant === "hover" ? "is-hover" : ""} ${
          variant === "text" ? "is-text" : ""
        }`}
        aria-hidden
      />
      <div
        ref={labelRef}
        className={`cursor-label ${label ? "is-visible" : ""}`}
        aria-hidden
      >
        {label}
      </div>
    </>
  );
};

export default CustomCursor;
