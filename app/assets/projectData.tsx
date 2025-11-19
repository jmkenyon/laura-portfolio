"use client";

import { useTranslation } from "react-i18next";
import { Project } from "../types/types";

export const useProjectData = (): Project[] => {
  const { t } = useTranslation();
  return [
    {
      title: "cabana",
      slug: "cabana",
      projeto: t("project1_project"),
      equipe: t("project1_team"),
      ano: "2022/2",
      gridSize: 1,
      description: [
        t("project1_description1"),
        t("project1_description2"),
        t("project1_description3"),
        t("project1_description4"),
      ],
      images: {
        thumbnail: "/projects/project1/image1.png",
        gallery: [
          "/projects/project1/image1.png",
          "/projects/project1/image2.png",
        ],
        plants: [
          "/projects/project1/image5.png",
          "/projects/project1/image6.png",
        ],
        secondary: [
          { src: "/projects/project1/image3.png", size: "large" },
          { src: "/projects/project1/image4.png", size: "medium" },
        ],
      },
    },
    {
      title: "percurso",
      slug: "percurso",
      projeto: t("project2_project"),
      equipe: t("project2_team"),
      ano: "2022/1",
      gridSize: 2,
      description: [
        t("project2_description1"),
        t("project2_description2"),
        t("project2_description3"),
        t("project2_description4"),
      ],
      images: {
        thumbnail: "/projects/project2/image1.png",
        gallery: [
          "/projects/project2/image1.png",
          "/projects/project2/image2.png",
          "/projects/project2/image3.png",
          "/projects/project2/image4.png",
          "/projects/project2/image5.png",
          "/projects/project2/image6.png",
        ],
        plants: [
          "/projects/project2/image8.png",
          "/projects/project2/image9.png",
        ],
        secondary: [{ src: "/projects/project2/image7.png", size: "small" }],
      },
    },
    {
      title: "loft 6x6",
      slug: "loft_6x6",
      projeto: t("project3_project"),
      equipe: t("project3_team"),
      ano: "2021/1",
      gridSize: 1,
      description: [
        t("project3_description1"),
        t("project3_description2"),
        t("project3_description3"),
        t("project3_description4"),
      ],
      images: {
        thumbnail: "/projects/project3/image1.png",
        gallery: [
          "/projects/project3/image1.png",
          "/projects/project3/image2.png",
          "/projects/project3/image3.png",
          "/projects/project3/image4.png",
          "/projects/project3/image5.png",
          "/projects/project3/image6.png",
          "/projects/project3/image7.png",
          "/projects/project3/image8.png",
        ],
      },
    },
    {
      title: "quadra cubo",
      slug: "quadra-cubo",
      projeto: t("project4_project"),
      equipe: t("project4_team"),
      ano: "2021/1",
      gridSize: 2,
      description: [
        t("project4_description1"),
        t("project4_description2"),
        t("project4_description3"),
      ],
      images: {
        thumbnail: "/projects/project4/image1.png",
        gallery: [
          "/projects/project4/image1.png",
          "/projects/project4/image2.png",
          "/projects/project4/image3.png",
          "/projects/project4/image4.png",
          "/projects/project4/image5.png",
        ],
      },
    },
    {
      title: "roissypôle",
      slug: "roissypole",
      projeto: t("project5_project"),
      equipe: t("project5_team"),
      ano: "2024/1",
      gridSize: 1,
      description: [
        t("project5_description1"),
        t("project5_description2"),
        t("project5_description3"),
        t("project5_description4"),
      ],
      images: {
        thumbnail: "/projects/project5/image1.png",
        gallery: ["/projects/project5/image1.png"],
      },
    },
  ];
};
