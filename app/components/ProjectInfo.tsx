"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

interface ProjectInfoProps {
  project: {
    slug: string;
    title: string;
    projeto: string;
    equipe: string;
    ano: string;
    gridSize: number;
    description: string[];
    images: {
      thumbnail?: string;
      gallery: string[];
      plants?: string[];
      secondary?: {
        src: string;
        size: "small" | "medium" | "large" | "xl";
      }[];
    };
  };
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const { t } = useTranslation();
  return (
    <div className="pt-10 flex md:flex-row flex-col gap-[100px] 3xl:gap-40 3xl:px-20">
      <div className="flex flex-col gap-4">
        <h1>
          <div className="font-semibold text-gray-500">{t("title")}</div>
          <div>{t(project.title)}</div>
        </h1>
        <h4>
          <div className="font-semibold text-gray-500">{t("project")}</div>
          <div>{t(project.projeto)}</div>
        </h4>
        <h4>
          <div className="font-semibold text-gray-500">{t("team")}</div>
          <div>{t(project.equipe)}</div>
        </h4>
        <h4>
          <div className="font-semibold text-gray-500">{t("year")}</div>
          <div>{t(project.ano)}</div>
        </h4>
        <div className="md:max-w-xs max-w-md 3xl:max-w-2xl 2xl:max-w-lg">
          {project.description.map((desc, index) => (
            <p className="py-3" key={index}>
              {t(desc)}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col max-w-[900px] md:max-w-[800px] 3xl:max-w-[1000px]  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-2 pb-2">
          {project.images.gallery.map((img, index) => {
            const isLast = index === project.images.gallery.length - 1;
            const isOdd = project.images.gallery.length % 2 !== 0;

            return (
              <Image
                key={index}
                src={img}
                alt={`${project.title} ${index + 1}`}
                height={700}
                width={700}
                className={cn(
                  !isLast && "3xl:w-[500px] md:w-[400px]",
                  isLast && isOdd && "lg:col-span-2 justify-self-center w-[300px]"
                )}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-2 place-items-center pb-2">
          {project.images.plants?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${t(project.title)} ${index + 1}`}
              height={400}
              width={1000}
              className="lg:w-[1000px] md:w-[400px]"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 place-items-center pt-10">
          {project.images.secondary?.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt=""
              width={
                item.size === "large" ? 800 : item.size === "small" ? 200 : item.size === "medium" ? 400 : 1200
              }
              height={400}
              className={cn(
                item.size === "small" && "lg:w-[200px] md:w-[100px]",
                item.size === "medium" && "lg:w-[400px] md:w-[200px]",
                item.size === "large" && "lg:w-[800px] md:w-[400px]",
                item.size === "xl" && "lg:w-[1200px] md:w-[600px]"
       
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
