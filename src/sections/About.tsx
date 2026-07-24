import { DeveloperLottie } from "@/components/DeveloperLottie";

function About() {
  return (
    <section id="sobre" className="section-container">
      <div className="section-header">
        <p className="section-label">Sobre</p>
        <h2 className="section-title">Quem sou eu</h2>
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-[#A1A1AA]">
          <p>
          Desenvolvedor Full Stack e Designer UI/UX com experiência no desenvolvimento de aplicações web e mobile, interfaces modernas e soluções digitais focadas em usabilidade. Atuo desde a concepção da experiência do usuário até a implementação de sistemas completos, unindo design e desenvolvimento para criar produtos funcionais e intuitivos.
          </p>
          <p>
          Possuo conhecimentos em desenvolvimento Front-end e Back-end, criação e consumo de APIs REST, bancos de dados relacionais, arquitetura de software, versionamento com Git e metodologias ágeis. Também tenho experiência com prototipação, design de interfaces, identidade visual de produtos digitais e desenvolvimento de dashboards, sistemas administrativos, landing pages e plataformas web.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX"].map(
              (skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <DeveloperLottie />
        </div>
      </div>
    </section>
  );
}

export default About;
