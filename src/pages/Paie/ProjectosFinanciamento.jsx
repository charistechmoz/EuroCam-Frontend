import React from "react";
import { FiArrowRight, FiUpload, FiTrendingUp, FiUsers, FiUserCheck, FiTarget } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/paie.jpg";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiUpload,
    title: "Submeter Projecto",
    text: "Apresente o seu projecto de investimento à plataforma PAIE.",
    to: "/paie/projectos-e-financiamento/submeter-projecto",
  },
  {
    icon: FiTrendingUp,
    title: "Projectos à Procura de Financiamento",
    text: "Consulte os projectos actualmente à procura de financiamento.",
    to: "/paie/projectos-e-financiamento/projectos-a-procura-de-financiamento",
  },
  {
    icon: FiUsers,
    title: "Procurar Investidores",
    text: "Encontre investidores europeus interessados em oportunidades em Moçambique.",
    to: "/paie/projectos-e-financiamento/procurar-investidores",
  },
  {
    icon: FiUserCheck,
    title: "Procurar Parceiros",
    text: "Identifique parceiros de negócio para o seu projecto de investimento.",
    to: "/paie/projectos-e-financiamento/procurar-parceiros",
  },
  {
    icon: FiTarget,
    title: "Oportunidades de Investimento",
    text: "Explore as oportunidades de investimento disponíveis em Moçambique.",
    to: "/paie/projectos-e-financiamento/oportunidades-de-investimento",
  },
];

const ProjectosFinanciamento = () => {
  return (
    <>
      <PageHeader image={PAIEImage} title="Projectos e Financiamento" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Projectos e Financiamento
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Espaço para apresentação de projectos e captação de investidores.
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            Projectos e Financiamento é o espaço para apresentar projectos de
            investimento e ligar promotores a potenciais investidores. Escolha
            abaixo o serviço que corresponde à sua necessidade.
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

export default ProjectosFinanciamento;
