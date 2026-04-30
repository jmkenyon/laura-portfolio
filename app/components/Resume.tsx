"use client";
import { useTranslation } from "react-i18next";
import { useCvData } from "../assets/cvData";
import { BiLink } from "react-icons/bi";
import { motion } from "motion/react";

const Resume = () => {
  const { t } = useTranslation();
  const cvData = useCvData(t);

  return (
    <section className="mt-32">
      <div className="flex items-center mb-16">
        <div className="grow border-t border-line" />
        <span className="mx-6 label-mono text-foreground-muted">
          ◇ {t("resume")}
        </span>
        <div className="grow border-t border-line" />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
        {cvData.map((section, sectionIndex) => (
          <motion.div
            key={t(section.title)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: (sectionIndex % 3) * 0.08,
            }}
            className="break-inside-avoid pb-12 max-w-sm text-sm"
          >
            <h2 className="label-mono text-foreground-muted mb-4">
              [ {t(section.title)} ]
            </h2>
            {section.items.map((item, index) => (
              <div key={index} className="mb-3">
                {"subtitle" in item && item.subtitle && (
                  <h3 className="font-light text-sm mt-3 mb-1">
                    {t(item.subtitle)}
                  </h3>
                )}
                {item.text &&
                  (Array.isArray(item.text) ? (
                    item.text.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-sm text-foreground/85 leading-relaxed"
                      >
                        {typeof line === "string" ? t(line) : line}{" "}
                        {typeof line !== "string" && (
                          <BiLink className="inline" color="currentColor" />
                        )}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      {typeof item.text === "string" ? t(item.text) : item.text}
                      {typeof item.text !== "string" && (
                        <BiLink className="inline" color="currentColor" />
                      )}
                    </p>
                  ))}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
