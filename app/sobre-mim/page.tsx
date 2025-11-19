"use client"

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Translate } from "../components/Translate";
import Resume from "../components/Resume";
import SocialIcons from "../components/SocialIcons";
import { useTranslation } from "react-i18next";


const Page = () => {
  const { t } = useTranslation();


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
          <h1>[{t("about")}]</h1>
          <p>
            {t("about1")}
          </p>
          <p>
          {t("about2")}
          </p>
          <p>
          {t("about3")}
          </p>
          <p>
          {t("about4")}
          </p>
          <p>
          {t("about5")}
          </p>
          <p>
          {t("about6")}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-6 xmd:mt-25">
        <div className="grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">{t("resume")}</span>
        <div className="grow border-t border-gray-300"></div>
      </div>
      <Resume />
      <SocialIcons />
    </div>
  );
};

export default Page;