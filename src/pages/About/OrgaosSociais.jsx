import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import EUStars from "../../components/Eustars";
import SimoniSantiImage from "../../assets/images/Simoni Santi.png";
import PauloOliveiraImage from "../../assets/images/Paulo Viera.jpeg";
import RahiImage from "../../assets/images/Remy Bayiha.jpg";
import JoseMariaImage from "../../assets/images/jose-lodares.png";
import HolgerHeyImage from "../../assets/images/Holger Hey.jpeg";
import MarkatoImage from "../../assets/images/markato.jpg";
import AntoninoMaggioreImage from "../../assets/images/Antonio Maggiore.jpeg";
import TatianaMataImage from "../../assets/images/Tatiana.png";
import AboutPageImage from "../../assets/images/About.PNG";

// NOTA: estes dados virão futuramente do painel admin (CMS).
// Basta substituir os arrays por um fetch à API/CMS quando estiver pronto.
// Cada membro segue esta estrutura:
// { nome, cargo, pais, foto, linkedin? }

const direcao = [
  {
    nome: "Simone Santi",
    cargo: "Presidente",
    pais: "Itália",
    foto: SimoniSantiImage,
    linkedin: "#",
  },
  {
    nome: "Paulo Oliveira",
    cargo: "Vice-Presidente",
    pais: "Portugal",
    foto: PauloOliveiraImage,
    linkedin: "#",
  },
  {
    nome: "Remy Bayiha Kodock",
    cargo: "Vice-Presidente",
    pais: "França",
    foto: RahiImage,
  },
  {
    nome: "José Maria Sanchez-Castilho Lodares",
    cargo: "Vogal",
    pais: "Espanha",
    foto: JoseMariaImage,
  },
  {
    nome: "Tatiana Mata",
    cargo: "Vogal",
    pais: "Países Baixos",
    foto: TatianaMataImage,
  },
];

const conselhoFiscal = [
  {
    nome: "Holger Hey",
    cargo: "Presidente do Conselho Fiscal",
    pais: "Alemanha",
    foto: HolgerHeyImage,
  },
];

const assembleiaGeral = [
  {
    nome: "Gerry Marketos",
    cargo: "Presidente da Assembleia Geral",
    pais: "Grécia",
    foto: MarkatoImage,
  },

  {
    nome: "Antonino Maggiore",
    cargo: "Presidente Honorário",
    pais: "Embaixador da Delegação da União Europeia para Moçambique",
    foto: AntoninoMaggioreImage,
  },
];

const MemberCard = ({ nome, cargo, pais, foto, linkedin }) => (
  <div className="group flex flex-col bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
    <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
      <img
        src={foto}
        alt={nome}
        className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-tertiary/0 group-hover:bg-tertiary/10 transition-colors duration-300" />
    </div>

    <div className="p-5 flex flex-col gap-1">
      <h3 className="font-ubuntu font-bold text-tertiary text-base leading-snug">
        {nome}
      </h3>
      <p className="font-open-sans text-primary text-sm font-semibold">
        {cargo}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="inline-flex items-center gap-1.5 font-open-sans text-gray-400 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          {pais}
        </span>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${nome}`}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            <FiLinkedin size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const OrgaoSection = ({ title, subtitle, members }) => (
  <div className="mb-20 last:mb-0">
    <div className="mb-8">
      <h2 className="font-ubuntu font-bold text-primary text-2xl md:text-3xl leading-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-open-sans text-gray-500 text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  </div>
);

const OrgaosSociais = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <PageHeader
        image={AboutPageImage}
        title="Órgãos Sociais"
        subtitle="Conheça os membros que compõem os órgãos sociais da EuroCam, responsáveis por liderar e orientar as atividades da associação em Moçambique."
      />

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <EUStars size={26} opacity={0.9} />
            <span className="text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase">
              Liderança e Governação
            </span>
          </div>

          <OrgaoSection
            title="Direção"
            subtitle="Responsável pela gestão executiva e representação institucional da EuroCam."
            members={direcao}
          />

          <OrgaoSection
            title="Conselho Fiscal"
            subtitle="Órgão de fiscalização e controlo das contas e atividades da associação."
            members={conselhoFiscal}
          />

          <OrgaoSection
            title="Assembleia Geral"
            subtitle="Órgão máximo de deliberação, composto pelos associados da EuroCam."
            members={assembleiaGeral}
          />
        </div>
      </section>
    </>
  );
};

export default OrgaosSociais;
