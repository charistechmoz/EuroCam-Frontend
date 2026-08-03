import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import EUStars from "./Eustars";

const usefulLinks = [
  { name: "Delegação da UE em Moçambique", href: "https://www.eeas.europa.eu/mozambique/uniao-europeia-e-mocambique_pti?s=111" },
  { name: "Apiex", href: "https://apiex.gov.mz/" },
  { name: "CTA", href: "https://cta.org.mz/" },
  { name: "Portal do Comércio Externo", href: "https://portalcomercioexterno.gov.mz/" },
];

const memberLinks = [
  { name: "CCI França", href: "https://www.cciframoz.fr/pt.html" },
  { name: "CCMI Itália", href: "https://ccmi.co.mz/" },
];

const quickLinks = [
  { name: "Sobre Nós", to: "/sobre-nos" },
  { name: "Membros", to: "/associados" },
  { name: "PAIE", to: "/paie" },
  { name: "Eventos", to: "/eventos" },
  { name: "Notícias", to: "/noticias" },
  { name: "Contacto", to: "/contactos" },
];

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Footer Top */}
      <div className="w-full bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Logo & Descrição */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <img
                src="/logo-eurocam.jpg"
                alt="Logotipo EuroCam"
                className="h-14 w-auto object-contain"
              />
              <p className="text-white/70 font-open-sans text-sm leading-relaxed">
                Associação dos Empresários Europeus em Moçambique. A voz do
                investidor europeu, ligando Moçambique e a União Europeia.
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/company/eurocam-moz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white/10 hover:bg-secondary p-2.5 rounded-md transition-colors"
                >
                  <FaLinkedin size={16} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100081305953874"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-white/10 hover:bg-secondary p-2.5 rounded-md transition-colors"
                >
                  <FaFacebook size={16} className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/eurocam_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white/10 hover:bg-secondary p-2.5 rounded-md transition-colors"
                >
                  <FaInstagram size={16} className="text-white" />
                </a>
              </div>
            </div>

            {/* Navegação rápida */}
            <div className="flex flex-col gap-4">
              <h3 className="text-secondary font-ubuntu font-semibold text-sm uppercase tracking-wide">
                Navegação
              </h3>
              <nav className="flex flex-col gap-2.5">
                {quickLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.to}
                    className="text-white/70 hover:text-white font-open-sans text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Links úteis / membros */}
            <div className="flex flex-col gap-4">
              <h3 className="text-secondary font-ubuntu font-semibold text-sm uppercase tracking-wide">
                Links Úteis
              </h3>
              <nav className="flex flex-col gap-2.5">
                {usefulLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white font-open-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <h3 className="text-secondary font-ubuntu font-semibold text-sm uppercase tracking-wide mt-2">
                Link de Membros
              </h3>
              <nav className="flex flex-col gap-2.5">
                {memberLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white font-open-sans text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-4">
              <h3 className="text-secondary font-ubuntu font-semibold text-sm uppercase tracking-wide">
                Contacto
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <FaLocationDot size={15} className="text-secondary mt-1 shrink-0" />
                  <span className="text-white/70 font-open-sans text-sm leading-relaxed">
                    Av. Friedrich Engels, Condomínio 223, 2º Andar, Maputo
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt size={14} className="text-secondary shrink-0" />
                  <a
                    href="tel:+258867542605"
                    className="text-white/70 hover:text-white font-open-sans text-sm transition-colors"
                  >
                    +258 867 542 605
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MdEmail size={16} className="text-secondary shrink-0" />
                  <a
                    href="mailto:info@eurocam.org.mz"
                    className="text-white/70 hover:text-white font-open-sans text-sm transition-colors break-all"
                  >
                    info@eurocam.org.mz
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <EUStars size={18} opacity={0.9} />
            <p className="text-white/80 font-open-sans text-xs text-center">
              © {new Date().getFullYear()} EuroCam. Todos os direitos reservados. Financiado pela União Europeia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;