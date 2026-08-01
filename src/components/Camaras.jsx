import React from "react";
import { camarasLogos } from "../assets/data/data";

const Camaras = () => {
  // Triplicamos para garantir que nunca se vê o "salto" independentemente do viewport
  const logos = [...camarasLogos, ...camarasLogos, ...camarasLogos];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes seamless-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: seamless-marquee 25s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
          Rede de Associados
        </span>
        <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
          Nossos Associados
        </h2>
        <p className="font-open-sans text-gray-500 text-sm md:text-base leading-relaxed">
          Entre os nossos associados, estão empresas líderes nos seus setores,
          pequenas e médias empresas inovadoras e organizações
          não-governamentais, que contribuem para a missão de desenvolvimento e
          integração económica entre a Europa e Moçambique. A EuroCam orgulha-se
          de representar um grupo diversificado e dinâmico de organizações
          comprometidas com o futuro sustentável do país.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Máscaras de desvanecimento nas bordas */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-white z-10"
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-white z-10"
          style={{
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="marquee-track" style={{ gap: "3rem" }}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 w-58 h-24 rounded-md border border-gray-200 bg-white flex items-center justify-center p-5 hover:border-primary/30 transition-colors"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Camaras;
