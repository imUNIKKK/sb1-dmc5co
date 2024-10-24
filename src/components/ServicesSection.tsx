import React from 'react';
import { Activity, FileText, Users, Cpu, ExternalLink, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollTo } from '../hooks/useScrollTo';

const ServiceCard = ({ icon: Icon, title, description, action }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <Icon className="h-12 w-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {action}
  </div>
);

const ActionButton = ({ href, text, icon: IconComponent, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover-primary button-transition mt-2 transform hover:scale-105 transition-all duration-300 ease-in-out"
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
  >
    {text}
    <IconComponent className="ml-2 h-4 w-4" />
  </a>
);

const ServicesSection = () => {
  const { language } = useLanguage();
  const scrollTo = useScrollTo();

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo('join-us');
  };

  const content = {
    en: {
      title: "Our Services",
      services: [
        {
          icon: Activity,
          title: "Performance Tracking",
          description: "Track and analyze your team's performance with our advanced tools.",
          action: <ActionButton href="#join-us" text="Learn More" icon={ChevronRight} onClick={handleLearnMoreClick} />
        },
        {
          icon: FileText,
          title: "PC Optimization",
          description: "Boost your gaming performance with our Windows optimization service. Get the most out of your hardware.",
          action: <ActionButton href="#" text="Pricing" icon={ExternalLink} onClick={(e) => e.preventDefault()} />
        },
        {
          icon: Users,
          title: "Talent Scouting",
          description: "Discover and recruit the best upcoming talents in the esports scene."
        },
        {
          icon: Cpu,
          title: "AI-Powered Analysis",
          description: "Leverage artificial intelligence to gain deeper insights into game strategies."
        }
      ]
    },
    fr: {
      title: "Nos Services",
      services: [
        {
          icon: Activity,
          title: "Suivi des Performances",
          description: "Suivez et analysez les performances de votre équipe avec nos outils avancés.",
          action: <ActionButton href="#join-us" text="En savoir plus" icon={ChevronRight} onClick={handleLearnMoreClick} />
        },
        {
          icon: FileText,
          title: "Optimisation PC",
          description: "Optimisez vos performances de jeu avec notre service d'optimisation Windows. Tirez le meilleur parti de votre matériel.",
          action: <ActionButton href="#" text="Tarifs" icon={ExternalLink} onClick={(e) => e.preventDefault()} />
        },
        {
          icon: Users,
          title: "Repérage de Talents",
          description: "Découvrez et recrutez les meilleurs talents émergents de la scène esport."
        },
        {
          icon: Cpu,
          title: "Analyse par IA",
          description: "Utilisez l'intelligence artificielle pour obtenir des insights plus profonds sur les stratégies de jeu."
        }
      ]
    }
  };

  const { title, services } = content[language];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;