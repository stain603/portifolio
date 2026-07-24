import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#27272A] bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[#FAFAFA]">
              Pablo<span className="text-[#4ADE80]">_Dias</span>
            </h3>
            <p className="mt-3 text-sm text-[#A1A1AA]">
              Desenvolvedor focado em criar experiências digitais modernas,
              performáticas e elegantes.
            </p>
          </div>

          <div>
            <b className="text-sm font-semibold text-[#FAFAFA]">Navegação</b>
            <div className="mt-3 flex flex-col gap-2">
              <a href="#hero" className="footer-link">
                Hero
              </a>
              <a href="#sobre" className="footer-link">
                Sobre
              </a>
              <a href="#projetos" className="footer-link">
                Projetos
              </a>
              <a href="#contato" className="footer-link">
                Contato
              </a>
            </div>
          </div>

          <div>
            <b className="text-sm font-semibold text-[#FAFAFA]">Redes</b>
            <div className="mt-3 flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-[#A1A1AA]">
          © {new Date().getFullYear()} Pablo Dias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
