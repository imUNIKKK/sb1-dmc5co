import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const JoinUsSection = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Stay ahead of the competition!',
      description:
        'Sign up for early access and gain a competitive edge with cutting-edge analytics. Be the first to discover the future of esports performance optimization.',
      placeholder: 'Your email address',
      button: 'Sign up',
      success: 'Your registration has been recorded, check your emails',
      error: 'This email is already registered',
    },
    fr: {
      title: "Gardez une longueur d'avance sur la concurrence !",
      description:
        "Inscrivez-vous pour un accès anticipé et gagnez un avantage concurrentiel grâce à des analyses de pointe. Soyez le premier à découvrir l'avenir de l'optimisation des performances dans l'esport.",
      placeholder: 'Votre adresse email',
      button: "S'inscrire",
      success: 'Votre inscription a bien été enregistrée, suivez vos mails',
      error: 'Cet email est déjà inscrit',
    },
  };

  const { title, description, placeholder, button } = content[language];

  return (
    <section id="join-us" className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">{description}</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-r-md hover-primary button-transition"
            >
              {button}
            </button>
          </div>
        </form>
      </div>
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center">
          <Check className="mr-2" />
          {message}
        </div>
      )}
      {showError && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center">
          <X className="mr-2" />
          {message}
        </div>
      )}
    </section>
  );
};

export default JoinUsSection;
