import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollTo } from '../hooks/useScrollTo';

const Header = () => {
  const { language } = useLanguage();
  const scrollTo = useScrollTo();
  const [isVisible, setIsVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo('top');
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo('join-us');
  };

  return (
    <>
      <header className={`bg-white shadow-md fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.svg" alt="NXTLEVEL.GG Logo" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold text-secondary">NXTLEVEL.GG</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <a
              href="#join-us"
              onClick={handleJoinClick}
              className="bg-primary text-white px-4 py-2 rounded-md flex items-center hover-primary button-transition transform hover:scale-105 transition-transform duration-200"
            >
              {language === 'en' ? 'Join' : 'Rejoindre'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
      {showBackToTop && (
        <a
          href="#"
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg hover-primary button-transition z-40 transform hover:scale-110 transition-transform duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </a>
      )}
    </>
  );
};

export default Header;