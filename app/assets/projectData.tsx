import { Project } from "../types/types";

export const useProjectData = (): Project[] => {
  return [
    {
      title: "cabana",
      slug: "cabana",
      projeto: "project1_project",
      equipe: "project1_team",
      ano: "2022/2",
      gridSize: 1,
      description: [
        "project1_description1",
        "project1_description2",
        "project1_description3",
        "project1_description4",
      ],
      images: {
        thumbnail: "/projects/project1/image1.jpg",
        gallery: [
          "/projects/project1/image1.jpg",
          "/projects/project1/image2.jpg",
        ],
        plants: [
          "/projects/project1/image5.png",
          "/projects/project1/image6.png",
        ],
        secondary: [
          { src: "/projects/project1/image3.jpg", size: "large" },
          { src: "/projects/project1/image4.jpg", size: "medium" },
        ],
      },
    },
    {
      title: "percurso",
      slug: "percurso",
      projeto: "project2_project",
      equipe: "project2_team",
      ano: "2022/1",
      gridSize: 2,
      description: [
        "project2_description1",
        "project2_description2",
        "project2_description3",
        "project2_description4",
      ],
      images: {
        thumbnail: "/projects/project2/image1.jpg",
        gallery: [
          "/projects/project2/image1.jpg",
          "/projects/project2/image2.jpg",
          "/projects/project2/image3.jpg",
          "/projects/project2/image4.jpg",
          "/projects/project2/image5.jpg",
          "/projects/project2/image6.jpg",
        ],
        plants: [
          "/projects/project2/image8.png",
          "/projects/project2/image9.png",
        ],
        secondary: [{ src: "/projects/project2/image7.png", size: "medium" }],
      },
    },
    {
      title: "loft 6x6",
      slug: "loft_6x6",
      projeto: "project3_project",
      equipe: "project3_team",
      ano: "2021/1",
      gridSize: 1,
      description: [
        "project3_description1",
        "project3_description2",
        "project3_description3",
        "project3_description4",
      ],
      images: {
        thumbnail: "/projects/project3/image1.jpg",
        gallery: [
          "/projects/project3/image1.jpg",
          "/projects/project3/image2.jpg",
          "/projects/project3/image3.jpg",
          "/projects/project3/image4.jpg",

        ],
        plants: [
          "/projects/project3/image9.png",
          "/projects/project3/image10.png",
         
        ],
        secondary: [
          {src: "/projects/project3/image12.png", size: "large"},
        ]
      },

    },
    {
      title: "quadra cubo",
      slug: "quadra-cubo",
      projeto: "project4_project",
      equipe: "project4_team",
      ano: "2021/1",
      gridSize: 2,
      description: [
        "project4_description1",
        "project4_description2",
        "project4_description3",
      ],
      images: {
        thumbnail: "/projects/project4/image1.jpg",
        gallery: [
          "/projects/project4/image1.jpg",
          "/projects/project4/image2.jpg",
          "/projects/project4/image3.jpg",
          "/projects/project4/image4.jpg",
          "/projects/project4/image5.jpg",
        ],
      },
      embreve: true,
    },
    {
      title: "roissypôle",
      slug: "roissypole",
      projeto: "project5_project",
      equipe: "project5_team",
      ano: "2024/1",
      gridSize: 1,
      description: [
        "project5_description1",
        "project5_description2",
        "project5_description3",
        "project5_description4",
      ],
      images: {
        thumbnail: "/projects/project5/image1.jpg",
        gallery: ["/projects/project5/image1.jpg"],
      },
      embreve: true,
    },
  ];
};