"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import type { ProjectStatus } from "@/data/projects";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description: string;
  objetivo: string;
  atuacao: string;
  status: ProjectStatus;
  stack: string[];
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  isPaused: boolean;
  handleSlideClick: (index: number) => void;
  onOpenDetails?: (index: number) => void;
}

const statusStyles: Record<ProjectStatus, string> = {
  "Em produção": "text-[#4ADE80]",
  Concluído: "text-[#A1A1AA]",
  "Em desenvolvimento": "text-[#FBBF24]",
};

const Slide = ({
  slide,
  index,
  current,
  isPaused,
  handleSlideClick,
  onOpenDetails,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isPaused || current !== index || !slideRef.current) return;

    const rect = slideRef.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    slideRef.current.style.setProperty("--x", `${x}px`);
    slideRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!slideRef.current) return;
    slideRef.current.style.setProperty("--x", "0px");
    slideRef.current.style.setProperty("--y", "0px");
  };

  const openDetails = () => {
    onOpenDetails?.(index);
  };

  const handleCardClick = () => {
    if (current !== index) {
      handleSlideClick(index);
      return;
    }

    openDetails();
  };

  const { src, button, title, description, objetivo, atuacao, status, stack } =
    slide;
  const isActive = current === index;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className={`relative z-10 mx-[4vmin] flex h-[70vmin] w-[70vmin] flex-1 flex-col items-stretch justify-end text-[#FAFAFA] transition-all duration-300 ease-in-out ${
          isActive ? "cursor-pointer" : "cursor-grab"
        }`}
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: !isActive
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 overflow-hidden rounded-xl border border-[#27272A] bg-[#18181B] transition-all duration-150 ease-out"
          style={{
            width: "100%",
            height: "100%",
            transform: isActive
              ? "translate3d(calc(var(--x, 0px) / 30), calc(var(--y, 0px) / 30), 0)"
              : "none",
            boxShadow: isActive
              ? "0 0 40px rgba(74, 222, 128, 0.15)"
              : "none",
          }}
        >
          <div className="flex h-full w-full items-center justify-center bg-[#18181B]">
            <img
              className="max-h-full max-w-full object-contain object-center transition-opacity duration-300"
              style={{ opacity: isActive ? 0.85 : 0.45 }}
              alt={title}
              src={src}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
          {isActive && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent to-60%" />
          )}
        </div>

        <article
          className={`relative mt-auto w-full p-2.5 text-left transition-opacity duration-500 md:p-5 ${
            isActive ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <h2 className="text-sm font-semibold leading-tight md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <p className="mt-1 hidden line-clamp-2 text-sm text-[#A1A1AA] md:block">
            {description}
          </p>

          <dl className="mt-2 md:mt-4">
            <div className="grid grid-cols-[4.75rem_1fr] gap-x-2 gap-y-1.5 text-[9px] leading-tight md:grid-cols-[7rem_1fr] md:gap-x-4 md:gap-y-3 md:text-sm md:leading-relaxed">
              <dt className="shrink-0 font-medium text-[#71717A]">Objetivo</dt>
              <dd className="line-clamp-1 text-[#E4E4E7] md:line-clamp-2">
                {objetivo}
              </dd>

              <dt className="shrink-0 font-medium text-[#71717A]">
                Minha atuação
              </dt>
              <dd className="line-clamp-1 text-[#E4E4E7] md:line-clamp-2">
                {atuacao}
              </dd>

              <dt className="shrink-0 font-medium text-[#71717A]">Status</dt>
              <dd className={`font-medium ${statusStyles[status]}`}>
                {status}
              </dd>

              <dt className="shrink-0 font-medium text-[#71717A]">Stack</dt>
              <dd className="line-clamp-1 text-[#E4E4E7] md:line-clamp-2">
                {stack.join(" · ")}
              </dd>
            </div>
          </dl>

          <div className="mt-2 flex justify-start md:mt-4">
            <InteractiveHoverButton
              className="scale-90 origin-left px-4 py-1.5 text-xs md:scale-100 md:px-6 md:py-2 md:text-sm"
              onClick={(event) => {
                event.stopPropagation();
                openDetails();
              }}
            >
              {button}
            </InteractiveHoverButton>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => (
  <button
    type="button"
    className={`mx-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] transition duration-200 hover:-translate-y-0.5 hover:border-[#22C55E] focus:border-[#4ADE80] focus:outline-none active:translate-y-0.5 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <IconArrowNarrowRight className="text-[#A1A1AA]" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
  isPaused?: boolean;
  onOpenDetails?: (index: number) => void;
}

export default function Carousel({
  slides,
  isPaused = false,
  onOpenDetails,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  return (
    <div
      className="relative mx-auto h-[70vmin] w-[70vmin]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.title}
            slide={slide}
            index={index}
            current={current}
            isPaused={isPaused}
            handleSlideClick={setCurrent}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+1rem)] flex w-full justify-center">
        <CarouselControl
          type="previous"
          title="Slide anterior"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Próximo slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
