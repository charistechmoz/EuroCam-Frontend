import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";
import { MdPhone, MdEmail } from "react-icons/md";
import { Button } from "./ui/button";

const events = [
  {
    slug: "eu-business-cocktail",
    image: "/logo-eurocam.jpg",
    date: "12 Mai 2026",
    location: "Maputo",
    title: "EU Business Cocktail",
    excerpt:
      "Momento de networking entre empresários europeus e moçambicanos, reforçando parcerias e novas oportunidades de negócio.",
  },
  {
    slug: "eu-zimbabwe-mission",
    image: "/logo-eurocam.jpg",
    date: "03 Jun 2026",
    location: "Harare, Zimbabwe",
    title: "European Union – Zimbabwe Mission",
    excerpt:
      "Missão empresarial que liga investidores europeus a oportunidades emergentes na região austral de África.",
  },
  {
    slug: "eubn-2026",
    image: "/logo-eurocam.jpg",
    date: "20 Jul 2026",
    location: "Maputo",
    title: "EU Business Network (EUBN 2026)",
    excerpt:
      "2.ª edição do encontro que junta empresas membro, parceiros institucionais e potenciais investidores europeus.",
  },
];

const featuredEvent = events[0];

const EventsSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
              Agenda
            </span>
            <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight">
              Eventos e Feiras
            </h2>
          </div>

          <Link to="/eventos" className="shrink-0">
            <Button variant="outline" size="lg">
              Ver Todos os Eventos
            </Button>
          </Link>
        </div>

        {/* Layout principal: lista de eventos + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal: lista de eventos */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {events.map((event, index) => (
              <Link
                key={index}
                to={`/eventos/${event.slug}`}
                className="group flex flex-col sm:flex-row gap-5 bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden p-4"
              >
                <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0 rounded-md overflow-hidden bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 py-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 font-open-sans text-xs mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar size={13} />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin size={13} />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="font-ubuntu font-bold text-tertiary text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-open-sans text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                    {event.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-primary font-ubuntu font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Ver Detalhes
                    <FiArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar de widgets */}
          <div className="flex flex-col gap-6">
            {/* Widget: Torne-se Membro */}
            <div className="bg-primary rounded-lg p-6 flex flex-col gap-3">
              <h3 className="font-ubuntu font-bold text-fourth text-lg leading-snug">
                Torne-se Membro
              </h3>
              <p className="font-open-sans text-white/75 text-sm leading-relaxed">
                Junte-se à rede da EuroCam e tenha acesso a eventos exclusivos,
                advocacia e oportunidades de negócio.
              </p>
              <Link to="/associados">
                <Button variant="secondary" size="default" className="w-full mt-1">
                  Associar-me
                </Button>
              </Link>
            </div>

            {/* Widget: Evento em destaque */}
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-32 bg-gray-200">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-secondary text-tertiary font-ubuntu font-semibold text-xs px-2.5 py-1 rounded">
                  Em Destaque
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 text-gray-400 font-open-sans text-xs">
                  <FiCalendar size={12} />
                  {featuredEvent.date}
                </span>
                <h4 className="font-ubuntu font-bold text-tertiary text-sm leading-snug">
                  {featuredEvent.title}
                </h4>
                <Link
                  to={`/eventos/${featuredEvent.slug}`}
                  className="text-primary font-ubuntu font-semibold text-xs hover:underline"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>

            {/* Widget: Contacto rápido */}
            <div className="bg-tertiary rounded-lg p-6 flex flex-col gap-4">
              <h3 className="font-ubuntu font-bold text-fourth text-base">
                Precisa de Ajuda?
              </h3>
              <a
                href="tel:+258867542605"
                className="flex items-center gap-3 text-white/80 hover:text-white font-open-sans text-sm transition-colors"
              >
                <span className="bg-white/10 p-2 rounded-md">
                  <MdPhone size={15} />
                </span>
                +258 867 542 605
              </a>
              <a
                href="mailto:info@eurocam.org.mz"
                className="flex items-center gap-3 text-white/80 hover:text-white font-open-sans text-sm transition-colors break-all"
              >
                <span className="bg-white/10 p-2 rounded-md shrink-0">
                  <MdEmail size={15} />
                </span>
                info@eurocam.org.mz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;