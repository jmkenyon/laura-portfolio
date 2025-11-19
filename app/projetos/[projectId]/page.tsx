"use client"

import { useProjectData } from "../../assets/projectData";
import { Navbar } from "@/app/components/Navbar";
import { Translate } from "@/app/components/Translate";
import EmptyState from "@/app/components/EmptyState";
import ProjectInfo from "@/app/components/ProjectInfo";
import { useParams } from "next/navigation";



const ProjectPage = () => {
  const params = useParams()
  const projectData = useProjectData();

  const project = projectData.find(
    (proj) => proj.slug === params.projectId
  );

  if (!project) {
    return (
      <div className="px-8 sm:py-8 py-13 bg-white">
        <div className="hidde sm:block">
          {" "}
          <Translate mode="light" />
        </div>
        <Navbar />
        <EmptyState
          title="Projeto não encontrado"
          subtitle="A projeto que você procura não existe ou foi removida"
          navbar={false}
        />
      </div>
    );
  }
  return (
    <div className="px-8 sm:py-8 py-13 bg-white text-sm text-black">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />
      <ProjectInfo project={project} />
    </div>
  );
};

export default ProjectPage;
