import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiArrowRight, FiHelpCircle, FiClipboard, FiCalendar, FiSearch, FiMail } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/PAIE.PNG";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiHelpCircle,
    title: "Solicitar Assistência",
    text: "Pedido geral de apoio a um investidor ou empresa europeia em Moçambique.",
    to: "/paie/balcao-do-investidor/solicitar-assistencia",
  },
  {
    icon: FiClipboard,
    title: "Abrir Pedido de Apoio",
    text: "Formalize um pedido específico junto da equipa técnica do PAIE.",
    to: "/paie/balcao-do-investidor/abrir-pedido",
  },
  {
    icon: FiCalendar,
    title: "Agendar Reunião",
    text: "Marque uma reunião presencial ou remota com a equipa do PAIE.",
    to: "/paie/balcao-do-investidor/agendar-reuniao",
  },
  {
    icon: FiSearch,
    title: "Acompanhar Pedidos",
    text: "Consulte o estado dos pedidos já submetidos anteriormente.",
    to: "/paie/balcao-do-investidor/acompanhar-pedidos",
  },
  {
    icon: FiMail,
    title: "Contactar a Equipa PAIE",
    text: "Fale directamente com a equipa técnica para questões urgentes.",
    to: "/paie/balcao-do-investidor/contactar-equipa",
  },
];

const BalcaoDoInvestidor = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <PageHeader image={PAIEImage} title="Balcão do Investidor" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Balcão do Investidor
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Ponto único de atendimento
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            O Balcão do Investidor é o primeiro ponto de contacto entre a
            sua empresa e a EuroCam. Escolha abaixo o serviço que
            corresponde à sua necessidade.
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

export default BalcaoDoInvestidor;
