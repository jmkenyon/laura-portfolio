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
          {(project.description).map((desc, index) => (
            <p className="py-3" key={index}>
              {t(desc)}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col max-w-[900px] md:max-w-[800px] 3xl:max-w-[1000px]  w-full">
        <div className="grid lg:grid-cols-2 grids-cols-1 place-items-center gap-2 pb-2">
          {project.images.gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} ${index + 1}`}
              height={700}
              width={700}
              className="3xl:w-[500px] md:w-[400px]"
            
            />
          ))}
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
                item.size === "large" ? 800 : item.size === "small" ? 200 : 400
              }
              height={400}
              className="md:w-[300px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
