"use client";

import { useProjectData } from "../../assets/projectData";
import Navbar from "@/app/components/Navbar";
import Translate from "@/app/components/Translate";
import EmptyState from "@/app/components/EmptyState";
import ProjectInfo from "@/app/components/ProjectInfo";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const ProjectPage = () => {
  const { t } = useTranslation();
  const params = useParams();
  const projectData = useProjectData();

  const project = useMemo(
    () => projectData.find((proj) => proj.slug === params.projectId),
    [projectData, params.projectId]
  );

  if (!project) {
    return (
      <EmptyState
        title={t("projectNotFound")}
        subtitle={t("projectNotFoundSubtitle")}
        navbar={true}
      />
    );
  }

  if (project.embreve) {
    return (
      <EmptyState
        title={t("comingSoon")}
        subtitle={t("comingSoonSubtitle")}
        navbar={true}
      />
    );
  }

  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-white text-sm text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />
      <div className="pt-12 md:pt-16 max-w-[1600px] mx-auto">
        <Link
          href="/projetos"

          className="label-mono text-foreground-muted link-underline inline-block mb-6"
        >
          ← {t("indexLink")}
        </Link>
        <ProjectInfo project={project} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
