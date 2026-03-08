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
        thumbnail: "/projects/project1/image8_1.webp",
        gallery: [
          "/projects/project1/image7_1.webp",
          "/projects/project1/image8_1.webp",
        ],
        plants: [
          "/projects/project1/image6_1.webp",
          "/projects/project1/image5_1.webp",
        ],
        secondary: [
          { src: "/projects/project1/image3.webp", size: "large" },
        ],
        doublePlants: [
          "/projects/project1/image9_1.webp",
          "/projects/project1/image10_1.webp",
        ]

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
        thumbnail: "/projects/project2/image1.webp",
        gallery: [
          "/projects/project2/image1.webp",
          "/projects/project2/image2.webp",
          "/projects/project2/image3.webp",
          "/projects/project2/image4.webp",
          "/projects/project2/image5.webp",
          "/projects/project2/image6.webp",
        ],
        plants: [
          "/projects/project2/image8.png",
          "/projects/project2/image9.webp",
        ],
        secondary: [{ src: "/projects/project2/image7.webp", size: "medium" }],
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
        thumbnail: "/projects/project3/image13.webp",
        gallery: [
          "/projects/project3/image13.webp",
          "/projects/project3/image14.webp",
          "/projects/project3/image15.webp",
          "/projects/project3/image16.webp",

        ],
        plants: [
          "/projects/project3/image9.webp",
          "/projects/project3/image10.webp",
         
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
        thumbnail: "/projects/project4/image11.webp",
        gallery: [
          "/projects/project4/image6.webp",

        ],
        doublePlants: 
        [

          "/projects/project4/image9.webp",
          "/projects/project4/image10.webp",
          "/projects/project4/image11.webp",
          "/projects/project4/image12.webp",

          "/projects/project4/image7.webp",
          "/projects/project4/image8.webp",
        ]
      },

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
      padding: "pt-20",
      images: {
        thumbnail: "/projects/project5/image7.webp",
        gallery: 
        [
          "/projects/project5/image7.webp",

        ],
        plants: [
          "/projects/project5/image2.webp",
          "/projects/project5/image10.webp",
          "/projects/project5/image11.webp",
        ],
        doublePlants : [
          "/projects/project5/image8.webp",
          "/projects/project5/image9.webp",
        ]
      },

    },
  ];
};