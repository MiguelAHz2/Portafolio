// Hero component - Updated scroll functionality - FIXED VERSION 2024
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiDownload } from 'react-icons/hi';
import { socialLinks, contactInfo } from '../constants/portfolio';
import { GradientText, ModernButton, FloatingActionButton } from '../components/ui';
import { downloadCV } from '../utils/downloadCV';
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
  fromLeftVariants,
  fromRightVariants,
  imageVariants,
  hoverScale,
  smoothTransition
} from '../constants/animations';

const Hero = () => {
  // Función para scroll suave a secciones - Versión mejorada
  const smoothScrollToSection = (sectionId) => {
    try {
      // Esperar un poco para asegurar que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (!element) {
          console.warn(`Elemento con id '${sectionId}' no encontrado`);
          return;
        }

        const elementPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = elementPosition - startPosition;
        const duration = 1000; // 1 segundo
        let start = null;

        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        const animation = (currentTime) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const run = easeInOutCubic(progress);
          window.scrollTo(0, startPosition + distance * run);
          if (progress < 1) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
      }, 100);
    } catch (error) {
      console.error('Error en smoothScrollToSection:', error);
    }
  };

  return (
    <section name="home" className="min-h-screen flex items-center justify-center relative overflow-hidden
      bg-gradient-to-b from-background-light via-background-light to-surface-light/95
      dark:from-background-dark dark:via-[#1a1f2e] dark:to-surface-dark/95">
      
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 left-0 opacity-15 dark:opacity-8 hidden sm:block" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 right-0 opacity-15 dark:opacity-8 hidden sm:block" />
      
      {/* Bordes difuminados */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none hidden sm:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 min-h-[80vh]">
          {/* Contenido principal */}
          <motion.div 
            variants={fromLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center md:text-left max-w-2xl mx-auto md:max-w-none"
          >
            <motion.h1
              variants={titleVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
            >
              <span className="block text-text-light dark:text-text-dark mb-3">Hola, soy</span>
              <GradientText 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed pb-2"
                gradient="from-indigo-500 via-purple-500 to-pink-500"
                animate={true}
              >
                Miguel Alvarez
              </GradientText>
            </motion.h1>
            
            <motion.p
              variants={descriptionVariants}
              className="text-base sm:text-lg md:text-xl text-text-muted dark:text-gray-400 mb-8 sm:mb-10 mt-4"
            >
              Técnico en sistemas y estudiante de ingeniería de software. Programador en Javascript y Python.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              variants={fromLeftVariants}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8"
            >
              <ModernButton
                variant="primary"
                size="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  smoothScrollToSection('projects');
                }}
              >
                Ver Proyectos
              </ModernButton>
              <ModernButton
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  smoothScrollToSection('contact');
                }}
              >
                Contactar
              </ModernButton>
              <ModernButton
                variant="secondary"
                size="lg"
                icon={HiDownload}
                onClick={(e) => {
                  e.stopPropagation();
                  downloadCV();
                }}
              >
                Descargar CV
              </ModernButton>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              variants={fromLeftVariants}
              className="flex justify-center md:justify-start gap-4 sm:gap-6"
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverScale}
                transition={smoothTransition}
                className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-text-light dark:text-text-dark" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverScale}
                transition={smoothTransition}
                className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-text-light dark:text-text-dark" />
              </motion.a>
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverScale}
                transition={smoothTransition}
                className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
              >
                <HiMail className="w-5 h-5 sm:w-6 sm:h-6 text-text-light dark:text-text-dark" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverScale}
                transition={smoothTransition}
                className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-text-light dark:text-text-dark" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imagen de perfil con efectos */}
          <motion.div
            variants={fromRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] mx-auto"
          >
            <div className="relative w-full aspect-square">
              <motion.div
                variants={imageVariants}
                className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl"
              />
              <motion.div
                variants={imageVariants}
                className="relative bg-gradient-to-tr from-secondary-light/80 to-accent-light/80 
                dark:from-secondary-dark/80 dark:to-accent-dark/80 rounded-full p-1 shadow-lg"
              >
                <div className="bg-surface-light dark:bg-surface-dark rounded-full p-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={smoothTransition}
                    className="aspect-square rounded-full overflow-hidden bg-gradient-subtle 
                    from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                    flex items-center justify-center relative group"
                  >
                    <img 
                      src="/image.jpg" 
                      alt="Miguel Alvarez"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/0 transition-colors duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Botón flotante de scroll */}
      <ScrollToTopButton />
    </section>
  );
};

// Componente para el botón de scroll to top
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    try {
      if (isScrolling) return; // Evitar múltiples clicks
      
      setIsScrolling(true);
      
      const currentPosition = window.pageYOffset;
      if (currentPosition <= 0) {
        setIsScrolling(false);
        return;
      }
      
      const duration = 1000; // 1 segundo
      let start = null;
      
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        const newPosition = currentPosition * (1 - easedProgress);
        window.scrollTo(0, newPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          setIsScrolling(false);
        }
      };
      
      requestAnimationFrame(animation);
    } catch (error) {
      console.error('Error en scrollToTop:', error);
      setIsScrolling(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-8 right-8 z-50 ${!isVisible || isScrolling ? 'pointer-events-none' : ''}`}
    >
      <FloatingActionButton
        variant="primary"
        size="md"
        onClick={scrollToTop}
        disabled={!isVisible || isScrolling}
        icon={({ className }) => (
          <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )}
      />
    </motion.div>
  );
};

export default Hero; 