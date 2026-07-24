import { memo, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const ModalContent = memo(function ModalContent({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.thumbnail
        ? [project.thumbnail]
        : [];

  return (
    <div className="max-h-[90vh] overflow-y-auto overscroll-contain p-6">
      <button
        type="button"
        onClick={onClose}
        className="float-right text-[#A1A1AA] transition hover:text-[#FAFAFA]"
        aria-label="Fechar"
      >
        ✕
      </button>

      {images.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-48 shrink-0 rounded-lg border border-[#27272A] object-contain"
            />
          ))}
        </div>
      )}

      <h2 id="project-modal-title" className="mt-6 text-2xl font-semibold text-[#FAFAFA]">
        {project.title}
      </h2>
      <p className="mt-2 text-sm text-[#A1A1AA]">{project.description}</p>

      <dl className="mt-4 grid gap-3 rounded-xl border border-[#27272A] bg-[#09090B]/60 p-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium tracking-wide text-[#71717A] uppercase">
            Objetivo
          </dt>
          <dd className="mt-1 text-[#E4E4E7]">{project.objetivo}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-[#71717A] uppercase">
            Minha atuação
          </dt>
          <dd className="mt-1 text-[#E4E4E7]">{project.atuacao}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-[#71717A] uppercase">
            Status
          </dt>
          <dd className="mt-1 text-[#E4E4E7]">{project.status}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-[#71717A] uppercase">
            Stack
          </dt>
          <dd className="mt-1 text-[#E4E4E7]">{project.tags.join(" · ")}</dd>
        </div>
      </dl>

      <p className="mt-4 whitespace-pre-line text-[#A1A1AA]">
        {project.fullDescription ?? project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <ul className="mt-4 list-disc pl-5 text-sm text-[#A1A1AA]">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.link && project.link !== "#" && (
          <InteractiveHoverButton href={project.link} target="_blank" rel="noreferrer">
            Ver ao vivo
          </InteractiveHoverButton>
        )}
        {project.githubLink && (
          <InteractiveHoverButton
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </InteractiveHoverButton>
        )}
      </div>
    </div>
  );
});

export function ProjectDetailModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            key="backdrop"
            type="button"
            aria-label="Fechar modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-[#09090B]/85"
            onClick={onClose}
          />

          <motion.div
            key={project.id}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-1/2 left-1/2 z-[60] max-h-[90vh] w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B] shadow-[0_0_60px_rgba(74,222,128,0.12)]"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalContent project={project} onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
