

export const useCvData = () => {
  return [

    {
      title: "experiences",
      items: [
        { text: "experience1_title" },
        { text: "experience1_company" },
        { text: "experience1_role" },
      ],
    },
    {
      title: "academic",
      items: [
        {
          subtitle: "academic1_title",
          text: ["academic1_institution", "academic1_years"],
        },
        {
          subtitle: "academic2_title",
          text: ["academic2_subtitle", "academic2_years"],
        },
        {
          subtitle: "academic4_title",
          text: ["academic4_subtitle", "academic4_years"],
        },
        {
          subtitle: "academic5_title",
          text: ["academic5_subtitle", "academic5_years"],
        },
        {
          subtitle: "academic6_title",
          text: ["academic6_institution", "academic6_years"],
        },
        {
          subtitle: "academic7_title",
          text: [
            "academic7_subtitle",
            "academic7_institution",
            "academic7_years",
          ],
        },
      ],
    },
    {
      title: "languages",
      items: [
        { text: "language_portuguese" },
        { text: "language_english" },
        { text: "language_french" },
      ],
    },
    {
      title: "competitions",
      items: [
        { text: "competition1_title" },
        { text: "competition1_event" },
        { text: "competition1_year" },
      ],
    },
    {
      title: "publications",
      items: [
        { subtitle: "publication1_title" },
        { text: "publication1_subtitle" },
        { text: "publication1_year" },
      ],
    },
    {
      title: "softwares",
      items: [
        { text: "Autodesk Autocad" },
        { text: "Archicad" },
        { text: "Revit" },
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