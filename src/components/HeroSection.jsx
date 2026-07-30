import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/eurocam_hero.jpg",
    tag: "Associação dos Empresários Europeus em Moçambique",
    title: "A voz do investidor europeu em Moçambique",
    text: "Fortalecemos as relações entre o empresário europeu e Moçambique, facilitando investimento, comércio e diálogo entre o setor público e privado.",
    primaryCta: { label: "Torne-se Membro", to: "/associados" },
    secondaryCta: { label: "Saiba Mais", to: "/sobre-nos" },
  },
  {
    image: "/eurocam_hero.jpg",
    tag: "Comércio & Exportação",
    title: "Mais oportunidades de comércio e exportação",
    text: "Ampliamos o acesso a mercados europeus e apoiamos empresas locais e internacionais a crescerem em conjunto.",
    primaryCta: { label: "Conhecer o PAIE", to: "/paie" },
    secondaryCta: { label: "Ver Eventos", to: "/eventos" },
  },
  {
    image: "/eurocam_hero.jpg",
    tag: "Diálogo Público-Privado",
    title: "Uma ponte entre governo e setor privado",
    text: "Facilitamos advocacia e diálogo institucional, garantindo apoio e segurança nas operações dos investidores europeus.",
    primaryCta: { label: "Ver Notícias", to: "/noticias" },
    secondaryCta: { label: "Contacte-nos", to: "/contactos" },
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[520px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Imagem de fundo */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay escuro sólido (sem gradiente) */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Conteúdo */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
                <div className="max-w-2xl">
                  <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-4 border-b-2 border-secondary pb-1">
                    {slide.tag}
                  </span>

                  <h1 className="font-ubuntu font-bold text-fourth text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="font-open-sans text-fourth/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    {slide.text}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={slide.primaryCta.to}>
                      <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        {slide.primaryCta.label}
                      </Button>
                    </Link>
                    <Link to={slide.secondaryCta.to}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-fourth text-fourth hover:bg-fourth hover:text-tertiary"
                      >
                        {slide.secondaryCta.label}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estrela decorativa subtil */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-24 z-20 opacity-20 pointer-events-none">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2l2.39 6.94H21l-5.6 4.06 2.14 6.94L12 15.94 6.46 20 8.6 13.06 3 9h6.61L12 2z"
            fill="#e8cc2d"
          />
        </svg>
      </div>

      {/* Setas de navegação */}
      <button
        className="hero-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-fourth/20 hover:bg-fourth/30 text-fourth flex items-center justify-center transition"
        aria-label="Slide anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className="hero-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-fourth/20 hover:bg-fourth/30 text-fourth flex items-center justify-center transition"
        aria-label="Próximo slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Paginação (bolinhas) */}
      <div className="hero-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" />
    </section>
  );
};

export default Hero;