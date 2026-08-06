import React from "react";
import { FiArrowRight, FiUserPlus, FiEdit3, FiDatabase, FiLock, FiSearch } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import PAIESubNav from "../../components/PAIESubNav";
import PAIEImage from "../../assets/images/paie.jpg";

// Cada acção liga-se a um formulário/fluxo próprio quando o backend estiver pronto.
// Por agora, "to" aponta para uma rota futura — troca por um <a href="#form"> ou
// modal quando o formulário estiver implementado.
const acoes = [
  {
    icon: FiUserPlus,
    title: "Registar Empresa",
    text: "Registe a sua empresa na base de dados de investidores europeus e moçambicanos.",
    to: "/paie/empresas/registar-empresa",
  },
  {
    icon: FiEdit3,
    title: "Actualizar Perfil da Empresa",
    text: "Mantenha os dados e o perfil da sua empresa actualizados junto da EuroCam.",
    to: "/paie/empresas/actualizar-perfil-da-empresa",
  },
  {
    icon: FiDatabase,
    title: "Empresas Registadas",
    text: "Consulte a lista de empresas já registadas na plataforma.",
    to: "/paie/empresas/empresas-registadas",
  },
  {
    icon: FiLock,
    title: "Empresas Associadas (Área exclusiva EuroCam)",
    text: "Acesso reservado aos associados da EuroCam com dados detalhados das empresas membro.",
    to: "/paie/empresas/empresas-associadas-area-exclusiva-eurocam",
  },
  {
    icon: FiSearch,
    title: "Procurar Empresas e Parceiros",
    text: "Encontre empresas e potenciais parceiros de negócio registados na plataforma.",
    to: "/paie/empresas/procurar-empresas-e-parceiros",
  },
];

const Empresas = () => {
  return (
    <>
      <PageHeader image={PAIEImage} title="Empresas" subtitle="PAIE" />
      <PAIESubNav />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Empresas
          </span>
          <h1 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-4">
            Base de dados de empresas europeias e moçambicanas.
          </h1>
          <p className="font-open-sans text-gray-600 text-base leading-relaxed max-w-2xl mb-14">
            A secção Empresas reúne a base de dados de empresas europeias e
            moçambicanas associadas à EuroCam. Escolha abaixo o serviço que
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

export default Empresas;
