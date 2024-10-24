import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden ${language === 'en' ? 'ring-2 ring-primary' : ''}`}
      >
        <img src="/flags/en.svg" alt="English" className="w-full h-full object-cover" />
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`w-8 h-6 rounded overflow-hidden ${language === 'fr' ? 'ring-2 ring-primary' : ''}`}
      >
        <img src="/flags/fr.svg" alt="Français" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default LanguageSelector;