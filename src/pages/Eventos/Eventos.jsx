import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import EUStars from "../../components/Eustars";
import { Button } from "../../components/ui/button";
import EventosImage from "../../assets/images/eventos.PNG";


// NOTA: estes dados virão futuramente do painel admin (CMS).
// Basta substituir este array por um fetch à API/CMS quando estiver pronto.
const featuredEvent = {
  slug: "eu-business-cocktail-2026",
  image: "/logo-eurocam.jpg",
  category: "Networking",
  date: "12 Maio 2026",
  time: "18h00 – 21h00",
  location: "Maputo, Moçambique",
  title: "EU Business Cocktail",
  excerpt:
    "Momento de networking entre empresários europeus e moçambicanos, reforçando parcerias e novas oportunidades de negócio.",
};

const events = [
  {
    slug: "eu-zimbabwe-mission",
    image: "/logo-eurocam.jpg",
    category: "Missão Empresarial",
    date: "03 Jun 2026",
    location: "Harare, Zimbabwe",
    title: "European Union – Zimbabwe Mission",
    excerpt:
      "Missão empresarial que liga investidores europeus a oportunidades emergentes na região austral de África.",
  },
  {
    slug: "eubn-2026",
    image: "/logo-eurocam.jpg",
    category: "Encontro Empresarial",
    date: "20 Jul 2026",
    location: "Maputo",
    title: "EU Business Network (EUBN 2026)",
    excerpt:
      "2.ª edição do encontro que junta empresas membro, parceiros institucionais e potenciais investidores europeus.",
  },
  {
    slug: "forum-comercio-sadc-ue",
    image: "/logo-eurocam.jpg",
    category: "Fórum",
    date: "14 Set 2026",
    location: "Maputo",
    title: "Fórum de Comércio SADC–UE",
    excerpt:
      "Discussão sobre cumulação de origem e oportunidades comerciais no âmbito do Acordo de Parceria Económica.",
  },
  {
    slug: "feira-internacional-maputo",
    image: "/logo-eurocam.jpg",
    category: "Feira",
    date: "02 Nov 2026",
    location: "FACIM, Maputo",
    title: "Participação na FACIM 2026",
    excerpt:
      "A EuroCam e as suas empresas associadas marcam presença na maior feira internacional de Moçambique.",
  },
];

const categoryColor = {
  "Networking": "bg-secondary/15 text-tertiary",
  "Missão Empresarial": "bg-primary/10 text-primary",
  "Encontro Empresarial": "bg-secondary/15 text-tertiary",
  "Fórum": "bg-primary/10 text-primary",
  "Feira": "bg-secondary/15 text-tertiary",
};

const Eventos = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <PageHeader
        image={EventosImage}
        title="Eventos"
        subtitle="Fique a par dos eventos e atividades promovidos pela EuroCam e seus parceiros."
      />

      {/* --- Evento em destaque, estilo "bilhete" --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <EUStars size={22} opacity={0.9} />
            <span className="text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase">
              Próximo Evento
            </span>
          </div>

          <div className="relative rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Imagem */}
              <div className="relative w-full lg:w-2/5 h-56 lg:h-auto bg-gray-200">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Linha de perfuração estilo bilhete (só em desktop) */}
              <div className="hidden lg:flex flex-col items-center justify-between py-6 relative">
                <span className="w-4 h-4 rounded-full bg-gray-100 absolute -top-2 -translate-x-1/2 left-1/2 border border-gray-200" />
                <div className="border-l-2 border-dashed border-gray-200 h-full" />
                <span className="w-4 h-4 rounded-full bg-gray-100 absolute -bottom-2 -translate-x-1/2 left-1/2 border border-gray-200" />
              </div>

              {/* Detalhes */}
              <div className="flex flex-col justify-center gap-4 p-8 lg:w-3/5">
                <span
                  className={`inline-block w-fit font-ubuntu font-semibold text-xs px-3 py-1 rounded-full ${categoryColor[featuredEvent.category]}`}
                >
                  {featuredEvent.category}
                </span>

                <h3 className="font-ubuntu font-bold text-tertiary text-2xl md:text-3xl leading-tight">
                  {featuredEvent.title}
                </h3>

                <p className="font-open-sans text-gray-500 text-sm md:text-base leading-relaxed">
                  {featuredEvent.excerpt}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500 font-open-sans text-sm">
                  <span className="inline-flex items-center gap-2">
                    <FiCalendar size={15} className="text-secondary" />
                    {featuredEvent.date} · {featuredEvent.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FiMapPin size={15} className="text-secondary" />
                    {featuredEvent.location}
                  </span>
                </div>

                <Button variant="default" size="lg" className="w-fit mt-2">
                  Saber Mais
                  <FiArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Grid sequencial de próximos eventos --- */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
                Agenda
              </span>
              <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight">
                Próximos Eventos
              </h2>
            </div>
            <EUStars size={40} opacity={0.15} className="hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => {
              const [day, month] = event.date.split(" ");
              return (
                <a
                  key={index}
                  href={`/eventos/${event.slug}`}
                  className="group flex flex-col bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Cabeçalho: título + data grande */}
                  <div className="flex items-start justify-between gap-3 p-5 pb-4">
                    <h3 className="font-ubuntu font-bold text-tertiary text-sm leading-snug">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 px-5 pb-4">
                    <span className="font-ubuntu font-bold text-primary text-4xl leading-none">
                      {day}
                    </span>
                    <span className="font-open-sans text-gray-400 text-xs leading-tight uppercase">
                      {month}
                    </span>
                  </div>

                  {/* Imagem */}
                  <div className="relative w-full h-40 bg-gray-200 overflow-hidden">
                    <img
                      src={event.image || featuredEvent.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 left-3 font-ubuntu font-semibold text-xs px-2.5 py-1 rounded-full ${categoryColor[event.category]}`}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Rodapé escuro */}
                  <div className="mt-auto bg-tertiary px-5 py-3 flex items-center justify-between">
                    <span className="text-white/90 font-ubuntu font-semibold text-xs">
                      Mais Info
                    </span>
                    <FiArrowRight
                      size={14}
                      className="text-secondary group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex justify-center mt-14">
            <Button variant="outline" size="lg">
              Ver Mais Eventos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eventos;