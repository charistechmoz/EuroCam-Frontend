import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = () => setIsVisible(!isVisible);


  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024 && isVisible) {
      setIsVisible(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [isVisible]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Sobre Nós",
      dropdown: [
        { name: "Quem Somos", path: "/sobre-nos" },
        { name: "Órgãos Sociais", path: "/orgaos-sociais" },
      ],
    },
    { name: "Membros", path: "/associados" },
    { name: "PAIE", path: "/paie" },
    { name: "Eventos", path: "/eventos" },
    { name: "Notícias", path: "/noticias" },
    { name: "Galeria", path: "/galeria" },
    { name: "Contacto", path: "/contactos" },
  ];

  return (
    <>
      {/* --- Top Info Bar --- */}
      <section className="hidden md:block w-full py-1.5 bg-tertiary font-open-sans text-xs">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1.5 items-center">
              <MdPhone size={14} className="text-secondary" />
              <span className="text-white/90">+258 867 542 605</span>
            </div>
            <div className="flex flex-row gap-1.5 items-center">
              <MdEmail size={14} className="text-secondary" />
              <span className="text-white/90">info@eurocam.org.mz</span>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <a href="https://www.linkedin.com/company/eurocam-moz/" target="_blank" rel="noreferrer">
              <FaLinkedin size={15} className="text-white/90 hover:text-secondary transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100081305953874" target="_blank" rel="noreferrer">
              <FaFacebook size={15} className="text-white/90 hover:text-secondary transition" />
            </a>
            <a href="https://www.instagram.com/eurocam_" target="_blank" rel="noreferrer">
              <FaInstagram size={15} className="text-white/90 hover:text-secondary transition" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Main Navigation Bar --- */}
      <nav className="relative z-50 w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-eurocam.jpg"
              alt="EuroCam - Associação dos Empresários Europeus em Moçambique"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={handleClick}
            aria-label="Abrir menu"
            className="md:hidden text-primary hover:text-secondary transition"
          >
            {isVisible ? <FaXmark size={26} /> : <GiHamburgerMenu size={26} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row gap-7 items-center relative font-ubuntu">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-[15px] text-primary hover:text-secondary font-medium flex items-center gap-1 duration-300 py-2">
                    {link.name}
                    <RiArrowDropDownLine size={20} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-primary shadow-lg rounded-md py-2 w-56 z-50 origin-top"
                      >
                        {link.dropdown.map((subLink, i) => (
                          <Link
                            key={i}
                            to={subLink.path}
                            className="block px-4 py-2 text-sm text-white hover:bg-tertiary transition"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="text-[15px] text-primary hover:text-secondary font-medium duration-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* --- Overlay for mobile --- */}
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black lg:hidden z-40"
                  onClick={handleClick}
                ></motion.div>

                {/* --- Mobile Menu --- */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.35 }}
                  className="fixed top-0 left-0 w-72 h-screen bg-primary z-50 flex flex-col items-start gap-1 p-5 shadow-lg overflow-y-auto font-ubuntu"
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <img
                      src="/logo-eurocam.jpg"
                      alt="EuroCam"
                      className="h-10 w-auto object-contain"
                    />
                    <button
                      onClick={handleClick}
                      aria-label="Fechar menu"
                      className="text-white hover:text-secondary"
                    >
                      <FaXmark size={22} />
                    </button>
                  </div>

                  {navLinks.map((link, index) =>
                    link.dropdown ? (
                      <div
                        key={index}
                        className="flex flex-col border-b border-white/20 w-full"
                      >
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.name ? null : link.name
                            )
                          }
                          className="text-white font-medium hover:text-secondary flex items-center justify-between w-full py-3"
                        >
                          <span>{link.name}</span>
                          {openDropdown === link.name ? (
                            <RiArrowDropDownLine size={24} className="text-white" />
                          ) : (
                            <RiArrowDropRightLine size={24} className="text-white" />
                          )}
                        </button>

                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="flex flex-col mb-2 space-y-1 ml-3 w-full"
                            >
                              {link.dropdown.map((subLink, i) => (
                                <Link
                                  key={i}
                                  to={subLink.path}
                                  onClick={handleClick}
                                  className="text-white/85 hover:text-secondary text-sm py-2"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={link.path}
                        onClick={handleClick}
                        className="text-white hover:text-secondary font-medium py-3 border-b border-white/20 w-full"
                      >
                        {link.name}
                      </Link>
                    )
                  )}

                  <div className="flex flex-row gap-4 items-center mt-5 pt-4 border-t border-white/20 w-full">
                    <a href="https://www.linkedin.com/company/eurocam-moz/" target="_blank" rel="noreferrer">
                      <FaLinkedin size={18} className="text-white hover:text-secondary" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100081305953874" target="_blank" rel="noreferrer">
                      <FaFacebook size={18} className="text-white hover:text-secondary" />
                    </a>
                    <a href="https://www.instagram.com/eurocam_" target="_blank" rel="noreferrer">
                      <FaInstagram size={18} className="text-white hover:text-secondary" />
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;