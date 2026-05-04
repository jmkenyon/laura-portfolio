import Navbar from "../components/Navbar";
import Translate from "../components/Translate";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-white text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />
      <div className="pt-16 md:pt-24 max-w-[1600px] mx-auto">
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
