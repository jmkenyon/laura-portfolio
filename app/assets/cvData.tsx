"use client";

import { useTranslation } from "react-i18next";

export const useCvData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("experiences"),
      items: [
        { text: t("experience1_title") },
        { text: t("experience1_company") },
        { text: t("experience1_role") },
      ],
    },
    {
      title: t("academic"),
      items: [
        {
          subtitle: t("academic1_title"),
          text: [t("academic1_institution"), t("academic1_years")],
        },
        {
          subtitle: t("academic2_title"),
          text: [t("academic2_subtitle"), t("academic2_years")],
        },
  
        {
          subtitle: t("academic4_title"),
          text: [t("academic4_subtitle"), t("academic4_years")],
        },
        {
          subtitle: t("academic5_title"),
          text: [t("academic5_subtitle"), t("academic5_years")],
        },
        {
          subtitle: t("academic6_title"),
          text: [t("academic6_institution"), t("academic6_years")],
        },
        {
          subtitle: t("academic7_title"),
          text: [
            t("academic7_subtitle"),
            t("academic7_institution"),
            t("academic7_years"),
          ],
        },
      ],
    },
    {
      title: t("languages"),
      items: [
        { text: t("language_portuguese") },
        { text: t("language_english") },
        { text: t("language_french") },
      ],
    },
    {
      title: t("competitions"),
      items: [
        { text: t("competition1_title") },
        { text: t("competition1_event") },
        { text: t("competition1_year") },
      ],
    },
    {
      title: t("publications"),
      items: [
        { subtitle: t("publication1_title") },
        { text: t("publication1_subtitle") },
        { text: t("publication1_year") },
      ],
    },
    {
      title: "softwares",
      items: [
        { text: "Autodesk Autocad" },
        { text: "Archicad" },
        { text: "Rhinoceros" },
        { text: "Sketchup" },
        { text: "Caos Vray" },
        { text: "Twinmotion" },
        { text: "Adobe Photoshop" },
        { text: "Adobe Indesign" },
        { text: "Adobe Illustrator" },
        { text: "Adobe Lightroom" },
      ],
    },
  ];
};
