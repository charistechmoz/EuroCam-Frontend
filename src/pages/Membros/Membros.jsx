import React from "react";
import { Link } from "react-router-dom";
import {
  FiUsers,
  FiShield,
  FiCompass,
  FiBarChart2,
} from "react-icons/fi";
import { Button } from "../../components/ui/button";
import PageHeader from "../../components/PageHeader";
import Camaras from "../../components/Camaras";

const benefits = [
  {
    icon: FiUsers,
    title: "Rede de Contactos e Parcerias Estratégicas",
    text: "Participação em eventos exclusivos, missões empresariais e feiras, possibilitando networking com empresas europeias e moçambicanas, além de acesso a oportunidades de colaboração internacional.",
  },
  {
    icon: FiShield,
    title: "Advocacia e Representação Setorial",
    text: "Defendemos os interesses dos nossos associados junto a órgãos governamentais e entidades reguladoras, promovendo políticas favoráveis para a competitividade e crescimento empresarial.",
  },
  {
    icon: FiCompass,
    title: "Consultoria e Suporte Local",
    text: "Oferecemos apoio em questões de regulamentação e práticas locais, além de orientações sobre sustentabilidade, práticas de mercado e expansão de negócios em Moçambique.",
  },
  {
    icon: FiBarChart2,
    title: "Acesso a Informação e Insights de Mercado",
    text: "Acesso exclusivo a relatórios setoriais, análises de mercado e informações económicas para apoiar tomadas de decisão estratégicas.",
  },
];

const Membros = () => {
  return (
    <>
      <PageHeader
        image="/src/assets/images/membros.jpg"
        title="Membros"
        subtitle="Junte-se a Nós"
      />
      {/* Intro */}
      <section className="w-full bg-gray-100 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-4">
            Junte-se a Nós
          </span>
          <h1 className="font-ubuntu font-bold text-gray-500 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Associados da EuroCam
          </h1>
          <p className="font-open-sans text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            A EuroCam reúne empresas e organizações que compartilham o
            compromisso de fomentar o desenvolvimento sustentável e a
            inovação em Moçambique. Os nossos associados representam uma
            diversidade de setores, incluindo infraestrutura, energia,
            finanças, tecnologia, saúde, e mais, fortalecendo as relações
            entre a Europa e Moçambique. Juntos, promovemos um ambiente de
            negócios colaborativo, impulsionando o crescimento económico e
            a competitividade das empresas associadas.
          </p>
        </div>
      </section>

      {/* Porquê ser associado */}
      <section className="w-full bg-fourth py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
              Vantagens
            </span>
            <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight">
              Por Que Ser um Associado da EuroCam?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-ubuntu font-bold text-tertiary text-base md:text-lg leading-snug mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-open-sans text-gray-500 text-sm leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Camaras logo section */}
      <Camaras />

      {/* CTA final */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="font-ubuntu font-bold text-primary text-2xl md:text-3xl leading-tight">
            Pronto para fazer parte da EuroCam?
          </h2>
          <p className="font-open-sans text-gray-500 text-base leading-relaxed max-w-xl">
            Torne-se associado e junte-se a uma rede empresarial que liga a
            Europa a Moçambique.
          </p>
          <Link to="/contactos">
            <Button variant="default" size="lg">
              Quero Ser Associado
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Membros;