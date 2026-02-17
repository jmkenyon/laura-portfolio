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

      academic6_title: "Fluxo Contínuo Program - Exchange",
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
      title: "title",
      project: "project",
      team: "team",
      year: "year",
      project1_project: "competition",
      project1_team: "individual",
      project1_description1:
        "The Tiny House movement gained strength worldwide, driven by the need for adaptable housing that captured the interest of homeowners. Considering these factors, the Tiny House project was designed as an off-grid system, functioning without urban infrastructure.",
      project1_description2:
        "With this in mind, the site was chosen for its isolation, further emphasizing the absence of human resources. Located in the Scottish Highlands, “The Lake House” has 25 m² and is based on a cozy concept, with open access to the surrounding landscape, making the environment part of the architecture.",
      project1_description3:
        "Inside the house, oak wood was primarily used, bringing warmth to the space and maintaining natural materials.",
      project1_description4:
        "The system that operates the house is located in a small area at the back of the cabin. Inside are the rainwater harvesting system, the water heating system, and the plumbing equipment. The house is managed by three different compartments that make up the wastewater system: the fresh water tank, the gray water tank, and the energy supplied by solar panels.",

      project2_project: "academic - u. presbiteriana mackenzie",
      project2_team: "individual",
      project2_description1:
        "The project adopted the movement of waves and how they behave in the presence of wind as its design concept. Located on a mountainous site with a stream crossing through it, the pathway is structurally composed of 17 modules measuring 5.85m x 6.20m, totaling a 100m-long walkway with 6m of interior width.",
      project2_description2:
        "For its construction, glued laminated timber (GLT) was used, a structural material produced by bonding individual wood segments with industrial adhesives, as well as concrete for the foundation pillar measuring 1.20m x 2.80m in diameter. Finally, metal components were used for all connections, from 8mm-thick steel plates to steel cables fastening the frames together.",
      project2_description3:
        "The structure is composed of wooden slats measuring 0.25m x 0.10m which, when connected, form frames that imitate the movement of the water surface below the project. This composition allows light to enter, creating an impressive play of light and shadow on the floor.",
      project2_description4:
        "Thus, this pathway becomes a place for staying and contemplating nature, rather than simply a route whose sole purpose is crossing. The goal was to create a space for reflection and awareness of how it integrates with its surroundings.",

      project3_project: "academic - u. presbiteriana mackenzie",
      project3_team: "individual",
      project3_description1:
        "Based on the creation of the Quadra Cubo, 6m x 6m lofts were developed to form its composition. The units were built with a metal structure and drywall walls supported by a steel frame.",
      project3_description2:
        "The layout was designed with the comfort and well-being of future residents in mind.",
      project3_description3:
        "Designed to accommodate a maximum of three people, the loft has a spacious ground floor integrating the living room and kitchen, optimizing the available area.",
      project3_description4:
        "On the second level, the mezzanine was designed with a main double bed and another single bed embedded in the closet, allowing flexible use depending on each family's needs.",

      project4_project: "academic - u. presbiteriana mackenzie",
      project4_team: "individual",
      project4_description1:
        "The project is based on the creation of a mixed-use space (commercial + residential), welcoming and relaxed, promoting comfort and interaction among residents and visitors.",
      project4_description2:
        "Situated within a 100m x 100m block, the proposal began with the division into 16 modules of approximately 18m x 18m, all sharing the same structural base.",
      project4_description3:
        "Within each division, the cubes (lofts and shops) were arranged organically, creating a free-form layout that stimulates the creativity of residents and the surrounding community.",

      project5_project: "academic - ensap val-de-seine",
      project5_team: "ana julia maciel and laura consoni",
      project5_description1:
        "RoissyPole is a multifunctional complex at Charles de Gaulle Airport in Paris, offering a wide range of services and conveniences for travelers and aviation professionals. With hotels, offices, shops, restaurants, and conference centers, RoissyPole serves millions of passengers annually, functioning as an important economic and logistical hub.",
      project5_description2:
        "In addition to its services, RoissyPole is highly accessible due to its integration with Paris' public transportation system, including high-speed trains (TGV), the RER, and buses, ensuring easy access to the city center and other regions.",
      project5_description3:
        "Our project aims to improve the interaction between passengers, station employees, and complex workers by providing a better-equipped and better-organized space. The reorganization of the CDGVAL transport system facilitates circulation, while the new layout of the station's internal equipment creates an intuitive flow for visitors.",
      project5_description4:
        "Furthermore, the creation of aluminum and canvas modules, inspired by the original mushroom-shaped pillars, connects the station to the bus terminal. We activated the southern zone by extending the canopy, transforming an obsolete area into a gastronomic space with improved connection to the exterior. Finally, the central area becomes more inviting, offering various facilities for sales, waiting, and information.",
      success: "email sent",
      sending: "sending..."
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
      title: "título",
      project: "projeto",
      team: "equipe",
      year: "ano",

      project1_project: "competição",
      project1_team: "individual",
      project1_description1:
        "O movimento Tiny House ganhou força em todo o mundo, com o surgimento da necessidade de uma casa adaptável que despertou o interesse dos proprietários. Considerando esses fatores, o projeto da Tiny House foi feito para ser um sistema off-grid, mantendo o uso sem infraestrutura urbana.",
      project1_description2:
        "Pensando nisso, o local foi escolhido considerando seu isolamento, acentuando ainda mais a falta de recursos humanos. Localizada nas Terras Altas da Escócia, “The Lake House” tem 25 m² e se baseia em um conceito acolhedor, com acesso aberto ao paisagismo, tornando o ambiente parte da arquitetura.",
      project1_description3:
        "No interior da casa, foi usada principalmente a madeira de carvalho, trazendo aconchego ao espaço e mantendo os materiais naturais.",
      project1_description4:
        "O sistema que comanda a casa fica em uma pequena área na parte de trás da cabine. Dentro do espaço fica o sistema de captação de chuva, aquecimento de água e os equipamentos de plumbing. A casa é gerida por três compartimentos diferentes que constituem o 'esgoto': o tanque de água doce, o tanque de águas cinzas e a energia é fornecida por painéis solares.",

      project2_project: "acadêmico - u. presbiteriana mackenzie",
      project2_team: "individual",
      project2_description1:
        "O projeto tomou como partido a movimentação das ondas e como elas se comportam na presença dos ventos. Localizado em um terreno montanhoso, com a passagem de um riacho transitando em seu curso, o percurso é composto estruturalmente por 17 módulos de 5.85m x 6.20m, totalizando uma passarela de 100m de comprimento e 6m de espaço interno de largura.",
      project2_description2:
        "Para sua formação, foi utilizada a madeira laminada colada (MLC), que é um material estrutural fabricado através da união de segmentos individuais de madeira colados com adesivos industriais, e o concreto para o pilar de fundação de 1.20m x 2.80m de diâmetro. Por fim, para todas as conexões, foram utilizadas peças metálicas, desde chapas de 8mm de espessura até cabos de aço para a fixação dos pórticos entre si.",
      project2_description3:
        "A obra é composta por ripas de madeira de 0.25m x 0.10m que, quando conectadas, formam pórticos que imitam o movimento da superfície da água situada abaixo do projeto. Assim, sua composição permite a entrada de luz, formando um incrível jogo de luz e sombra no piso.",
      project2_description4:
        "Dessa forma, este percurso seria um espaço de permanência e contemplação da natureza, e não somente um trajeto cujo único intuito é a travessia. O objetivo foi a criação de um espaço de reflexão e de percepção de como ele se integra ao seu meio.",

      project3_project: "acadêmico - u. presbiteriana mackenzie",
      project3_team: "individual",
      project3_description1:
        "A partir da criação da Quadra Cubo, lofts de 6m x 6m foram criados para construir sua composição. As unidades foram feitas por uma estrutura metálica e suas paredes, de drywall sustentadas pelo Steel Frame.",
      project3_description2:
        "A disposição do layout foi pensada visando o conforto e o bem-estar das pessoas que ali irão residir.",
      project3_description3:
        "Planejada para acolher no máximo 3 pessoas, o loft conta com um amplo espaço disponível no térreo que integra a sala e a cozinha para uma otimização do espaço disponível.",
      project3_description4:
        "Já no segundo nível do loft, o mezanino foi projetado com uma cama principal de casal e outra de solteiro embutida no armário, sendo a decisão de sua utilização de acordo com a necessidade de cada família.",

      project4_project: "acadêmico - u. presbiteriana mackenzie",
      project4_team: "individual",
      project4_description1:
        "O projeto tem como partido a criação de um espaço misto (comercial + residencial), acolhedor e descontraído, que promova o conforto e o convívio entre os moradores e visitantes do local.",
      project4_description2:
        "Situado em uma quadra de 100m x 100m, a proposta partiu da divisão em 16 módulos, de aproximadamente 18m x 18m, com a estrutura base igual para todos.",
      project4_description3:
        "Dentro de cada divisão foi espacializado os cubos (lofts e lojas) de forma orgânica, de modo a criar um desenho livre que estimula a criatividade dos moradores do local e seus arredores.",

      project5_project: "acadêmico - ensap val-de-seine",
      project5_team: "ana julia maciel e laura consoni",
      project5_description1:
        "RoissyPôle é um complexo multifuncional no Aeroporto Charles de Gaulle, em Paris, oferecendo uma ampla gama de serviços e conveniências para viajantes e profissionais da aviação. Com hotéis, escritórios, lojas, restaurantes e centros de conferências, o RoissyPôle atende milhões de passageiros anualmente, funcionando como um importante centro econômico e logístico. Sua localização estratégica dentro do principal aeroporto da França facilita negócios e parcerias internacionais em um ambiente globalizado.",

      project5_description2:
        "Além de seus serviços, o RoissyPôle é altamente acessível devido à sua integração com o sistema de transporte público de Paris, incluindo trens de alta velocidade (TGV), RER e ônibus, garantindo fácil acesso ao centro da cidade e outras regiões. Essa conectividade melhora a experiência para visitantes e profissionais, fazendo do RoissyPôle uma parte vital do Aeroporto Charles de Gaulle e contribuindo para sua posição como um dos principais centros de aviação do mundo.",

      project5_description3:
        "Nosso projeto visa aprimorar a interação entre passageiros, funcionários da estação e trabalhadores do complexo, proporcionando um espaço melhor equipado e organizado. A reorganização do sistema de transporte CDGVAL facilita a circulação, enquanto a nova disposição dos equipamentos internos da estação cria um fluxo intuitivo para novos visitantes.",

      project5_description4:
        "Além disso, a criação de módulos de alumínio e lona, inspirados nos pilares originais em forma de cogumelo, conecta a estação ao terminal de ônibus. Ativamos a zona sul do projeto estendendo a cobertura, transformando uma área obsoleta em um espaço gastronômico com melhor conectividade com o exterior. Por fim, a área central torna-se mais convidativa, apresentando diversas instalações de venda, espera e informação.",
      success: "email enviado",
      sending: "enviando..."
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
