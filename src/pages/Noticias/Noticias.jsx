import React, { useState } from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import NoticiasImage from "../../assets/images/noticias.PNG";

// NOTA: estes dados virão futuramente do painel admin (CMS).
// Basta substituir este array por um fetch à API/CMS quando estiver pronto.
const news = [
  {
    slug: "presidente-daniel-chapo-mobiliza-investidores-europeus",
    image: "/logo-eurocam.jpg",
    category: "Investimento",
    date: "19 Mar 2026",
    title:
      "Presidente Daniel Chapo mobiliza investidores europeus e reforça confiança no potencial económico de Moçambique",
    excerpt:
      "Encontro reforça o diálogo entre o Governo e o setor privado europeu, sinalizando novas oportunidades de investimento no país.",
    featured: true,
  },
  {
    slug: "eu-business-network-eubn-2026",
    image: "/logo-eurocam.jpg",
    category: "Eventos",
    date: "17 Nov 2025",
    title: "A 2.ª edição do EU Business Network (EUBN 2026)",
    excerpt:
      "Evento reúne empresários europeus e moçambicanos para debater oportunidades de negócio e networking entre os dois mercados.",
  },
  {
    slug: "cumulacao-de-origem-no-ape-sadc-ue",
    image: "/logo-eurocam.jpg",
    category: "Comércio",
    date: "24 Nov 2025",
    title:
      "Cumulação de origem no APE SADC–UE: oportunidades e desafios para Moçambique",
    excerpt:
      "Análise às implicações do acordo de parceria económica para o comércio e a competitividade das empresas moçambicanas.",
  },
  {
    slug: "eurocam-assina-memorando-cta",
    image: "/logo-eurocam.jpg",
    category: "Parcerias",
    date: "05 Nov 2025",
    title: "EuroCam assina memorando de entendimento com a CTA",
    excerpt:
      "Nova parceria reforça o diálogo público-privado e a defesa dos interesses do setor empresarial em Moçambique.",
  },
  {
    slug: "missao-empresarial-uniao-europeia",
    image: "/logo-eurocam.jpg",
    category: "Investimento",
    date: "22 Out 2025",
    title: "Missão empresarial da União Europeia visita Maputo",
    excerpt:
      "Delegação europeia explora oportunidades de investimento nos setores de energia, infraestrutura e agricultura.",
  },
  {
    slug: "facim-2025-participacao-eurocam",
    image: "/logo-eurocam.jpg",
    category: "Eventos",
    date: "10 Set 2025",
    title: "EuroCam marca presença na FACIM 2025",
    excerpt:
      "Empresas associadas apresentam soluções e produtos na maior feira internacional de Moçambique.",
  },
];

const categories = ["Todas", "Investimento", "Comércio", "Eventos", "Parcerias"];

const Noticias = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    activeCategory === "Todas"
      ? news
      : news.filter((item) => item.category === activeCategory);

  const featured = filtered.find((item) => item.featured) || filtered[0];
  const rest = filtered.filter((item) => item !== featured);
  const gridItems = rest.slice(2);
  const visibleGridItems = gridItems.slice(0, visibleCount);
  const hasMore = visibleCount < gridItems.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <>
      <PageHeader
        image={NoticiasImage}
        title="Notícias"
        subtitle="Fique a par das últimas notícias e atualizações sobre investimentos, comércio e eventos relacionados à EuroCam e ao setor empresarial em Moçambique."
      />

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filtro de categorias */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-ubuntu font-semibold text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="font-open-sans text-gray-500 text-sm">
              Não há notícias nesta categoria de momento.
            </p>
          ) : (
            <>
              {/* Destaque + 2 secundárias, layout tipo revista */}
              {featured && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
                  {/* Notícia principal */}
                  <a
                    href={`/noticias/${featured.slug}`}
                    className="group lg:col-span-2 relative flex flex-col justify-end min-h-[420px] rounded-lg overflow-hidden"
                  >
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="relative z-10 p-8 flex flex-col gap-3">
                      <span className="inline-block w-fit bg-secondary text-tertiary font-ubuntu font-semibold text-xs px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                      <h2 className="font-ubuntu font-bold text-white text-2xl md:text-3xl leading-tight max-w-xl">
                        {featured.title}
                      </h2>
                      <p className="font-open-sans text-white/80 text-sm md:text-base leading-relaxed max-w-lg line-clamp-2">
                        {featured.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-white font-ubuntu font-semibold text-sm mt-1 group-hover:gap-2.5 transition-all">
                        <FiCalendar size={14} className="text-secondary" />
                        {featured.date}
                      </span>
                    </div>
                  </a>

                  {/* Duas notícias secundárias empilhadas */}
                  <div className="flex flex-col gap-8">
                    {rest.slice(0, 2).map((item, index) => (
                      <a
                        key={index}
                        href={`/noticias/${item.slug}`}
                        className="group flex gap-4 bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300 p-4 flex-1"
                      >
                        <div className="relative w-28 h-full min-h-[100px] shrink-0 rounded-md overflow-hidden bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-1.5">
                          <span className="text-secondary font-ubuntu font-semibold text-xs uppercase">
                            {item.category}
                          </span>
                          <h3 className="font-ubuntu font-bold text-tertiary text-sm leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-gray-400 font-open-sans text-xs">
                            {item.date}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Restantes notícias em grid */}
              {gridItems.length > 0 && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleGridItems.map((item, index) => (
                      <a
                        key={index}
                        href={`/noticias/${item.slug}`}
                        className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                      >
                        <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 bg-secondary text-tertiary font-ubuntu font-semibold text-xs px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex flex-col flex-1 p-6">
                          <span className="inline-flex items-center gap-2 text-gray-400 font-open-sans text-xs mb-3">
                            <FiCalendar size={13} />
                            {item.date}
                          </span>

                          <h3 className="font-ubuntu font-bold text-tertiary text-lg leading-snug mb-3 line-clamp-3 group-hover:text-primary transition-colors">
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
                      </a>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="flex justify-center mt-14">
                      <button
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                        className="font-ubuntu font-semibold text-sm text-primary border-2 border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        Carregar Mais Notícias
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Noticias;