import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ContactoImage from "../../assets/images/contactos.PNG";

// --- Ícones inline (sem dependência externa) ---
const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);
const IconArrow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const emblemDots = Array.from({ length: 12 });

const canais = [
  {
    icon: IconPin,
    label: "Endereço",
    lines: ["Av. Friedrich Engels", "Condomínio 223, 2º Andar", "Maputo, Moçambique"],
  },
  {
    icon: IconPhone,
    label: "Telemóvel",
    lines: ["+258 867 542 605"],
  },
  {
    icon: IconMail,
    label: "Email",
    lines: ["info@eurocam.org.mz"],
  },
];

const redesSociais = [
  { nome: "Facebook", href: "https://www.facebook.com/profile.php?id=100081305953874" },
  { nome: "LinkedIn", href: "https://www.linkedin.com/company/eurocam-moz/" },
  { nome: "Instagram", href: "https://www.instagram.com/eurocam_" },
];

const ligacoes = [
  { nome: "Delegação da UE em Moçambique", href: "https://www.eeas.europa.eu/mozambique/uniao-europeia-e-mocambique_pti?s=111" },
  { nome: "Apiex", href: "https://apiex.gov.mz/" },
  { nome: "CTA", href: "https://cta.org.mz/" },
  { nome: "Portal do Comércio Externo", href: "https://portalcomercioexterno.gov.mz/" },
];

const Contacto = () => {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: ligar ao endpoint/serviço de envio de email real
    setEnviado(true);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (

    <>
      <PageHeader
        image={ContactoImage}
        title="Contactos"
        subtitle="Entre em contacto connosco para qualquer questão, sugestão ou oportunidade de colaboração. Estamos aqui para ouvir e apoiar os nossos membros e parceiros."
      />

      <main className="bg-gray-50 text-tertiary">
        {/* ---------- Canais de contacto ---------- */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="mb-10 md:mb-14">
            <p className="font-ubuntu font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
              Canais de contacto
            </p>
            <h2 className="font-pt-serif text-3xl md:text-4xl leading-tight max-w-xl text-tertiary">
              Como pode falar connosco
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {canais.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="bg-gray-50 p-8 flex flex-col gap-4">
                <span className="w-11 h-11 rounded-full border border-tertiary/20 flex items-center justify-center text-tertiary">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-ubuntu font-semibold text-[11px] tracking-[0.15em] uppercase text-tertiary/60 mb-1">
                    {label}
                  </p>
                  {lines.map((l) => (
                    <p key={l} className="font-open-sans text-[15px] leading-relaxed text-gray-700">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Bloco institucional + formulário ---------- */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-5 border border-gray-200">
            {/* Cartão tipo "papel timbrado" */}
            <div className="lg:col-span-2 bg-tertiary text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-secondary" />

              <div>
                {/* Emblema circular discreto, 12 estrelas da UE */}
                <div className="relative w-16 h-16 mb-8">
                  {emblemDots.map((_, i) => {
                    const angle = (i / emblemDots.length) * 2 * Math.PI;
                    const x = 32 + 26 * Math.sin(angle);
                    const y = 32 - 26 * Math.cos(angle);
                    return (
                      <span
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
                        style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                      />
                    );
                  })}
                </div>

                <p className="font-ubuntu font-semibold text-[11px] tracking-[0.2em] uppercase text-secondary mb-2">
                  EuroCam · Sede
                </p>
                <h3 className="font-pt-serif text-2xl mb-6 leading-snug">
                  Associação dos Empresários
                  <br />
                  Europeus em Moçambique
                </h3>

                <div className="space-y-3 font-open-sans text-sm text-white/85 border-t border-white/15 pt-6">
                  <p>Av. Friedrich Engels, Condomínio 223, 2º Andar</p>
                  <p>Maputo, Moçambique</p>
                  <p>+258 867 542 605</p>
                  <p>info@eurocam.org.mz</p>
                </div>
              </div>

              <div className="flex gap-4 mt-10 pt-6 border-t border-white/15">
                {redesSociais.map(({ nome, href }) => (
                  <a
                    key={nome}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ubuntu text-xs tracking-wide uppercase text-white/70 hover:text-secondary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary rounded-sm"
                  >
                    {nome}
                  </a>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3 bg-white p-10">
              <p className="font-ubuntu font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-2">
                Envie-nos uma mensagem
              </p>
              <h3 className="font-pt-serif text-2xl mb-8 text-tertiary">Deixe-nos o seu contacto</h3>

              {enviado ? (
                <div className="border border-tertiary/20 bg-secondary/10 rounded-md p-6 font-open-sans text-sm text-tertiary">
                  A sua mensagem foi enviada. A equipa da EuroCam entrará em contacto brevemente.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="block font-ubuntu text-xs uppercase tracking-wide text-tertiary/60 mb-2">
                        Nome
                      </span>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-open-sans text-[15px] focus:outline-none focus:border-secondary transition-colors"
                      />
                    </label>
                    <label className="block">
                      <span className="block font-ubuntu text-xs uppercase tracking-wide text-tertiary/60 mb-2">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-open-sans text-[15px] focus:outline-none focus:border-secondary transition-colors"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block font-ubuntu text-xs uppercase tracking-wide text-tertiary/60 mb-2">
                      Assunto
                    </span>
                    <input
                      type="text"
                      name="assunto"
                      value={form.assunto}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-open-sans text-[15px] focus:outline-none focus:border-secondary transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="block font-ubuntu text-xs uppercase tracking-wide text-tertiary/60 mb-2">
                      Mensagem
                    </span>
                    <textarea
                      name="mensagem"
                      rows={4}
                      required
                      value={form.mensagem}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-open-sans text-[15px] focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-tertiary text-white px-7 py-3 font-ubuntu text-sm uppercase tracking-wide hover:bg-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    Enviar mensagem
                    <IconArrow className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ---------- Mapa ---------- */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
          <div className="border border-gray-200 overflow-hidden">
            <iframe
              title="Localização EuroCam"
              className="w-full h-[360px] grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              src="https://maps.google.com/maps?q=Av.%20Friedrich%20Engels%2C%20Condom%C3%ADnio%20223%2C%202%C2%BA%20Andar%2C%20Maputo&t=m&z=15&output=embed"
            />
          </div>
        </section>

        {/* ---------- Ligações institucionais ---------- */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <p className="font-ubuntu font-semibold text-xs tracking-[0.2em] uppercase text-secondary mb-3">
            Ligações institucionais
          </p>
          <h2 className="font-pt-serif text-3xl md:text-4xl mb-10 text-tertiary">
            Parceiros e organismos
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {ligacoes.map(({ nome, href }) => (
              <a
                key={nome}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 flex items-center justify-between group focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
              >
                <span className="font-open-sans text-[15px] text-gray-700">{nome}</span>
                <IconArrow className="w-4 h-4 text-tertiary/40 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacto;