"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

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
        size: "small" | "medium" | "large";
      }[];
    };
  };
}

const ProjectInfo = ({project}: ProjectInfoProps) => {
    const {t} = useTranslation()
  return (
    <div className="pt-10 flex md:flex-row flex-col gap-[100px]">
      <div className="flex flex-col gap-4">
        <h1>
          <div className="font-semibold text-gray-500">{t("title")}</div>
          <div>{project.title}</div>
        </h1>
        <h4>
          <div className="font-semibold text-gray-500">{t("project")}</div>
          <div>{project.projeto}</div>
        </h4>
        <h4>
          <div className="font-semibold text-gray-500">{t("team")}</div>
          <div>{project.equipe}</div>
        </h4>
        <h4>
          <div className="font-semibold text-gray-500">{t("year")}</div>
          <div>{project.ano}</div>
        </h4>
        <div className="md:max-w-xs max-w-md">
          {project.description.map((desc, index) => (
            <p className="py-3" key={index}>
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col max-w-[800px] w-full">
        <div className="grid lg:grid-cols-2 grids-cols-1 place-items-center gap-2 pb-2">
          {project.images.gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} ${index + 1}`}
              height={400}
              width={400}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 place-items-center pb-2">
          {project.images.plants?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} ${index + 1}`}
              height={400}
              width={800}
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
                item.size === "large" ? 800 : item.size === "small" ? 200 : 400
              }
              height={400}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
