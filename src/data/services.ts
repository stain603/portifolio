export type Service = {
  id: number;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações modernas, performáticas e responsivas.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Interfaces limpas, acessíveis e alinhadas à identidade visual.",
  },
  {
    id: 3,
    title: "Manutenção & Suporte",
    description: "Atualizações, correções, implementações de novas funcionalidades e melhorias contínuas.",
  },
  {
    id: 4,
    title: "Desenvolvimento de Mobile",
    description: "Aplicativos nativos para Android e iOS modernos, performáticos e responsivos.",
  },
  {
    id: 5,
    title: "Desenvolvimento de identidade visual",
    description: "Criação de identidade visual para empresas e projetos.",
  },
];
