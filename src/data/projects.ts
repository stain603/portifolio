export type ProjectStatus = "Em produção" | "Concluído" | "Em desenvolvimento";

export type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  thumbnail?: string;
  images?: string[];
  tags: string[];
  link?: string;
  githubLink?: string;
  features?: string[];
  objetivo: string;
  atuacao: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "FINN",
    description:
      "Sistema de gestão comercial para controle de clientes e transações",
    fullDescription:
      "O FINN é uma aplicação web progressiva (PWA) desenvolvida para auxiliar pequenos negócios e profissionais autônomos na gestão de clientes, empréstimos e transações financeiras. O sistema centraliza todas as informações em uma única plataforma, automatizando cálculos, acompanhamento de pagamentos e organização da carteira de clientes.\n\nEntre as funcionalidades estão o gerenciamento de clientes, controle de contratos e parcelas, resumos financeiros diários, semanais, mensais e anuais, dashboards da carteira, alertas de cobranças, acompanhamento de inadimplência e geração automática de indicadores.\n\nO projeto foi desenvolvido por mim desde a concepção da interface até a implementação da aplicação, com foco em desempenho, usabilidade e experiência do usuário.",
    thumbnail: "/src/assets/images/mockup-finn.jpeg",
    tags: ["React Native", "TypeScript", "css","Tailwind CSS", "PWA", "API REST", "Supabase","python","libs-react native"],
    link: "#https://fin-n.vercel.app/",
    githubLink: "https://github.com/stain603/FinN",
    features: [
      "Gerenciamento de clientes",
      "Controle de contratos e parcelas",
      "Resumos financeiros diários, semanais, mensais e anuais",
      "Dashboards da carteira",
      "Alertas de cobranças",
      "Acompanhamento de inadimplência",
      "Geração automática de indicadores",
    ],
    images: [
      "/src/assets/images/fin-05.png",
      "/src/assets/images/fin-02.jpeg",
      "/src/assets/images/fin-03.jpeg",
      "/src/assets/images/fin-01.jpeg",
    ],
    objetivo:
      "Auxiliar pequenos negócios e autônomos na gestão de clientes e finanças",
    atuacao: "Concepção da interface até a implementação completa da aplicação",
    status: "Em produção",
  },
  {
    id: 2,
    title: "KOMPO",
    description: "Biblioteca de componentes reutilizáveis para aplicações React",
    fullDescription:
      "O KOMPO nasceu da necessidade de acelerar o desenvolvimento de interfaces modernas através de uma biblioteca própria de componentes reutilizáveis.\n\nO projeto reúne componentes desenvolvidos em React que podem ser copiados, personalizados e reutilizados em diferentes aplicações, reduzindo tempo de desenvolvimento e mantendo consistência visual entre projetos.\n\nAlém dos componentes, a plataforma possui documentação, exemplos de uso e organização pensada para facilitar a integração em novos projetos.\n\nFoi desenvolvido integralmente por mim como uma ferramenta de produtividade para meus próprios projetos e futuras aplicações.",
    thumbnail: "/src/assets/images/mockup-kompo.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Component Design","Zustand"],
    link: "#https://k0mpo-t22pc9s4r-stain603s-projects.vercel.app",
    githubLink: "https://github.com/stain603/K0mpo",
    features: [
      "Componentes React reutilizáveis",
      "Documentação de uso",
      "Exemplos práticos",
      "Organização para fácil integração",
    ],
    images: ["/src/assets/images/kompo-01.png","/src/assets/images/kompo-02.png","/src/assets/images/kompo-03.png"],
    objetivo:
      "Acelerar o desenvolvimento de interfaces com componentes reutilizáveis",
    atuacao: "Desenvolvimento integral da biblioteca, documentação e exemplos",
    status: "Concluído",
  },
  {
    id: 3,
    title: "Cabedelo Cidadão",
    description: "Sistema municipal de serviços digitais para cidadãos",
    fullDescription:
      "Participei do desenvolvimento da nova interface do Cabedelo Cidadão, sendo responsável pela concepção e implementação do Front-end da plataforma.\n\nMeu trabalho envolveu a criação da identidade visual da aplicação, definição da experiência do usuário, desenvolvimento da interface responsiva e implementação de novas funcionalidades em conjunto com a equipe de desenvolvimento.\n\nO objetivo do sistema era centralizar diversos serviços públicos municipais em uma única plataforma moderna, acessível e intuitiva para a população.\n\nEssa experiência fortaleceu meus conhecimentos em desenvolvimento Front-end, colaboração em equipe, organização de projetos e construção de interfaces voltadas para uso em larga escala.",
    thumbnail: "/src/assets/images/cab-cidadao.png",
    tags: ["React", "Tailwind CSS", "UI Design", "UX Design","java","spring boot","api rest","postgresql"],
    link: "#",
    githubLink: "https://github.com/stain603/cabedelo-cidadao",
    features: [
      "Desenvolvimento Front-end",
      "UI Design",
      "UX Design",
      "Implementação de novas funcionalidades",
      "Trabalho colaborativo com equipe de desenvolvimento",
    ],
    images: ["/src/assets/images/cab-01.jfif","/src/assets/images/cab-cll.jfif","/src/assets/images/cab-02.jfif","/src/assets/images/cab-03.jfif","/src/assets/images/cab-04.jfif"],
    objetivo:
      "Centralizar serviços públicos municipais em uma plataforma moderna",
    atuacao: "Front-end, UI/UX Design, integração com APi, implementação de novas funcionalidades em equipe",
    status: "Concluído",
  },
  {
    id: 4,
    title: "Dog._.List",
    description: "Landing page educativa sobre grupos caninos",
    fullDescription:
      "O Dog._.List é uma landing page desenvolvida para apresentar informações introdutórias sobre os cinco principais grupos de cães reconhecidos internacionalmente.\n\nO objetivo do projeto é facilitar o primeiro contato dos usuários com o universo canino através de uma interface simples, organizada e visualmente agradável, servindo como porta de entrada para conteúdos mais completos sobre cada grupo.\n\nO foco principal esteve na construção de uma experiência de navegação intuitiva e em um design limpo voltado para leitura.",
    thumbnail: "/src/assets/images/dog-list.png",
    tags: ["html", "css","javascript", "UI/UX Design", "Responsividade"],
    link: "#https://stain603.github.io/Dog._.list/lading%20page_dog",
    githubLink: "https://github.com/stain603/Dog._.list",
    features: [
      "Apresentação dos cinco grupos caninos",
      "Navegação intuitiva",
      "Design limpo voltado para leitura",
      "Interface responsiva",
    ],
    images: ["/src/assets/images/dog-01.png","/src/assets/images/dog-02.png","/src/assets/images/dog-03.png"],
    objetivo:
      "Facilitar o primeiro contato com o universo canino de forma visual",
    atuacao: "Design e desenvolvimento completo da landing page para testar conhecimentos",
    status: "Concluído",
  },
  {
    id: 5,
    title: "Inventory Manager",
    description: "Sistema completo para gestão de estoque e produção",
    fullDescription:
      "O Inventory Manager foi desenvolvido como parte de um processo seletivo técnico, com o objetivo de demonstrar conhecimentos em desenvolvimento Full Stack.\n\nO sistema permite gerenciar produtos, matérias-primas e processos de produção, integrando Front-end, Back-end, banco de dados, APIs REST e testes automatizados em uma única aplicação.\n\nDurante o desenvolvimento foram aplicados conceitos de arquitetura de software, organização em camadas, integração entre serviços, persistência de dados e boas práticas de desenvolvimento.\n\nFoi um projeto importante para consolidar conhecimentos além da interface, abrangendo todo o ciclo de desenvolvimento de uma aplicação.",
    thumbnail: "/src/assets/images/invent-manager.png",
    tags: [
      "React",
      "Node.js",
      "Java",
      "Spring Boot",
      "API REST",
      "PostgreSQL",
      "Testes Unitários",
      "Arquitetura em Camadas",
    ],
    link: "#",
    githubLink: "https://github.com/stain603/industrial-inventory-manager",
    features: [
      "Gestão de produtos e matérias-primas",
      "Processos de produção",
      "APIs REST",
      "Persistência em banco relacional",
      "Testes automatizados",
      "Arquitetura em camadas",
    ],
    images: ["/src/assets/images/invent-01.jfif","/src/assets/images/invent-02.jfif","/src/assets/images/invent-03.jfif"],
    objetivo:
      "Demonstrar conhecimentos Full Stack em processo seletivo técnico",
    atuacao: "Full Stack, front-end, back-end, banco de dados, APIs REST e testes",
    status: "Concluído",
  },
  {
    id: 6,
    title: "Portfólio",
    description:
      "Portfólio pessoal desenvolvido para apresentar projetos e experiência profissional",
    fullDescription:
      "Este portfólio foi desenvolvido para reunir meus principais projetos, experiências e habilidades como desenvolvedor Full Stack e Designer UI/UX.\n\nAlém de funcionar como vitrine profissional, o próprio portfólio representa um projeto completo de desenvolvimento, reunindo identidade visual própria, animações, componentes reutilizáveis, boas práticas de arquitetura Front-end e foco em experiência do usuário.\n\nO projeto continua evoluindo constantemente conforme novos trabalhos e funcionalidades são desenvolvidos.",
    thumbnail: "/src/assets/images/portifolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Magic UI"],
    link: "#",
    githubLink: "https://github.com/stain603/portifolio",
    features: [
      "Identidade visual própria",
      "Animações e interações",
      "Componentes reutilizáveis",
      "Arquitetura Front-end",
      "Foco em experiência do usuário",
    ],
    images: ["/src/assets/images/port-pc.png","/src/assets/images/port-cll.png","/src/assets/images/port-02.png","/src/assets/images/port-03.png","/src/assets/images/port-04.png"],
    objetivo:
      "Reunir projetos, experiências e habilidades como Full Stack e UI/UX",
    atuacao: "Desenvolvimento completo, visual, implementação deanimações e arquitetura",
    status: "Concluído",
  },
  {
    id: 7,
    title: "ATLAS",
    description: "Plataforma modular para construção de sistemas empresariais",
    fullDescription:
      "O Atlas é um sistema em desenvolvimento baseado em arquitetura modular, permitindo que cada empresa monte sua própria plataforma de acordo com suas necessidades.\n\nAo invés de desenvolver um sistema específico para cada cliente, o Atlas funciona como uma plataforma onde funcionalidades podem ser adicionadas ou removidas por módulos independentes, formando sistemas completamente personalizados.\n\nO projeto foi pensado para oferecer alta escalabilidade, reaproveitamento de código e facilidade de manutenção, sendo a evolução de experiências obtidas em projetos anteriores.\n\nAtualmente encontra-se em desenvolvimento.",
    thumbnail: "/src/assets/images/em-breve.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "Spring Boot",
      "API REST",
      "Arquitetura Modular",
    ],
    link: "#",
    githubLink: "https://github.com/stain603/Atlas",
    features: [
      "Arquitetura modular",
      "Módulos independentes sob demanda",
      "Alta escalabilidade",
      "Reaproveitamento de código",
      "Facilidade de manutenção",
    ],
    images: [],
    objetivo:
      "Permitir que empresas montem plataformas personalizadas por módulos",
    atuacao: "Concepção e desenvolvimento da arquitetura modular",
    status: "Em desenvolvimento",
  },
];
