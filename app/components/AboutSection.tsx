"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const AboutSection = () => {
  const { t } = useTranslation();
  const aboutArray = useMemo(
    () => ["about1", "about2", "about3", "about4", "about5", "about6"],
    []
  );

  return (
    <div className="flex flex-col gap-8 py-12 lg:px-16 md:px-10 max-w-2xl">
      <div className="label-mono text-foreground-muted">[ {t("about")} ]</div>
      {aboutArray.map((para, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.05,
          }}
          className="text-sm leading-relaxed"
        >
          {t(para)}
        </motion.p>
      ))}
    </div>
  );
};

export default AboutSection;
