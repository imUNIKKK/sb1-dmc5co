import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollTo } from '../hooks/useScrollTo';

const HeroSection = () => {
  const { language } = useLanguage();
  const scrollTo = useScrollTo();

  const content = {
    en: {
      title: "PERFORMANCE FIRST",
      subtitle: "Unlock your team's full potential and discover future talents.",
      cta: "Get Started Now"
    },
    fr: {
      title: "LA PERFORMANCE AVANT TOUT",
      subtitle: "Libérez le plein potentiel de votre équipe et découvrez les talents de demain.",
      cta: "Commencer maintenant"
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo('join-us');
  };

  const { title, subtitle, cta } = content[language];

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Analytics Dashboard"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary animate-fade-in">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          {subtitle}
        </p>
        <a
          href="#join-us"
          onClick={handleClick}
          className="bg-primary text-white px-8 py-3 rounded-md hover-primary button-transition text-lg inline-block transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-delay-2"
        >
          {cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;