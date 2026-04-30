"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Translate from "./components/Translate";
import Marquee from "./components/Marquee";
import MaskReveal from "./components/MaskReveal";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useTranslation } from "react-i18next";

const images: string[] = [
  "/background-image_3.webp",
  "/background-image2_2.webp",
  "/background-image3_2.webp",
];

export default function Home() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Cursor-driven parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.8 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.8 });
  const tx = useTransform(smoothX, [-1, 1], ["-2%", "2%"]);
  const ty = useTransform(smoothY, [-1, 1], ["-2%", "2%"]);
  const txInverse = useTransform(smoothX, [-1, 1], ["1%", "-1%"]);
  const tyInverse = useTransform(smoothY, [-1, 1], ["1%", "-1%"]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  // Auto-rotate hero images
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Top utility row */}
      <div className="hidden sm:block fixed z-50 right-8 top-8">
        <Translate mode="dark" />
      </div>
      <div className="fixed sm:top-13 top-5 w-full p-8 z-40">
        <Navbar mode="dark" />
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[100svh] w-full overflow-hidden bg-black"
      >
        {/* Layered background images, crossfade */}
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: tx, y: ty, scale: 1.06 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* darken */}
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        ))}

        {/* Hero typography */}
        <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 pb-32 text-white">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="label-mono mb-6 text-white/70">
              <MaskReveal delay={0.1}>
                ◇ ESTÚDIO DE ARQUITETURA &nbsp; / &nbsp; SÃO PAULO — BRASIL
              </MaskReveal>
            </div>

            <h1 className="font-display leading-[0.92] tracking-[-0.02em] text-[14vw] sm:text-[10vw] md:text-[8.5vw]">
              <span className="block">
                <MaskReveal delay={0.2}>laura</MaskReveal>
              </span>
              <span className="block">
                <MaskReveal delay={0.32}>
                  <em className="font-serif-italic">consoni</em>
                </MaskReveal>
              </span>
            </h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-light text-white/85 leading-relaxed col-span-2"
              >
                Architecture, interiors and the spaces in between. A practice exploring
                memory, materiality and the quiet poetry of inhabited form.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="label-mono text-white/65 self-end md:text-right"
              >
                <span>{(active + 1).toString().padStart(2, "0")}</span>
                <span className="mx-2 opacity-50">/</span>
                <span>{images.length.toString().padStart(2, "0")}</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom corner badge */}
        <motion.div
          style={{ x: txInverse, y: tyInverse }}
          className="absolute bottom-10 right-8 sm:right-12 hidden md:block z-10"
        >
          <div className="label-mono text-white/70 leading-relaxed text-right">
            <div>23.55° S</div>
            <div>46.63° W</div>
          </div>
        </motion.div>

        {/* Index dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-cursor="VIEW"
              className="group relative"
              aria-label={`Show image ${i + 1}`}
            >
              <span
                className={`block h-px transition-all duration-700 ${
                  i === active ? "w-12 bg-white" : "w-6 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-foreground text-background py-6 border-y border-foreground/20">
        <Marquee
          items={[
            <span key="1" className="font-serif-italic text-2xl md:text-3xl">
              architecture
            </span>,
            <span key="2" className="label-mono">interiors</span>,
            <span key="3" className="font-serif-italic text-2xl md:text-3xl">
              memory
            </span>,
            <span key="4" className="label-mono">materiality</span>,
            <span key="5" className="font-serif-italic text-2xl md:text-3xl">
              ruins · reuse
            </span>,
            <span key="6" className="label-mono">são paulo</span>,
            <span key="7" className="font-serif-italic text-2xl md:text-3xl">
              palimpsest
            </span>,
            <span key="8" className="label-mono">2026</span>,
          ]}
        />
      </div>

      {/* Intro slab */}
      <section className="relative px-6 sm:px-10 py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 label-mono text-foreground-muted">
            <div>(01)</div>
            <div className="mt-2">— manifesto</div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            Buildings are <em className="font-serif-italic text-accent">not the answer.</em>{" "}
            They are the patient questioning of light, weight and time —
            translated into the rooms we live within.
          </motion.div>
        </div>
      </section>

      {/* Quick nav cards */}
      <section className="relative px-6 sm:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-px bg-line">
          {[
            {
              n: "02",
              title: t("projects"),
              href: "/projetos",
              caption: "selected works · 2021 — ongoing",
            },
            {
              n: "03",
              title: t("about"),
              href: "/sobre-mim",
              caption: "biography · academic · resume",
            },
            {
              n: "04",
              title: t("contact"),
              href: "/contato",
              caption: "for new commissions & studies",
            },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              data-cursor="OPEN"
              className="group block bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-background-deep relative"
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="label-mono text-foreground-muted">{c.n}</span>
                <span className="label-mono text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  →
                </span>
              </div>
              <div className="font-display text-4xl md:text-5xl lowercase tracking-tight">
                {c.title}
              </div>
              <div className="mt-3 label-mono text-foreground-muted">
                {c.caption}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
