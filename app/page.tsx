"use client";

import { useEffect, useState } from "react";
import Translate from "./components/Translate";
import MaskReveal from "./components/MaskReveal";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import MobileMenu from "./components/MobileMenu";

const images: string[] = [
  "/background-image_3.webp",
  "/background-image2_3.webp",
  "/background-image3_3.webp",
];

export default function Home() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const next = () => setActive((i) => (i + 1) % images.length);
  const prev = () =>
    setActive((i) => (i - 1 + images.length) % images.length);

  const links = [
    { href: "/sobre-mim", label: t("about"), code: "01" },
    { href: "/projetos", label: t("projects"), code: "02" },
    { href: "/contato", label: t("contact"), code: "03" },
  ];

  return (
    <div className="relative">
      {/* Top right: language */}
      <div className="hidden sm:block fixed z-50 right-8 top-8">
        <Translate mode="dark" />
      </div>

      {/* Minimal nav links (no logo on landing) */}
      <div className="fixed sm:top-13 top-5 w-full p-8 z-40">
        <div className="flex justify-end items-start text-xs text-white/85">
          <nav className="hidden sm:flex items-start gap-12 pb-4 text-right">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-2 link-underline hover:text-white transition-colors"
              >
                <span className="label-mono text-white/55">{link.code}</span>
                <span className="lowercase tracking-wide">{link.label}</span>
              </Link>
            ))}
          </nav>
          <MobileMenu mode="dark" />
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-black">
        {/* Static crossfading images — no mouse parallax */}
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        ))}

        {/* Hero typography */}
        <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 pb-32 text-white">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="label-mono mb-6 text-white/70">
              <MaskReveal delay={0.1}>
                ESTÚDIO DE ARQUITETURA &nbsp; / &nbsp; SÃO PAULO — BRASIL
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
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-sm font-light text-white/85 leading-relaxed col-span-2"
              >
                Architecture, interiors and the spaces in between. A practice
                exploring memory, materiality and the quiet poetry of inhabited
                form.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="label-mono text-white/65 self-end md:text-right"
              >
                <span>{(active + 1).toString().padStart(2, "0")}</span>
                <span className="mx-2 opacity-50">/</span>
                <span>{images.length.toString().padStart(2, "0")}</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Coordinates badge */}
        <div className="absolute bottom-10 right-8 sm:right-12 hidden md:block z-10">
          <div className="label-mono text-white/70 leading-relaxed text-right">
            <div>23.55° S</div>
            <div>46.63° W</div>
          </div>
        </div>

        {/* Bottom-left: index dots + arrow controls */}
        <div className="absolute bottom-10 left-8 sm:left-10 z-10 flex items-center gap-6">
          <div className="flex items-center gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                className="group"
              >
                <span
                  className={`block h-px transition-all duration-700 ${
                    i === active ? "w-12 bg-white" : "w-6 bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white/85 hover:bg-white hover:text-black transition-colors duration-500"
            >
              <span className="block leading-none -mt-0.5">←</span>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white/85 hover:bg-white hover:text-black transition-colors duration-500"
            >
              <span className="block leading-none -mt-0.5">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
