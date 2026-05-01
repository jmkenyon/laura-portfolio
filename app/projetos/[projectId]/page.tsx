"use client";

import { useProjectData } from "../../assets/projectData";
import Navbar from "@/app/components/Navbar";
import Translate from "@/app/components/Translate";
import EmptyState from "@/app/components/EmptyState";
import ProjectInfo from "@/app/components/ProjectInfo";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const ProjectPage = () => {
  const params = useParams();
  const projectData = useProjectData();

  const project = useMemo(
    () => projectData.find((proj) => proj.slug === params.projectId),
    [projectData, params.projectId]
  );

  if (!project) {
    return (
      <EmptyState
        title="Projeto não encontrado"
        subtitle="A projeto que você procura não existe ou foi removida"
        navbar={true}
      />
    );
  }

  if (project.embreve) {
    return (
      <EmptyState
        title="em breve"
        subtitle="conteúdo em desenvolvimento"
        navbar={true}
      />
    );
  }

  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-background text-sm text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />
      <div className="pt-12 md:pt-16 max-w-[1600px] mx-auto">
        <a
          href="/projetos"

          className="label-mono text-foreground-muted link-underline inline-block mb-6"
        >
          ← index
        </a>
        <ProjectInfo project={project} />
      </div>
      <footer className="mt-32 pt-10 border-t border-line label-mono text-foreground-muted flex justify-between max-w-[1600px] mx-auto">
        <span>© laura consoni — 2026</span>
        <span>são paulo · paris</span>
      </footer>
    </div>
  );
};

export default ProjectPage;
