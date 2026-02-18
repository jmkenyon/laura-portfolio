"use client"

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
     const { t } = useTranslation();
     const aboutArray = useMemo(() => 
      ["about1", "about2", "about3", "about4", "about5", "about6"],
     []
    )
     

  return (
    <div className="flex flex-col gap-8 py-18 lg:px-20  md:px-10 justify-start xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl  max-w-xl text-sm">
    <h1>[{t("about")}]</h1>
    {aboutArray.map((para, index) => (
      <p key={index}>{t(para)}</p>
    ))}
  </div>
  )
}

export default AboutSection