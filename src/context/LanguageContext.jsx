import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    // Detectar el idioma del navegador
    const detectLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      // Si es móvil y el idioma no es español, usar inglés
      if (isMobile && browserLang !== 'es') {
        setLanguage('en');
      }
    };

    detectLanguage();
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback si no se encuentra la traducción
      }
    }
    
    return value;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 