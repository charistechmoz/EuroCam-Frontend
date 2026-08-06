import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiFileText,
  FiTrendingUp,
  FiBook,
  FiGift,
  FiRss,
  FiCalendar,
} from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/paie.jpg";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiBookOpen,
    title: "Guia do Investidor",
    text: "Consulte o guia com os passos essenciais para investir em Moçambique.",
    to: "/paie/centro-de-recursos/guia-do-investidor",
  },
  {
    icon: FiFileText,
    title: "Estudos e Relatórios",
    text: "Aceda a estudos e relatórios sobre o ambiente de investimento.",
    to: "/paie/centro-de-recursos/estudos-e-relatorios",
  },
  {
    icon: FiTrendingUp,
    title: "Mozambique Business Outlook",
    text: "Análise periódica das perspectivas económicas e de negócio em Moçambique.",
    to: "/paie/centro-de-recursos/mozambique-business-outlook",
  },
  {
    icon: FiBook,
    title: "Legislação",
    text: "Consulte a legislação relevante para investidores europeus.",
    to: "/paie/centro-de-recursos/legislacao",
  },
  {
    icon: FiGift,
    title: "Incentivos",
    text: "Informação sobre os incentivos disponíveis ao investimento.",
    to: "/paie/centro-de-recursos/incentivos",
  },
  {
    icon: FiRss,
    title: "Notícias",
    text: "Acompanhe as últimas notícias relevantes para investidores.",
    to: "/paie/centro-de-recursos/noticias",
  },
  {
    icon: FiCalendar,
    title: "Eventos e Missões Empresariais",
    text: "Fique a par dos próximos eventos e missões empresariais da EuroCam.",
    to: "/paie/centro-de-recursos/eventos-e-missoes-empresariais",
  },
];

const CentroDeRecursos = () => {
  return (
    <>
      <PageHeader image={PAIEImage} title="Centro de Recursos" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Centro de Recursos
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Informação estratégica para apoiar o investimento.
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            O Centro de Recursos reúne informação estratégica para apoiar as
            decisões de investimento em Moçambique. Escolha abaixo o serviço
            que corresponde à sua necessidade.
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

export default CentroDeRecursos;
