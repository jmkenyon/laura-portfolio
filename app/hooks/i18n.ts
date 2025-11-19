"use client";

import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      about: "about me",
      projects: "projects",
      contact: "contact",
      sendMessage: "send a message",
      message: "message",
      fullName: "full name",
      send: "send",
      about1:
        "I am an Architecture and Urbanism student, currently completing my 8th semester at Universidade Presbiteriana Mackenzie in São Paulo. I am 22 years old and originally from Santos (SP), where I lived until moving to São Paulo in 2020 to begin my academic journey.",

      about2:
        "Between 2021 and 2022, I took part in the XVIII Institutional Scientific Initiation Journey, developing a research paper on the requalification of ruins under the guidance of Professor Guilherme Michellin from FAU Mackenzie.",

      about3:
        "In 2023, I completed an academic exchange program at ENSAP Val-de-Seine in Paris, where I studied for one year and expanded my theoretical, cultural, and urban perspectives.",

      about4:
        "Since 2022, I have worked as an intern at Shinagawa Arquitetura, an experience that deepened my professional practice and strengthened my interest in projects that connect memory, the city, and contemporary architecture.",

      about5:
        "I have a strong passion for architecture and for its ability to transform urban contexts and historical narratives. I am curious, dedicated, and quick to learn new skills, especially those that broaden my creative and technical autonomy within the design process.",

      about6:
        "I am currently developing my Final Graduation Project (TFG), in which I investigate the requalification of ruins and the city as a living palimpsest, integrating Brazilian and international references to propose new forms of dialogue between past and present.",
      experiences: "experiences",
      academic: "academic",
      languages: "languages",
      competitions: "competitions",
      publications: "publications",
      resume: "resume",
      experience1_title: "Internship",
      experience1_company: "Shinagawa Arquitetura",
      experience1_role: "Architectural project assistant",
      academic1_title: "Bachelor's Degree in Architecture and Urbanism",
      academic1_institution:
        "Presbyterian University Mackenzie, São Paulo - Brazil",
      academic1_years: "2020/1 - present",

      academic2_title: "XVIII Institutional Scientific Initiation Journey",
      academic2_subtitle:
        "“Requalification of Ruins: an analysis based on restoration theories and case studies”",
      academic2_years: "2021/2 - 2022/1",


      academic4_title:
        "III International Symposium on Science, Technology and Innovation",
      academic4_subtitle: "Lecture given on the research conducted on ruins",
      academic4_years: "2022/2",

      academic5_title: "Participation in the elective course Urban Space",
      academic5_subtitle: "Course taught in English",
      academic5_years: "2023/1",

      academic6_title: "Continuous Flow Program - Exchange",
      academic6_institution: "ENSAP Val-de-Seine, Paris - France",
      academic6_years: "2023/2 - 2024/1",

      academic7_title: "Project selected for presentation",
      academic7_subtitle:
        "Presentation of the final S8 project (RoissyPôle) to the architecture division of Charles de Gaulle Airport",
      academic7_institution: "ENSAP Val-de-Seine, Paris - France",
      academic7_years: "2024",
      language_portuguese: "Portuguese - native",
      language_english: "English - fluent",
      language_french: "French - basic",
      competition1_title: "Participation",
      competition1_event: "Tiny House - Volume Zero",
      competition1_year: "2022/2",
      publication1_title:
        "Proceedings of the XVIII Institutional Scientific Initiation Journey",
      publication1_subtitle:
        "“Requalification of Ruins: an analysis based on restoration theories and case studies”",
      publication1_year: "2022/2",
    },
  },
  "pt-BR": {
    translation: {
      welcome: "Bem-vindo!",
      about: "sobre mim",
      projects: "projetos",
      contact: "contato",
      sendMessage: "mande uma mensagem",
      message: "mensagem",
      fullName: "nome completo",
      send: "enviar",
      resume: "currículo",
      about1:
        "Sou estudante de Arquitetura e Urbanismo, atualmente concluindo o 8º semestre na Universidade Presbiteriana Mackenzie, em São Paulo. Tenho 22 anos e sou natural de Santos (SP), cidade da qual me mudei em 2020 para iniciar minha formação acadêmica.",
      about2:
        "Entre 2021 e 2022, participei da XVIII Jornada Institucional de Iniciação Científica, desenvolvendo um artigo sobre requalificação de ruínas, orientado pelo professor Guilherme Michellin, da FAU Mackenzie.",
      about3:
        "Em 2023, realizei um intercâmbio acadêmico na ENSAP Val-de-Seine, em Paris, onde estudei por um ano, ampliando meu repertório teórico, cultural e urbano.",
      about4:
        "Desde 2022, atuei como estagiária no escritório Shinagawa Arquitetura, experiência que aprofundou minha prática profissional e consolidou meu interesse por projetos que articulam memória, cidade e contemporaneidade.",
      about5:
        "Tenho uma forte paixão pela arquitetura e pela capacidade que ela tem de transformar contextos urbanos e narrativas históricas. Sou curiosa, dedicada e tenho facilidade em aprender novas habilidades, especialmente aquelas que ampliam minha autonomia criativa e técnica dentro do processo de projeto.",
      about6:
        "Atualmente, desenvolvo meu Trabalho Final de Graduação (TFG), no qual investigo a requalificação de ruínas e a cidade como palimpsesto vivo, integrando referências brasileiras e internacionais para propor novas formas de diálogo entre passado e presente.",
      experiences: "experiências",
      academic: "acadêmico",
      languages: "idiomas",
      competitions: "competições",
      publications: "publicações",
      experience1_title: "Estágio",
      experience1_company: "Shinagawa Arquitetura",
      experience1_role: "Auxiliar de projetos arquitetônicos",
      academic1_title: "Graduação em Arquitetura e Urbanismo",
      academic1_institution:
        "Universidade Presbiteriana Mackenzie, São Paulo - Brasil",
      academic1_years: "2020/1 - atual",

      academic2_title: "XVIII Jornada Institucional de Iniciação Científica",
      academic2_subtitle:
        "“Requalificação de Ruínas: uma análise apartir das teorias de restauro e estudos de caso”",
      academic2_years: "2021/2 - 2022/1",

  
      academic4_title:
        "III Simpósio Internacional de Ciência, Tecnologia e Inovação",
      academic4_subtitle:
        "Palestra ministrada sobre a pesquisa realizada sobre ruínas",
      academic4_years: "2022/2",

      academic5_title: "Participação da matéria optativa Urban Space",
      academic5_subtitle: "Componente ministrado em inglês",
      academic5_years: "2023/1",

      academic6_title: "Programa Fluxo Contínuo - Intercâmbio",
      academic6_institution: "ENSAP Val-de-Seine, Paris - França",
      academic6_years: "2023/2 - 2024/1",

      academic7_title: "Projeto selecionado para apresentação",
      academic7_subtitle:
        "Apresentação do projeto final S8 (RoissyPôle) para a divisão de arquitetura do Aeroporto Charles de Gaulle",
      academic7_institution: "ENSAP Val-de-Seine, Paris - França",
      academic7_years: "2024",
      language_portuguese: "Português - nativo",
      language_english: "Inglês - fluente",
      language_french: "Francês - básico",
      competition1_title: "Participação",
      competition1_event: "Tiny House - Volume Zero",
      competition1_year: "2022/2",
      publication1_title:
        "Anais da XVIII Jornada Institucional de Iniciação Científica",
      publication1_subtitle:
        "“Requalificação de Ruínas: uma análise apartir das teorias de restauro e estudos de caso”",
      publication1_year: "2022/2",
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "pt-BR",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
