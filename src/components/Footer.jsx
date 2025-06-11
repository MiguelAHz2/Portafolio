import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { socialLinks, contactInfo } from '../constants/portfolio';
import {
  containerVariants,
  fromLeftVariants,
  fromRightVariants,
  hoverScale,
  smoothTransition
} from '../constants/animations';

const FooterLink = ({ to, children }) => (
  <motion.div
    variants={fromLeftVariants}
    whileHover={hoverScale}
    transition={smoothTransition}
  >
    <Link
      to={to}
      smooth
      duration={500}
      className="text-sm sm:text-base text-text-muted dark:text-gray-400 hover:text-text-light 
      dark:hover:text-text-dark transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-white/5"
    >
      {children}
    </Link>
  </motion.div>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={hoverScale}
    transition={smoothTransition}
    className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full
    hover:bg-white/10 transition-all duration-300 border border-white/10
    hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-text-light dark:text-text-dark" />
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-surface-light/95 via-background-light to-background-light
      dark:from-surface-dark/95 dark:via-[#1a1f2e] dark:to-background-dark relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[300px] h-[300px] -top-40 -right-40 opacity-10 dark:opacity-5 hidden sm:block" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[300px] h-[300px] -bottom-40 -left-40 opacity-10 dark:opacity-5 hidden sm:block" />

      {/* Bordes difuminados */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none hidden sm:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10"
      >
        <motion.div
          variants={fromLeftVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8"
        >
          <FooterLink to="home">Inicio</FooterLink>
          <FooterLink to="about">Sobre Mí</FooterLink>
          <FooterLink to="projects">Proyectos</FooterLink>
          <FooterLink to="contact">Contacto</FooterLink>
        </motion.div>

        <motion.div
          variants={fromLeftVariants}
          className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <SocialIcon href={socialLinks.github} icon={FaGithub} />
          <SocialIcon href={socialLinks.linkedin} icon={FaLinkedin} />
          <SocialIcon 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`} 
            icon={HiMail} 
          />
          <SocialIcon 
            href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
            icon={FaWhatsapp}
          />
        </motion.div>

        <motion.div
          variants={fromLeftVariants}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px bg-text-muted/20 dark:bg-text-dark/20 flex-1 max-w-[160px] sm:max-w-[200px]" />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-secondary-light dark:text-secondary-dark"
          >
            <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
          <div className="h-px bg-text-muted/20 dark:bg-text-dark/20 flex-1 max-w-[160px] sm:max-w-[200px]" />
        </motion.div>

        <motion.div
          variants={fromRightVariants}
          className="text-center space-y-3 sm:space-y-4 text-text-muted dark:text-gray-400"
        >
          <p className="text-xs sm:text-sm flex items-center justify-center gap-2">
            Desarrollado con 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f87171', '#ef4444']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 inline-block" />
            </motion.span>
            usando React y Tailwind CSS
          </p>
          <p className="text-xs sm:text-sm">
            © {currentYear} Miguel Alvarez. Todos los derechos reservados.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 