"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ProjectInfoProps {
  project: {
    slug: string;
    title: string;
    projeto: string;
    equipe: string;
    ano: string;
    gridSize: number;
    description: string[];
    padding?: string;
    images: {
      thumbnail?: string;
      largeGallery?: string[];
      gallery: string[];
      plants?: string[];
      secondary?: {
        src: string;
        size: "small" | "medium" | "large" | "xl";
      }[];
      doublePlants?: string[];
    };
  };
}

/** Subtle parallax wrapper for gallery images */
const ParallaxImage = ({
  src,
  alt,
  width,
  height,
  className,
  range = 60,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  range?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const { t } = useTranslation();
  const totalImages =
    (project.images.largeGallery?.length ?? 0) +
    project.images.gallery.length +
    (project.images.plants?.length ?? 0) +
    (project.images.secondary?.length ?? 0) +
    (project.images.doublePlants?.length ?? 0);

  let imgCounter = 0;
  const nextIndex = () => ++imgCounter;
  const indexLabel = (i: number) =>
    `${i.toString().padStart(2, "0")} / ${totalImages.toString().padStart(2, "0")}`;

  return (
    <div className="pt-10 flex md:flex-row flex-col gap-12 md:gap-[100px] 3xl:gap-40 3xl:px-20">
      {/* Sticky meta column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="md:sticky md:top-32 md:self-start md:w-[320px] flex-shrink-0"
      >
        <div className="label-mono text-foreground-muted mb-6">
          project — {totalImages.toString().padStart(2, "0")} images
        </div>

        <h1 className="font-display lowercase text-5xl md:text-6xl tracking-tight leading-[0.95] mb-10">
          {project.title}
        </h1>

        <dl className="space-y-5 mb-10 text-sm">
          <div className="flex flex-col">
            <dt className="label-mono text-foreground-muted mb-1">{t("project")}</dt>
            <dd>{t(project.projeto)}</dd>
          </div>
          <div className="flex flex-col">
            <dt className="label-mono text-foreground-muted mb-1">{t("team")}</dt>
            <dd>{t(project.equipe)}</dd>
          </div>
          <div className="flex flex-col">
            <dt className="label-mono text-foreground-muted mb-1">{t("year")}</dt>
            <dd>{t(project.ano)}</dd>
          </div>
        </dl>

        <div className="space-y-4 max-w-md text-sm leading-relaxed text-foreground/85">
          {project.description.map((desc, index) => (
            <p key={index}>{t(desc)}</p>
          ))}
        </div>
      </motion.div>

      {/* Image stream */}
      <div className="flex flex-col max-w-[900px] md:max-w-[800px] 3xl:max-w-[1000px] w-full">
        {project.images.largeGallery && (
          <div className={cn("grid grid-cols-1 gap-3 pb-3", project.padding)}>
            {project.images.largeGallery.map((img, index) => {
              const i = nextIndex();
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <ParallaxImage
                    src={img}
                    alt={`${project.title} ${i}`}
                    width={1000}
                    height={700}
                  />
                  <div className="mt-2 label-mono text-foreground-muted">
                    {indexLabel(i)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 pb-3">
          {project.images.gallery.map((img, index) => {
            const isLast = index === project.images.gallery.length - 1;
            const isOdd = project.images.gallery.length % 2 !== 0;
            const i = nextIndex();
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index % 2) * 0.08,
                }}
                className={cn(isLast && isOdd && "lg:col-span-2")}
              >
                <ParallaxImage
                  src={img}
                  alt={`${project.title} ${i}`}
                  width={isLast && isOdd ? 1000 : 700}
                  height={700}
                  range={40}
                />
                <div className="mt-2 label-mono text-foreground-muted">
                  {indexLabel(i)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {project.images.plants && (
          <div className={cn("grid grid-cols-1 gap-3 pb-3 pt-3", project.padding)}>
            {project.images.plants.map((img, index) => {
              const i = nextIndex();
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ParallaxImage
                    src={img}
                    alt={`${project.title} ${i}`}
                    width={1000}
                    height={400}
                  />
                  <div className="mt-2 label-mono text-foreground-muted">
                    {indexLabel(i)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {project.images.secondary && (
          <div className="grid grid-cols-1 gap-3 place-items-center pt-6">
            {project.images.secondary.map((item, index) => {
              const i = nextIndex();
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    item.size === "small" && "lg:w-[200px] md:w-[100px]",
                    item.size === "medium" && "lg:w-[400px] md:w-[200px]",
                    item.size === "large" && "lg:w-[800px] md:w-[400px]",
                    item.size === "xl" && "lg:w-[1200px] md:w-[600px]"
                  )}
                >
                  <Image
                    src={item.src}
                    alt=""
                    width={
                      item.size === "large"
                        ? 800
                        : item.size === "small"
                        ? 200
                        : item.size === "medium"
                        ? 400
                        : 1200
                    }
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="mt-2 label-mono text-foreground-muted">
                    {indexLabel(i)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 pb-3 pt-3">
          {project.images.doublePlants &&
            project.images.doublePlants.map((img, index) => {
              const i = nextIndex();
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (index % 2) * 0.08,
                  }}
                >
                  <ParallaxImage
                    src={img}
                    alt={`${project.title} ${i}`}
                    width={700}
                    height={700}
                    range={40}
                  />
                  <div className="mt-2 label-mono text-foreground-muted">
                    {indexLabel(i)}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
