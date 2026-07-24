import ShapeGrid from "@/components/ShapeGrid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <ShapeGrid
          direction="diagonal"
          speed={0.6}
          borderColor="rgba(34, 197, 94, 0.25)"
          hoverFillColor="rgba(34, 197, 94, 0.12)"
          squareSize={48}
          shape="square"
          hoverTrailAmount={4}
          className="h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#09090B]/20 via-[#09090B]/60 to-[#09090B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4ADE80]">
          Portfólio
        </p>
        <h1 className="text-4xl font-bold text-[#FAFAFA] md:text-6xl">
          Olá, eu sou <span className="text-[#22C55E]">Pablo Dias</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA]">
          Desenvolvedor full-stack Web e mobile, focado em criar interfaces modernas, rápidas e
          experiências digitais memoráveis com ui/ux design.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <InteractiveHoverButton href="#projetos">
            Ver projetos
          </InteractiveHoverButton>
          <InteractiveHoverButton href="#contato">
            Entrar em contato
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
