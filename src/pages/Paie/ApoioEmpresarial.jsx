import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiFileText,
  FiGift,
  FiPercent,
  FiGlobe,
  FiBarChart2,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/PAIE.PNG";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiBriefcase,
    title: "Constituição de Empresas",
    text: "Apoio no processo de constituição legal de empresas em Moçambique.",
    to: "/paie/apoio-empresarial/constituicao-de-empresas",
  },
  {
    icon: FiFileText,
    title: "Licenciamento",
    text: "Orientação sobre os processos de licenciamento aplicáveis ao seu negócio.",
    to: "/paie/apoio-empresarial/licenciamento",
  },
  {
    icon: FiGift,
    title: "Incentivos ao Investimento",
    text: "Conheça os incentivos disponíveis para investidores europeus.",
    to: "/paie/apoio-empresarial/incentivos-ao-investimento",
  },
  {
    icon: FiPercent,
    title: "Questões Fiscais",
    text: "Esclarecimento de dúvidas sobre obrigações e regimes fiscais.",
    to: "/paie/apoio-empresarial/questoes-fiscais",
  },
  {
    icon: FiGlobe,
    title: "Comércio Internacional",
    text: "Apoio em processos de importação, exportação e comércio internacional.",
    to: "/paie/apoio-empresarial/comercio-internacional",
  },
  {
    icon: FiBarChart2,
    title: "Estudos de Mercado",
    text: "Acesso a estudos de mercado para apoiar a decisão de investimento.",
    to: "/paie/apoio-empresarial/estudos-de-mercado",
  },
  {
    icon: FiUsers,
    title: "Identificação de Parceiros",
    text: "Ajuda na identificação de parceiros locais para o seu negócio.",
    to: "/paie/apoio-empresarial/identificacao-de-parceiros",
  },
  {
    icon: FiMessageSquare,
    title: "Consultoria Empresarial",
    text: "Aconselhamento técnico especializado para o seu investimento.",
    to: "/paie/apoio-empresarial/consultoria-empresarial",
  },
];

const ApoioEmpresarial = () => {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

  return (
    <>
      <PageHeader image={PAIEImage} title="Apoio Empresarial" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Apoio Empresarial
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Serviços de consultoria e facilitação de negócios.
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            O Apoio Empresarial disponibiliza serviços de consultoria e
            facilitação de negócios para investidores europeus em Moçambique.
            Escolha abaixo o serviço que corresponde à sua necessidade.
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

export default ApoioEmpresarial;
