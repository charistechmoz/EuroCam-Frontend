import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPhone, MdEmail } from "react-icons/md";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import EUStars from "../../components/Eustars";
import { paieMenu } from "../../assets/data/paieMenu";
import PAIEImage from "../../assets/images/PAIE.PNG";

const functions = [
  "Manter uma base de dados actualizada de todos os investidores privados europeus em Moçambique.",
  "Trabalhar proativamente com investidores privados europeus para os entender, consultar, aconselhar e apoiar na superação de qualquer reclamação com as instituições públicas do governo anfitrião.",
  "Receber, analisar e investigar os casos de reclamações de investidores privados e preparar a submissão ao Conselho Técnico da APIEX, garantindo o acompanhamento até à sua resolução satisfatória.",
  "Acompanhar a implementação e execução das medidas tomadas para resolver os casos de reclamações de investidores privados europeus.",
  "Prestar assistência aos investidores privados europeus na expansão dos seus investimentos e oportunidades de negócio.",
  "Publicar os resultados dos casos de reclamação, conforme apropriado.",
  "Prestar contas ao Conselho da EuroCam sobre as suas atividades.",
];

const PAIE = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      {/* Cabeçalho da página */}
      <PageHeader
        image={PAIEImage}
        title="Plataforma de Apoio ao Investidor"
        subtitle="Iniciativa EuroCam"
      />

      {/* Sub-navegação com as 6 secções do portal */}
      <PAIESubNav />

      <section className="w-full py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-4">
            Iniciativa EuroCam
          </span>
          <h1 className="font-ubuntu font-bold text-tertiary text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Plataforma de Apoio ao Investidor
          </h1>
          <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed">
            Como iniciativa da EuroCam, o PAIE servirá como ombudsman e advogado
            em nome da EuroCam junto de investidores europeus em Moçambique.
          </p>
        </div>
      </section>

      {/* --- Portal de serviços: as 6 secções --- */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <EUStars size={24} opacity={0.9} />
            <span className="text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase">
              Portal de Serviços
            </span>
          </div>
          <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Como podemos apoiar o seu investimento
          </h2>
          <p className="font-open-sans text-gray-500 text-base leading-relaxed max-w-2xl mb-12">
            Escolha a área que corresponde à sua necessidade. Cada secção
            reúne os serviços práticos disponibilizados pelo PAIE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paieMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={`/paie/${item.slug}`}
                  className="group flex flex-col bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-6"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>

                  <h3 className="font-ubuntu font-bold text-tertiary text-lg leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="font-open-sans text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 mb-5">
                    {item.subcampos.slice(0, 3).map((sub, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-open-sans text-gray-400 text-xs"
                      >
                        <FiChevronRight size={12} className="text-secondary shrink-0" />
                        {sub}
                      </li>
                    ))}
                    {item.subcampos.length > 3 && (
                      <li className="font-open-sans text-gray-400 text-xs pl-4">
                        +{item.subcampos.length - 3} serviços
                      </li>
                    )}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 text-primary font-ubuntu font-semibold text-sm mt-auto group-hover:gap-2.5 transition-all">
                    Aceder
                    <FiArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corpo principal: texto + sidebar de contacto */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Coluna de texto */}
          <div className="lg:col-span-8">
            <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Ao trabalhar em estreita colaboração com os investidores europeus,
              o PAIE identifica as áreas de interesse e os constrangimentos
              enfrentados pelos investidores em diferentes fases dos seus ciclos
              de negócio, contribuindo para um diálogo frutífero tanto
              privado-privado como público-privado através da sua participação
              no mecanismo de apoio pós-estabelecimento do governo.
            </p>

            {/* Nota de destaque — serviço gratuito */}
            <div className="border-l-4 border-secondary pl-6 py-1 my-10">
              <p className="font-pt-serif italic text-tertiary text-lg md:text-xl leading-relaxed">
                Os serviços do PAIE são fornecidos gratuitamente a investidores
                privados. No entanto, se forem necessários serviços
                especializados, o custo da contratação desses serviços será
                suportado pelo investidor privado.
              </p>
            </div>

            <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed mb-16">
              A EuroCam compromete-se a prestar assistência aos investidores
              privados europeus e a acompanhar a implementação dos regulamentos
              na prática. Isto materializa-se através do trabalho do PAIE como
              ferramenta executiva técnica, e através do trabalho de advocacia
              da liderança da EuroCam.
            </p>

            {/* Funções do PAIE */}
            <h2 className="font-ubuntu font-bold text-primary text-2xl md:text-3xl leading-tight mb-2">
              Funções da Plataforma de Apoio ao Investidor
            </h2>
            <p className="font-open-sans text-gray-500 text-sm md:text-base leading-relaxed mb-10">
              As principais funções do PAIE, como interface com o mecanismo
              pós-estabelecimento do governo, são:
            </p>

            <ol className="flex flex-col">
              {functions.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-6 py-6 border-t border-gray-200 last:border-b"
                >
                  <span className="font-ubuntu font-bold text-secondary text-lg shrink-0 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-open-sans text-gray-700 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Widget: precisa de apoio */}
              <div className="bg-primary rounded-lg p-6 flex flex-col gap-3">
                <h3 className="font-ubuntu font-bold text-fourth text-lg leading-snug">
                  Precisa de Apoio como Investidor?
                </h3>
                <p className="font-open-sans text-white/75 text-sm leading-relaxed">
                  Contacte o PAIE e submeta a sua questão ou reclamação junto da
                  nossa equipa técnica.
                </p>
                <Link to="/contactos">
                  <Button
                    variant="secondary"
                    size="default"
                    className="w-full mt-1"
                  >
                    Contactar o PAIE
                  </Button>
                </Link>
              </div>

              {/* Widget: contacto directo */}
              <div className="rounded-lg border border-gray-200 p-6 flex flex-col gap-4">
                <h3 className="font-ubuntu font-bold text-tertiary text-base">
                  Contacto Directo
                </h3>
                <a
                  href="tel:+258867542605"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary font-open-sans text-sm transition-colors"
                >
                  <MdPhone size={16} className="text-secondary shrink-0" />
                  +258 867 542 605
                </a>
                <a
                  href="mailto:info@eurocam.org.mz"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary font-open-sans text-sm transition-colors break-all"
                >
                  <MdEmail size={16} className="text-secondary shrink-0" />
                  info@eurocam.org.mz
                </a>
              </div>

              {/* Widget: nota de gratuitidade */}
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="font-open-sans text-gray-500 text-xs leading-relaxed">
                  O serviço do PAIE é gratuito para investidores privados
                  europeus. Serviços especializados adicionais são suportados
                  pelo investidor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PAIE;