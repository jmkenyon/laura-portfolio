import { Navbar } from "../components/Navbar";
import { Translate } from "../components/Translate";

import ProjectCard from "../components/ProjectCard";

const Page = () => {

  return (
    <div className="px-8 sm:py-8 py-13 bg-white text-black">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />
      <ProjectCard /> 
    </div>
  );
};

export default Page;
