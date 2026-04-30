"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { useProjectData } from "../assets/projectData";

const ProjectCard = () => {
  const { t } = useTranslation();
  const projectData = useProjectData();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isFine, setIsFine] = useState(false);

  // Cursor-tracking preview
  const previewX = useMotionValue(-9999);
  const previewY = useMotionValue(-9999);
  const px = useSpring(previewX, { stiffness: 140, damping: 20, mass: 0.6 });
  const py = useSpring(previewY, { stiffness: 140, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isFine) return;
    const onMove = (e: MouseEvent) => {
      previewX.set(e.clientX);
      previewY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isFine, previewX, previewY]);

  return (
    <div className="relative">
      {/* Floating cursor-tracked preview (desktop only) */}
      {isFine && (
        <motion.div
          className="fixed pointer-events-none z-[60] overflow-hidden"
          style={{
            top: py,
            left: px,
            width: 360,
            height: 460,
            x: "-50%",
            y: "-50%",
          }}
          initial={false}
          animate={{
            opacity: hoverIndex !== null ? 1 : 0,
            scale: hoverIndex !== null ? 1 : 0.94,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          {projectData.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={false}
              animate={{
                opacity: hoverIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={p.images.thumbnail}
                alt={p.title}
                fill
                className="object-cover"
                sizes="360px"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-12 gap-4 items-end pb-10 mb-2 border-b border-line"
      >
        <div className="col-span-12 md:col-span-7">
          <div className="label-mono text-foreground-muted mb-3">
            ◇ index — {projectData.length.toString().padStart(2, "0")} works
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            selected <em className="font-serif-italic">works</em>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 md:text-right">
          <p className="text-sm text-foreground-muted max-w-md md:ml-auto">
            An evolving index of academic, professional and exploratory projects
            developed across São Paulo and Paris. Hover or tap a row to preview.
          </p>
        </div>
      </motion.div>

      {/* Column headers */}
      <div className="hidden md:grid grid-cols-12 gap-4 label-mono text-foreground-muted py-3 border-b border-line">
        <div className="col-span-1">№</div>
        <div className="col-span-5">title</div>
        <div className="col-span-3">type</div>
        <div className="col-span-2">year</div>
        <div className="col-span-1 text-right">→</div>
      </div>

      {/* Index list */}
      <ul
        onMouseLeave={() => setHoverIndex(null)}
        className="relative"
      >
        {projectData.map((project, i) => (
          <li
            key={project.slug}
            className="border-b border-line"
            onMouseEnter={() => setHoverIndex(i)}
          >
            <Link
              href={`/projetos/${project.slug}`}
              data-cursor="VIEW"
              className="group grid grid-cols-12 gap-4 items-center py-6 md:py-8 transition-all duration-500 hover:px-4"
            >
              {/* Number */}
              <div className="col-span-2 md:col-span-1 label-mono text-foreground-muted">
                {(i + 1).toString().padStart(2, "0")}
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-5">
                <div
                  className={`font-display text-3xl md:text-5xl lowercase tracking-tight transition-colors duration-500 ${
                    hoverIndex !== null && hoverIndex !== i
                      ? "text-foreground/30"
                      : "text-foreground"
                  }`}
                >
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                    {project.title}
                  </span>
                  <span className="ml-3 inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 font-serif-italic text-2xl md:text-3xl text-accent">
                    →
                  </span>
                </div>
              </div>

              {/* Type */}
              <div className="hidden md:block col-span-3 text-sm text-foreground-muted">
                {t(project.projeto)}
              </div>

              {/* Year */}
              <div className="hidden md:block col-span-2 label-mono text-foreground-muted">
                {t(project.ano)}
              </div>

              {/* Arrow */}
              <div className="hidden md:block col-span-1 text-right label-mono text-foreground-muted">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Mobile metadata */}
              <div className="col-span-12 md:hidden flex justify-between text-xs text-foreground-muted mt-1">
                <span>{t(project.projeto)}</span>
                <span className="label-mono">{t(project.ano)}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
