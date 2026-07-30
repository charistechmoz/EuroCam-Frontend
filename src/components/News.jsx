import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { Button } from "./ui/button";

const news = [
  {
    slug: "presidente-daniel-chapo-mobiliza-investidores-europeus",
    image: "/news-1.jpg",
    date: "19 Mar 2026",
    title:
      "Presidente Daniel Chapo mobiliza investidores europeus e reforça confiança no potencial económico de Moçambique",
    excerpt:
      "Encontro reforça o diálogo entre o Governo e o setor privado europeu, sinalizando novas oportunidades de investimento no país.",
  },
  {
    slug: "eu-business-network-eubn-2026",
    image: "/news-1.jpg",
    date: "17 Nov 2025",
    title: "A 2.ª edição do EU Business Network (EUBN 2026)",
    excerpt:
      "Evento reúne empresários europeus e moçambicanos para debater oportunidades de negócio e networking entre os dois mercados.",
  },
  {
    slug: "cumulacao-de-origem-no-ape-sadc-ue",
    image: "/news-2.png",
    date: "24 Nov 2025",
    title:
      "Cumulação de origem no APE SADC–UE: oportunidades e desafios para Moçambique",
    excerpt:
      "Análise às implicações do acordo de parceria económica para o comércio e a competitividade das empresas moçambicanas.",
  },
];

const News = () => {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
              Actualidade
            </span>
            <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight">
              Notícias
            </h2>
            <span className="font-open-sans text-gray-600 text-base leading-relaxed">
              Fique por dentro das principais novidades sobre investimentos, parcerias e o mercado empresarial entre a UE e Moçambique.
            </span>
          </div>

          <Link to="/noticias" className="shrink-0">
            <Button variant="outline" size="lg">
              Ver Todas as Notícias
            </Button>
          </Link>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link
              key={index}
              to={`/noticias/${item.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Imagem */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-gray-400 font-open-sans text-xs mb-3">
                  <FiCalendar size={13} />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-ubuntu font-bold text-tertiary text-lg leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                  {item.title}
                </h3>

                <p className="font-open-sans text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                  {item.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-primary font-ubuntu font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Ler mais
                  <FiArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;