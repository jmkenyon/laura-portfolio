import Image from "next/image";
import  Navbar from "../components/Navbar";
import Translate from "../components/Translate";
import Resume from "../components/Resume";
import SocialIcons from "../components/SocialIcons";

import AboutSection from "../components/AboutSection";

const Page = () => {
  return (
    <div className="px-8 sm:py-8 py-13 bg-white text-black">
      <div className="hidden sm:block">
        {" "}
        <Translate mode="light" />
      </div>
      <Navbar />
      <div className="flex sm:flex-row flex-col">
        <Image
          src="/laura-about.jpg"
          alt="Laura"
          width={350}
          height={600}
          className="lg:ml-30 md:ml-14 sm:ml:8 mt-18  xlg:h-[500px] lg:h-[450px] h-[400px]  w-auto object-cover"
        />
        <AboutSection />
      </div>

      <Resume />
      <SocialIcons />
    </div>
  );
};

export default Page;
