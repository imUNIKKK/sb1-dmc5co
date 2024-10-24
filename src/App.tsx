import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import JoinUsSection from './components/JoinUsSection';
import GamesSection from './components/GamesSection';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useEffect(() => {}, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <ServicesSection />
          <JoinUsSection />
          <GamesSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
