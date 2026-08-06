import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiAlertTriangle,
  FiAlertOctagon,
  FiThumbsUp,
  FiClipboard,
  FiDollarSign,
  FiTruck,
  FiMessageCircle,
} from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/PAIE.PNG";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiAlertTriangle,
    title: "Reportar Preocupações",
    text: "Reporte preocupações gerais relacionadas com o ambiente de negócios.",
    to: "/paie/ambiente-de-negocios/reportar-preocupacoes",
  },
  {
    icon: FiAlertOctagon,
    title: "Reportar Barreiras ao Investimento",
    text: "Sinale barreiras concretas que estejam a dificultar o seu investimento.",
    to: "/paie/ambiente-de-negocios/reportar-barreiras-ao-investimento",
  },
  {
    icon: FiThumbsUp,
    title: "Sugestões de Melhoria",
    text: "Partilhe sugestões para melhorar o ambiente de negócios em Moçambique.",
    to: "/paie/ambiente-de-negocios/sugestoes-de-melhoria",
  },
  {
    icon: FiClipboard,
    title: "Dificuldades Administrativas",
    text: "Reporte dificuldades enfrentadas junto de instituições administrativas.",
    to: "/paie/ambiente-de-negocios/dificuldades-administrativas",
  },
  {
    icon: FiDollarSign,
    title: "Dificuldades Fiscais",
    text: "Reporte dificuldades relacionadas com obrigações e processos fiscais.",
    to: "/paie/ambiente-de-negocios/dificuldades-fiscais",
  },
  {
    icon: FiTruck,
    title: "Dificuldades Logísticas",
    text: "Reporte dificuldades logísticas que afectem a operação do seu negócio.",
    to: "/paie/ambiente-de-negocios/dificuldades-logisticas",
  },
  {
    icon: FiMessageCircle,
    title: "Acompanhar Respostas da EuroCam",
    text: "Consulte o estado e as respostas da EuroCam aos casos reportados.",
    to: "/paie/ambiente-de-negocios/acompanhar-respostas-da-eurocam",
  },
];

const AmbienteDeNegocios = () => {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

  return (
    <>
      <PageHeader image={PAIEImage} title="Ambiente de Negócios" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Ambiente de Negócios
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Canal de comunicação entre os investidores e a EuroCam.
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            O Ambiente de Negócios é o canal directo de comunicação entre os
            investidores e a EuroCam para reportar dificuldades e sugerir
            melhorias. Escolha abaixo o serviço que corresponde à sua
            necessidade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {acoes.map((acao, index) => {
              const Icon = acao.icon;
              return (
                <a
                  key={index}
                  href={acao.to}
                  className="group flex gap-5 p-6 rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-ubuntu font-bold text-tertiary text-base leading-snug mb-1.5">
                      {acao.title}
                    </h3>
                    <p className="font-open-sans text-gray-500 text-sm leading-relaxed mb-3">
                      {acao.text}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary font-ubuntu font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Aceder
                      <FiArrowRight size={14} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AmbienteDeNegocios;
