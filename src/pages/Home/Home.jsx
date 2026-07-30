import React from 'react'
import Hero from '../../components/HeroSection'; 
import NaNewsletter from '../../components/Newsletter';
import News from '../../components/News';
import EventsSection from '../../components/EventsSection';


const focusPoints = [
  {
    number: "01",
    text: "Criar laços mais fortes com investidores europeus, visando atrair capital para Moçambique.",
  },
  {
    number: "02",
    text: "Melhorar as oportunidades de comércio e exportação, beneficiando tanto empresas locais quanto internacionais.",
  },
  {
    number: "03",
    text: "Facilitar a advocacia como um serviço fundamental para os investidores europeus, garantindo apoio e segurança nas operações.",
  },
  {
    number: "04",
    text: "Apoiar o diálogo entre o governo e o setor privado, contribuindo para o crescimento sustentável do setor privado em Moçambique.",
  },
];


const Home = () => {
  return (
    <>
      <Hero />

      {/* Focus points da EuroCam */}
      <section className="w-full bg-fourth py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Coluna do logo */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <div className="w-full max-w-xs aspect-square rounded-md border border-primary/10 bg-primary/5 flex items-center justify-center p-8">
            <img
              src="/logo-eurocam.jpg"
              alt="Logotipo EuroCam"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden lg:block w-16 h-1 bg-secondary mt-8" />
        </div>
 
        {/* Coluna do conteúdo */}
        <div className="lg:col-span-8">
          <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
            Quem Somos
          </span>
 
          <h2 className="font-ubuntu font-bold text-primary text-3xl md:text-4xl leading-tight mb-6">
            EuroCam: A voz do investidor europeu em Moçambique
          </h2>
 
          <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            A EuroCam é uma associação empresarial com o objetivo de
            fortalecer as relações entre o empresário europeu e Moçambique.
            O seu foco está em:
          </p>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-md border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <span className="font-ubuntu font-bold text-2xl text-secondary shrink-0">
                  {point.number}
                </span>
                <p className="font-open-sans text-gray-700 text-sm md:text-base leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <News />
    <EventsSection />

    <NaNewsletter />
    </>
  )
}

export default Home
