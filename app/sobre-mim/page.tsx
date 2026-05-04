"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Translate from "../components/Translate";
import Resume from "../components/Resume";
import SocialIcons from "../components/SocialIcons";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="px-6 sm:px-10 sm:py-10 py-13 bg-white text-foreground min-h-screen">
      <div className="hidden sm:block">
        <Translate mode="light" />
      </div>
      <Navbar />

      <div className="pt-16 md:pt-24 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-end pb-16 mb-2 border-b border-line">
          <div className="md:col-span-7">
            <div className="label-mono text-foreground-muted mb-3">
              {t("profileBio")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              laura <em className="font-serif-italic">consoni</em>
            </h1>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm text-foreground-muted max-w-md md:ml-auto">
              {t("aboutTagline")}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-12 md:gap-20 pt-12">
          <div className="md:sticky md:top-32 md:self-start flex-shrink-0">
            <Image
              src="/laura-about_2.webp"
              alt="Laura about photo"
              width={350}
              height={600}
              className="3xl:h-[700px] 2xl:h-[600px] xlg:h-[500px] lg:h-[450px] h-[400px] w-auto object-cover"
            />
            <div className="mt-3 label-mono text-foreground-muted">
              são paulo · 2026
            </div>
          </div>
          <AboutSection />
        </div>

        <Resume />
        <SocialIcons />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
