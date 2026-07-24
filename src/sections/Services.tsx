import { Marquee } from "@/components/ui/marquee";
import { services } from "@/data/services";

function Services() {
  return (
    <section id="servicos" className="section-container">
      <div className="section-header flex flex-col items-center justify-center gap-2 text-center">
        <p className="section-label">Serviços</p>
        <h2 className="section-title">O que eu faço</h2>
      </div>

      <Marquee pauseOnHover className="mx-auto max-w-6xl [--duration:28s] [--gap:1.25rem]">
        {services.map((service) => (
          <article
            key={service.id}
            className="portfolio-card w-[min(85vw,320px)] shrink-0 p-6 md:w-[320px]"
          >
            <div className="mb-4 h-1 w-10 rounded-full bg-[#22C55E]" />
            <h3 className="text-lg font-semibold text-[#FAFAFA]">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              {service.description}
            </p>
          </article>
        ))}
      </Marquee>
    </section>
  );
}

export default Services;
