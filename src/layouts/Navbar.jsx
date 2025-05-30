import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    {/* Letra M */}
    <path
      d="M8 28L8 12L16 24L24 12L24 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-800 dark:text-white"
    />

    {/* Letra A */}
    <path
      d="M28 28L32 12L36 28M29 22H35"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary-500 dark:text-primary-400"
    />

    {/* Elementos de código */}
    <path
      d="M4 20L6 20M38 20L40 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-gray-400 dark:text-gray-500"
    />

    {/* Elemento decorativo inferior */}
    <path
      d="M12 32L32 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-gray-400 dark:text-gray-500"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  // Manejar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar resize para cerrar menú en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const links = [
    { id: 1, link: 'home', label: t('nav.home') },
    { id: 2, link: 'about', label: t('nav.about') },
    { id: 3, link: 'projects', label: t('nav.projects') },
    { id: 4, link: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm' : 
      'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="relative group cursor-pointer"
            onClick={closeMenu}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-200"
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(({ id, link, label }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                spy={true}
                activeClass="!text-primary-500 dark:!text-primary-400 after:!w-full after:!bg-primary-500 dark:after:!bg-primary-400"
                className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300
                hover:text-gray-900 dark:hover:text-white transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 
                dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full
                cursor-pointer"
              >
                {label}
              </Link>
            ))}
            
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300
              hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-200"
              aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {darkMode ? 
                <FiSun className="w-5 h-5" /> : 
                <FiMoon className="w-5 h-5" />
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300
              hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-200 mr-2"
              aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {darkMode ? 
                <FiSun className="w-5 h-5" /> : 
                <FiMoon className="w-5 h-5" />
              }
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300
              hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-200"
              aria-label="Menú principal"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {links.map(({ id, link, label }) => (
                    <Link
                      key={id}
                      to={link}
                      smooth
                      duration={500}
                      onClick={closeMenu}
                      spy={true}
                      activeClass="!text-primary-500 dark:!text-primary-400 after:!w-full after:!bg-primary-500 dark:after:!bg-primary-400"
                      className="relative block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300
                      hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 
                      dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full
                      cursor-pointer"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 