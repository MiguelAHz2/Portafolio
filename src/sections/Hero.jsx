import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { socialLinks } from '../constants/portfolio';
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
  return (
    <section name="home" className="min-h-screen flex items-center justify-center relative overflow-hidden
      bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 left-0" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 right-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              <span className="block text-text-light dark:text-text-dark">Hola, soy</span>
              <span className="block text-secondary-light dark:text-secondary-dark mt-2">
                Miguel Alvarez
              </span>
            </motion.h1>
            
            <motion.p
              variants={descriptionVariants}
              className="text-base sm:text-lg md:text-xl text-text-muted dark:text-gray-400 mb-6 sm:mb-8"
            >
              Técnico en sistemas y estudiante de ingeniería de software. Programador en Javascript y Python.
            </motion.p>

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
    </section>
  );
};

export default Hero; 