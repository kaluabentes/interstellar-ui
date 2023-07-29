import techItems from "../ExperienceCard/techItems"

const experienceItems = [
  {
    role: "Frontend Developer",
    company: "DBC Company",
    description:
      "Trabalhei para um dos clientes parceiros que possuia uma ferramenta interna. A aplicação exibia dados gerados por um algoritmo de machine learning, o que exigia uma atenção especial à performance devido à grande quantidade de dados envolvidos. Aprender a lidar com a otimização e a manipulação eficiente desses dados, garantindo uma experiência fluida para os usuários, foi um dos principais aprendizados.",
    period: "Jun/2022 - Mai/2023",
    city: "Remoto",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "design-system",
        "react",
        "react-hooks",
        "context-api",
        "nodejs",
        "graphql",
        "jest",
        "testing-library",
        "eslint",
        "styled-components",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Frontend Developer",
    company: "Hotmart",
    description:
      "Trabalhar como engenheiro frontend em uma empresa grande, seguindo metodologias ágeis e colaborando em squads, trouxe aprendizados valiosos em escalabilidade e experiência do usuário. Contribuir para uma ferramenta interna utilizada por milhares de usuários e colaborar no desenvolvimento do design system Cosmos trouxe benefícios como visão mais sistêmica, escalabilidade em grandes design systems, e compreensão da importância da colaboração e agilidade no desenvolvimento.",
    period: "Ago/2021 - Mai/2022",
    city: "Remoto",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "typescript",
        "design-system",
        "vue",
        "nodejs",
        "jest",
        "testing-library",
        "eslint",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Frontend Developer",
    company: "FDTE",
    description:
      "Como frontend developer em uma empresa com diversos clientes, trabalhei no desenvolvimento de aplicativos em React Native, oferecendo experiências móveis de alta qualidade. Além disso, participei de projetos React para web, incluindo um dashboard para controle de fluxo de ônibus do Aeroporto de Guarulhos, em São Paulo. Essa experiência diversificada fortaleceu minhas habilidades e permitiu entregar soluções inovadoras para atender às necessidades dos clientes.",
    period: "Out/2020 - Ago/2021",
    city: "Remoto",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "styled-components",
        "javascript",
        "react",
        "react-hooks",
        "context-api",
        "react-native",
        "redux",
        "nodejs",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Full Stack Developer",
    company: "Mind The Graph",
    description:
      "Atuei como desenvolvedor fullstack, realizando a migração do backend de CodeIgniter para Nest.js e do frontend de vanilla JavaScript para React com Next.js. A transição proporcionou benefícios como arquitetura escalável, modular e baseada em TypeScript, além de criar interfaces dinâmicas, componentes reutilizáveis e renderização do lado do servidor para melhor desempenho. A experiência fortaleceu minha habilidade em tecnologias modernas e sólidas, consolidando meu conhecimento como desenvolvedor fullstack.",
    period: "Abr/2020 - Out/2020",
    city: "Remoto",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "react",
        "react-hooks",
        "context-api",
        "react-native",
        "redux",
        "nodejs",
        "nestjs",
        "php",
        "laravel",
        "styled-components",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Full Stack Developer",
    company: "Desenvolva",
    description:
      "Trabalhei em um projeto de desenvolvimento de um aplicativo móvel utilizando React Native, onde tive a oportunidade de construir a aplicação desde a implementação da funcionalidade em tempo real até a criação de um app nativo cross-platform. Para gerenciar o estado da aplicação, foi adotado uma arquitetura utilizando Redux e Redux Saga, permitindo uma gestão eficiente dos dados e das interações assíncronas. Essa experiência me proporcionou um conhecimento aprofundado em React Native, bem como habilidades avançadas na construção de aplicativos móveis com excelente desempenho e experiência do usuário.",
    period: "Nov/2019 - Abr/2020",
    city: "Florianópolis - SC",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "react",
        "react-hooks",
        "context-api",
        "react-native",
        "redux",
        "nodejs",
        "php",
        "laravel",
        "styled-components",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Frontend Developer",
    company: "Cheesecake Labs",
    description:
      "Como desenvolvedor frontend em uma empresa com clientes estrangeiros e startups, utilizei React.js com Next.js, Storybook e Redux.js para criar interfaces atraentes e dinâmicas. Também trabalhei com Node.js, Django, Python e Wagtail, desenvolvendo aplicativos web robustos e escaláveis. Colaborei com equipes diversificadas, atendendo às demandas das startups em crescimento.",
    period: "Fev/2018 - Out/2019",
    city: "Florianópolis - SC",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "react",
        "next",
        "redux",
        "storybook",
        "nodejs",
        "django",
        "python",
        "wagtail",
        "cssmodules",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Desenhei e implementei temas personalizados no WordPress. Aprendi a criar interfaces atraentes, adicionar funcionalidades dinâmicas e personalizar a experiência do usuário. Aprofundei meus conhecimentos em gerenciamento de conteúdo e customização de temas e plugins, oferecendo soluções únicas para cada projeto.",
    period: "Jan/2017 - Jan/2018",
    company: "Alvo Comunicação Marketing e Inovação",
    city: "Guarapari - ES",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "php",
        "mysql",
        "wordpress",
        "gulp",
        "sass",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Como desenvolvedor fullstack, tive a oportunidade de utilizar o framework Laravel para construir plataformas e sites. Com este framework, pude criar interfaces atraentes, implementar funcionalidades dinâmicas e desenvolver aplicações robustas e escaláveis, proporcionando uma experiência de alta qualidade para os usuários.",
    period: "Jan/2015 - Jul/2016",
    company: "Wikiz Comunicação Digital",
    city: "Guarapari - ES",
    techs: techItems.filter((techItem) =>
      ["html", "css", "javascript", "php", "mysql", "laravel"].includes(
        techItem.name
      )
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Trabalhar no desenvolvimento do sistema interno de gerenciamento de alunos, com módulos como sistema de notas e controle de leitura anual, utilizando tecnologias como HTML, JavaScript, Angular 1, CSS, PHP, OOP, MySQL, Bootstrap, trouxe benefícios como facilidade de acesso às notas, análise do desempenho acadêmico, incentivo à leitura, experiência do usuário agradável e responsiva, além de uma administração eficiente e positiva para educadores e alunos. Construi um app para Android com Angular e Cordova para controlar a leitura de livros.",
    period: "Fev/2013 - Nov/2015",
    company: "Seminário Teológico Servos de Cristo",
    city: "Guarapari - ES",
    techs: techItems.filter((techItem) =>
      ["html", "css", "javascript", "angular", "php", "mysql"].includes(
        techItem.name
      )
    ),
  },
]

export default experienceItems
