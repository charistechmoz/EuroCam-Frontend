import React from "react";
import { Link } from "react-router-dom";
import { MdPhone, MdEmail } from "react-icons/md";
import { Button } from "../../components/ui/button";

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
  return (
    <>
      {/* Cabeçalho da página */}
      <section className="w-full bg-tertiary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-4">
            Iniciativa EuroCam
          </span>
          <h1 className="font-ubuntu font-bold text-fourth text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Plataforma de Apoio ao Investidor
          </h1>
          <p className="font-open-sans text-white/80 text-base md:text-lg leading-relaxed">
            Como iniciativa da EuroCam, o PAIE servirá como ombudsman e
            advogado em nome da EuroCam junto de investidores europeus em
            Moçambique.
          </p>
        </div>
      </section>

      {/* Corpo principal: texto + sidebar de contacto */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Coluna de texto */}
          <div className="lg:col-span-8">
            <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Ao trabalhar em estreita colaboração com os investidores
              europeus, o PAIE identifica as áreas de interesse e os
              constrangimentos enfrentados pelos investidores em diferentes
              fases dos seus ciclos de negócio, contribuindo para um diálogo
              frutífero — tanto privado-privado como público-privado —
              através da sua participação no mecanismo de apoio
              pós-estabelecimento do governo.
            </p>

            {/* Nota de destaque — serviço gratuito */}
            <div className="border-l-4 border-secondary pl-6 py-1 my-10">
              <p className="font-pt-serif italic text-tertiary text-lg md:text-xl leading-relaxed">
                Os serviços do PAIE são fornecidos gratuitamente a
                investidores privados. No entanto, se forem necessários
                serviços especializados, o custo da contratação desses
                serviços será suportado pelo investidor privado.
              </p>
            </div>

            <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed mb-16">
              A EuroCam compromete-se a prestar assistência aos investidores
              privados europeus e a acompanhar a implementação dos
              regulamentos na prática. Isto materializa-se através do
              trabalho do PAIE como ferramenta executiva técnica, e através
              do trabalho de advocacia da liderança da EuroCam.
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
                  Contacte o PAIE e submeta a sua questão ou reclamação junto
                  da nossa equipa técnica.
                </p>
                <Link to="/contactos">
                  <Button variant="secondary" size="default" className="w-full mt-1">
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
                  europeus. Serviços especializados adicionais são
                  suportados pelo investidor.
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