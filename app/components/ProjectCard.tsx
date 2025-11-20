
"use client"

import { useProjectData } from "../assets/projectData";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
    const colSpanMap: Record<number, string> = {
        1: "lg:col-span-1",
        2: "lg:col-span-2",
        3: "lg:col-span-3",
        4: "lg:col-span-4",
      };
    const projectData = useProjectData();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 pt-10">
        {projectData.map((project) => (
          <div
            key={project.slug}
            className={`${colSpanMap[project.gridSize]} col-span-1 p-1`}
          >
            <Link href={`/projetos/${project.slug}`}>
              <div className="relative group w-full 3xl:h-[450px] 2xl:h-[400px] h-[300px]">
                <Image
                  src={project.images.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                <div
                  className="
                      absolute inset-0 
                      flex items-center justify-center
                      bg-black/40
                      text-white text-xl font-medium
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    

                    "
                >
                  <div className="hidden md:flex flex-col gap-1">
                    <p>{project.title}</p>
                    <hr />
                    <p className="text-xs text-center">{project.ano}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="pt-3 pb-10 md:hidden flex flex-col justify-start ">
              <p >{project.title}</p>
              <hr />
              <p className="text-xs pt-1">{project.ano}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ProjectCard