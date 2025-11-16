import Image from "next/image";
import { projectData } from "../../assets/projectData";
import { Navbar } from "@/app/components/Navbar";
import { Translate } from "@/app/components/Translate";

interface ProjectPageParams {
  projectId: string;
}

const ProjectPage = async ({ params }: { params: ProjectPageParams }) => {
  const resolvedParams = await params;
  const project = projectData.find(
    (proj) => proj.slug === resolvedParams.projectId
  );

  if (!project) {
    return (
      <div className="px-8 sm:py-8 py-13 bg-white">
        <div className="hidden sm:block">
          {" "}
          <Translate mode="light" />
        </div>
        <Navbar />
        <div className="flex justify-center items-center p-20">
          Project not found
        </div>
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
      <div className="pt-10 flex md:flex-row flex-col gap-[100px]">
        <div className="flex flex-col gap-4">
          <h1>
            <div className="font-semibold text-gray-500">título</div>
            <div>{project.title}</div>
          </h1>
          <h4>
            <div className="font-semibold text-gray-500">projeto</div>
            <div>{project.projeto}</div>
          </h4>
          <h4>
            <div className="font-semibold text-gray-500">equipe</div>
            <div>{project.equipe}</div>
          </h4>
          <h4>
            <div className="font-semibold text-gray-500">ano</div>
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

        <div className="flex flex-col">
          <div className="grid lg:grid-cols-2 grids-cols-1 place-items-center gap-2">
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
          <div className="grid grid-cols-1 gap-2">
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
          <div className="grid grid-cols-1 gap-2 place-items-center">
            {project.images.secondary?.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt=""
                width={item.size === "large" ? 800 : 400}
                height={400}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
