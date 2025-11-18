import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Translate } from "../components/Translate";
import Resume from "../components/Resume";
import SocialIcons from "../components/SocialIcons";


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
        <div className="flex flex-col gap-8 py-18 lg:px-20 md:px-16 sm:px-10 justify-start max-w-lg text-sm">
          <h1>[sobre mim]</h1>
          <p>
            Sou uma estudante de arquitetura, atualmente no 8º semestre na
            Universidade Presbiteriana Mackenzie, em São Paulo. Tenho 22 anos,
            sou natural de Santos (SP) e me mudei para São Paulo em 2020 para
            cursar a faculdade.
          </p>
          <p>
            Entre 2021 e 2022, participei da XVIII Jornada Institucional de
            Iniciação Científica, onde submeti um artigo sobre requalificação de
            ruínas, orientado pelo professor Guilherme Michellin, da FAU
            Mackenzie.
          </p>
          <p>
            Em 2023, realizei um intercâmbio na França na ENSAP Val-de-Seine, em
            Paris, onde estudei por um ano.
          </p>
        </div>
      </div>
      <div className="flex items-center mb-6 xmd:mt-25">
        <div className="grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">currículo</span>
        <div className="grow border-t border-gray-300"></div>
      </div>
      <Resume />
      <SocialIcons />
    </div>
  );
};

export default Page;