import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { socialLinks } from "@/data/social";

function Contact() {
  return (
    <section id="contato" className="section-container pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="section-header text-center">
          <p className="section-label">Contato</p>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#A1A1AA]">
            Estou aberto a novos projetos, freelances e oportunidades. Envie uma
            mensagem ou conecte-se pelas redes sociais.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="portfolio-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[#FAFAFA]">Envie uma mensagem</h3>
            <p className="mt-2 text-sm text-[#A1A1AA]">
              Preencha os campos abaixo e fale comigo diretamente por e-mail.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);
                const name = String(data.get("name") ?? "");
                const email = String(data.get("email") ?? "");
                const message = String(data.get("message") ?? "");
                const subject = encodeURIComponent(`Contato do portfólio — ${name}`);
                const body = encodeURIComponent(
                  `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
                );
                window.location.href = `mailto:pablogabrieldiasdesouza@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-2 text-sm text-[#A1A1AA]">
                  Nome
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-3 text-[#FAFAFA] outline-none transition placeholder:text-[#71717A] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/40"
                  />
                </label>
                <label className="block space-y-2 text-sm text-[#A1A1AA]">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-3 text-[#FAFAFA] outline-none transition placeholder:text-[#71717A] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/40"
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm text-[#A1A1AA]">
                Mensagem
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre o seu projeto..."
                  className="w-full resize-none rounded-lg border border-[#27272A] bg-[#09090B] px-4 py-3 text-[#FAFAFA] outline-none transition placeholder:text-[#71717A] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/40"
                />
              </label>

              <InteractiveHoverButton type="submit" className="mt-2 w-full sm:w-auto">
                Enviar e-mail
              </InteractiveHoverButton>
            </form>
          </div>

          <div className="portfolio-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <h3 className="text-lg font-semibold text-[#FAFAFA]">Redes sociais</h3>
              <p className="mt-2 text-sm text-[#A1A1AA]">
                Também estou disponível nas plataformas abaixo.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border border-[#27272A] bg-[#09090B]/60 px-4 py-3 text-sm text-[#FAFAFA] transition hover:border-[#22C55E]/50 hover:text-[#4ADE80]"
                  >
                    <span>{link.name}</span>
                    <span aria-hidden>→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
              <p className="text-sm font-medium text-[#FAFAFA]">Resposta rápida</p>
              <p className="mt-1 text-sm text-[#A1A1AA]">
                Normalmente respondo em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
