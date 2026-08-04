import React from "react";
import {
  Landmark,
  TrendingUp,
  ShieldCheck,
  MessagesSquare,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../../components/PageHeader";
import EUStars from "../../components/Eustars";
import AboutPageImage from "../../assets/images/About.PNG"


const objetivos = [
  {
    icon: Landmark,
    title: "Criar laços mais fortes com investidores europeus",
    text: "Facilitar a atração de capital estrangeiro para o desenvolvimento económico de Moçambique.",
  },
  {
    icon: TrendingUp,
    title: "Melhorar as oportunidades de comércio e exportação",
    text: "Ampliar as possibilidades para empresas moçambicanas exportarem os seus produtos para a Europa.",
  },
  {
    icon: ShieldCheck,
    title: "Facilitar a advocacia como serviço fundamental",
    text: "Prover suporte jurídico e estratégico para investidores europeus, garantindo um ambiente de negócios seguro e confiável.",
  },
  {
    icon: MessagesSquare,
    title: "Apoiar o diálogo entre governo e setor privado",
    text: "Estimular conversas entre o governo e o setor privado, promovendo um ambiente de negócios mais favorável.",
  },
];

const missaoPontos = [
  "Atrair investimentos europeus.",
  "Ampliar oportunidades de comércio e exportação.",
  "Facilitar o diálogo entre governo e setor privado.",
];

const SobreNos = () => {
  return (
    <>
      <PageHeader
        image={AboutPageImage}
        title="Sobre Nós"
        subtitle="Conheça a missão, visão e objetivos que orientam o trabalho da EuroCam em Moçambique."
      />

      {/* Introdução */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <EUStars size={24} opacity={0.9} />
            <span className="text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase">
              Quem Somos
            </span>
          </div>
          <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed">
            A EuroCam é uma associação empresarial que representa os
            interesses do empresário europeu no país. Com o compromisso de
            fortalecer as relações entre empresas europeias e moçambicanas,
            a EuroCam tem desempenhado um papel fundamental na promoção de
            parcerias estratégicas e no crescimento do setor privado em
            Moçambique.
          </p>
        </div>
      </section>

      {/* Objetivos — percurso conectado */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
              O Nosso Foco
            </span>
            <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight">
              Objetivos
            </h2>
          </div>

          <div className="relative">
            {/* Linha conectora, só em desktop */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {objetivos.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-5">
                      <Icon size={26} className="text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-tertiary font-ubuntu font-bold text-xs flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-ubuntu font-bold text-tertiary text-sm md:text-base leading-snug mb-2 px-2">
                      {item.title}
                    </h3>
                    <p className="font-open-sans text-gray-500 text-xs md:text-sm leading-relaxed px-2">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Missão & Visão */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Missão */}
            <div className="flex flex-col bg-primary rounded-lg p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Target size={26} className="text-secondary" />
              </div>
              <h3 className="font-ubuntu font-bold text-white text-2xl leading-tight mb-4">
                Missão
              </h3>
              <p className="font-open-sans text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Promover parcerias empresariais entre Moçambique e a União
                Europeia, fortalecendo o crescimento económico e comercial.
              </p>

              <ul className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/15">
                {missaoPontos.map((ponto, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span className="font-open-sans text-white/90 text-sm leading-relaxed">
                      {ponto}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visão */}
            <div className="flex flex-col bg-tertiary rounded-lg p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Eye size={26} className="text-secondary" />
              </div>
              <h3 className="font-ubuntu font-bold text-white text-2xl leading-tight mb-4">
                Visão
              </h3>
              <p className="font-open-sans text-white/80 text-sm md:text-base leading-relaxed">
                Ser a principal ponte de ligação entre investidores europeus
                e o setor privado moçambicano.
              </p>

              <div className="mt-auto pt-6">
                <EUStars size={44} opacity={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNos;