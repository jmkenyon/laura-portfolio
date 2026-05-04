"use client";

import Link from "next/link";
import { memo } from "react";
import { PiInstagramLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const SocialIcons = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-6 mt-16 mb-8 items-center">
      <span className="label-mono text-foreground-muted">{t("elsewhere")} —</span>
      <Link
        href="https://www.instagram.com/lauraconsoni.arq"
        target="_blank"
        rel="noopener noreferrer"

        className="text-foreground-muted hover:text-foreground transition-colors duration-300"
      >
        <PiInstagramLogoThin size={22} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lauraconsoni/"
        target="_blank"
        rel="noopener noreferrer"

        className="text-foreground-muted hover:text-foreground transition-colors duration-300"
      >
        <PiLinkedinLogoThin size={22} />
      </Link>
    </div>
  );
};

export default memo(SocialIcons);
