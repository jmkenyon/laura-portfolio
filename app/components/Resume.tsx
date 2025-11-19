"use client";
import { useTranslation } from "react-i18next";
import { useCvData } from "../assets/cvData";

const Resume = () => {
  const cvData = useCvData();
  const { t } = useTranslation();

  

  return (
    <>
      <div className="flex items-center mb-6 xmd:mt-25">
        <div className="grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">{t("resume")}</span>
        <div className="grow border-t border-gray-300"></div>
      </div>
      <div className="columns-1 sm:columns-2 gap-8 lg:ml-30 md:ml-14 sm:ml:8 mt-18">
        {cvData.map((section) => (
          <div
            key={t(section.title)}
            className="break-inside-avoid pb-18 max-w-sm text-sm"
          >
            <h2 className="mb-4">[{t(section.title)}]</h2>
            {section.items.map((item, index) => (
              <div key={index}>
                {"subtitle" in item && item.subtitle && (
                  <h3 className="font-light mt-4 text-sm">
                    {t(item.subtitle)}
                  </h3>
                )}
                {item.text &&
                  (Array.isArray(item.text) ? (
                    item.text.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-sm">
                        {t(line)}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm">{t(item.text)}</p>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Resume;
