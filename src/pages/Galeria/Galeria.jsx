import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import EUStars from "../../components/Eustars";
import { galeriaItems } from "../../assets/data/data";
import AboutPageImage from "../../assets/images/About.PNG"

const categories = ["Todas", "Eventos", "Missões", "Feiras", "Vídeos"];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "Todas"
      ? galeriaItems
      : galeriaItems.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(
    (e) => {
      e.stopPropagation();
      setLightboxIndex((prev) => (prev + 1) % filtered.length);
    },
    [filtered.length]
  );

  const showPrev = useCallback(
    (e) => {
      e.stopPropagation();
      setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    },
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((p) => (p + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIndex((p) => (p - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filtered.length, closeLightbox]);

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <PageHeader
        image={AboutPageImage}
        title="Galeria"
        subtitle="Explore a nossa galeria de imagens e vídeos, capturando momentos marcantes de eventos, iniciativas e atividades da EuroCam em Moçambique."
      />

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Cabeçalho + filtro */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <EUStars size={28} opacity={0.9} />
              <div>
                <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-1">
                  Momentos EuroCam
                </span>
                <h2 className="font-pt-serif font-bold text-primary text-3xl md:text-4xl leading-tight">
                  Galeria
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
          </div>

          {/* Grid tipo mosaico */}
          {filtered.length === 0 ? (
            <p className="font-open-sans text-gray-500 text-sm">
              Não há conteúdo nesta categoria de momento.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-lg overflow-hidden bg-gray-200 ${item.span}`}
                >
                  <img
                    src={item.type === "video" ? item.poster : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  {item.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <FiPlay size={18} className="text-tertiary ml-0.5" />
                      </span>
                    </span>
                  )}

                  <span className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="block text-secondary font-ubuntu font-semibold text-[11px] uppercase tracking-wide mb-0.5">
                      {item.category}
                    </span>
                    <span className="block text-white font-ubuntu font-semibold text-sm leading-snug">
                      {item.title}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 md:p-10"
        >
          {/* Fechar */}
          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <FiX size={20} />
          </button>

          {/* Setas */}
          <button
            onClick={showPrev}
            aria-label="Anterior"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={showNext}
            aria-label="Seguinte"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            <FiChevronRight size={22} />
          </button>

          {/* Conteúdo */}
          <div className="flex flex-col items-center gap-4 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {activeItem.type === "video" ? (
              <video
                src={activeItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[75vh] rounded-md"
              />
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-md"
              />
            )}

            <div className="text-center">
              <span className="block text-secondary font-ubuntu font-semibold text-xs uppercase tracking-wide mb-1">
                {activeItem.category}
              </span>
              <p className="text-white font-ubuntu font-semibold text-base">
                {activeItem.title}
              </p>
              <p className="text-white/50 font-open-sans text-xs mt-2">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Galeria;