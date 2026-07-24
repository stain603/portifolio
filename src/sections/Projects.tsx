import { useCallback, useState } from "react";

import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import Carousel from "@/components/ui/carousel";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%2318181B' width='800' height='600'/%3E%3Ctext fill='%23A1A1AA' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ESem imagem%3C/text%3E%3C/svg%3E";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const slides = projects.map((project) => ({
    title: project.title,
    button: "Ver detalhes",
    src: project.thumbnail ?? PLACEHOLDER_IMAGE,
    description: project.description,
    objetivo: project.objetivo,
    atuacao: project.atuacao,
    status: project.status,
    stack: project.tags,
  }));

  const handleOpenDetails = useCallback((index: number) => {
    const project = projects[index];
    if (project) setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projetos" className="section-container overflow-hidden">
      <div className="section-header">
        <p className="section-label">Projetos</p>
        <h2 className="section-title">Trabalhos recentes</h2>
        <p className="section-description text-[#A1A1AA]">Conheça um pouco de meu trabalho, aqui estão meus projetos mais recentes.</p>
      </div>

      <Carousel
        slides={slides}
        isPaused={selectedProject !== null}
        onOpenDetails={(index) => handleOpenDetails(index)}
      />

      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}

export default Projects;
