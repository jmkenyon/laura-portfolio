"use client";

import React, { memo } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

interface TranslateProps {
  mode: "light" | "dark";
}

const Translate = ({ mode }: TranslateProps) => {
  const { i18n } = useTranslation();
  const [isActive, setIsActive] = React.useState(
    i18n.language === "pt-BR" ? "port" : "eng"
  );

  const changeLang = (lang: "port" | "eng") => {
    setIsActive(lang);
    i18n.changeLanguage(lang === "port" ? "pt-BR" : "en");
  };

  const muted = mode === "dark" ? "text-white/45" : "text-foreground-muted/70";
  const live = mode === "dark" ? "text-white" : "text-foreground";

  return (
    <div className="flex justify-end pb-6 pt-3 label-mono space-x-3">
      <button
        data-cursor="PT"
        className={cn(
          "transition-colors duration-300",
          isActive === "port" ? live : muted
        )}
        onClick={() => changeLang("port")}
      >
        pt
      </button>
      <span className={muted}>·</span>
      <button
        data-cursor="EN"
        className={cn(
          "transition-colors duration-300",
          isActive === "eng" ? live : muted
        )}
        onClick={() => changeLang("eng")}
      >
        en
      </button>
    </div>
  );
};

export default memo(Translate);
