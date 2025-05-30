import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaTools,
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaNpm,
  FaDocker,
  FaPython
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiVite,
  SiPostman,
  SiDjango,
  SiFastapi,
  SiJupyter,
  SiFlask
} from 'react-icons/si';
import { skills } from '../constants/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
  cardVariants,
  techCardVariants,
  hoverScale,
  smoothTransition
} from '../constants/animations';

const getTechIcon = (tech) => {
  const iconMap = {
    // Frontend
    'React': FaReact,
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'JavaScript': FaJs,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'Vite': SiVite,
    // Backend
    'Python': FaPython,
    'Django': SiDjango,
    'FastAPI': SiFastapi,
    'Flask': SiFlask,
    'Node.js': FaNodeJs,
    'Express': SiExpress,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    // Herramientas
    'Git': FaGitAlt,
    'npm': FaNpm,
    'Docker': FaDocker,
    'Postman': SiPostman,
    'Jupyter': SiJupyter
  };

  const Icon = iconMap[tech];
  if (!Icon) return null;

  // Ajustar colores específicos para algunos iconos
  const iconColors = {
    'Python': 'text-[#3776AB]',
    'Django': 'text-[#092E20]',
    'FastAPI': 'text-[#009688]',
    'Flask': 'text-[#000000]',
    'React': 'text-[#61DAFB]',
    'Node.js': 'text-[#339933]',
    'MongoDB': 'text-[#47A248]',
    'PostgreSQL': 'text-[#336791]',
    'TypeScript': 'text-[#3178C6]',
    'Tailwind CSS': 'text-[#06B6D4]',
    'JavaScript': 'text-[#F7DF1E]',
    'HTML': 'text-[#E34F26]',
    'CSS': 'text-[#1572B6]',
    'Git': 'text-[#F05032]',
    'Docker': 'text-[#2496ED]',
  };

  return (
    <Icon 
      className={`w-5 h-5 ${iconColors[tech] || ''} group-hover:text-secondary-light 
      dark:group-hover:text-secondary-dark transition-colors duration-300`} 
    />
  );
};

const getCategoryIcon = (category) => {
  const iconMap = {
    'Frontend': FaCode,
    'Backend': FaServer,
    'Herramientas': FaTools,
  };

  return iconMap[category] || FaCode;
};

const About = () => {
  return (
    <section
      name="about"
      className="section-container bg-gradient-to-b from-surface-light/95 via-background-light to-surface-light/95
      dark:from-surface-dark/95 dark:via-[#1a1f2e] dark:to-surface-dark/95
      transition-colors-transform duration-600 ease-smooth"
    >
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 right-0 opacity-10 dark:opacity-5" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 left-0 opacity-10 dark:opacity-5" />

      {/* Bordes difuminados */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            variants={titleVariants}
            className="section-title text-3xl sm:text-4xl lg:text-5xl"
          >
            Sobre Mí
          </motion.h2>
          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto px-4 sm:px-6"
          >
            <p className="section-subtitle text-base sm:text-lg">
            Soy técnico en sistemas y estudiante de ingeniería de software en el Politecnico Grancolombiano. Nacido en Uribia, La Guajira. Actualmente me encuentro cursando el 4to semestre de mi carrera.
              Soy apasionado por la tecnología y la programación, me gusta aprender cosas nuevas y trabajar en equipo.
              Mis lenguajes de programacion favoritos son JavaScript, Python.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((category, index) => {
            const CategoryIcon = getCategoryIcon(category.category);
            return (
              <motion.div
                key={category.category}
                variants={techCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="card p-4 sm:p-6 backdrop-blur-sm bg-opacity-60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-light dark:text-secondary-dark" />
                  <h3 className="text-lg sm:text-xl font-semibold text-text-light dark:text-text-dark">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={hoverScale}
                      transition={smoothTransition}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-background-light dark:bg-background-dark 
                      text-text-muted dark:text-gray-400 rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2
                      group hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-300"
                    >
                      {getTechIcon(tech)}
                      <span className="truncate">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center"
        >
          <motion.h3
            variants={titleVariants}
            className="text-xl sm:text-2xl font-semibold text-text-light dark:text-text-dark mb-6"
          >
            Mi Enfoque
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={hoverScale}
              transition={smoothTransition}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-medium text-text-light dark:text-text-dark mb-2">
                Frontend Moderno
              </h4>
              <p className="text-text-muted dark:text-gray-400">
                Especializado en React y su ecosistema, creando interfaces dinámicas y responsivas con JavaScript/TypeScript y herramientas modernas como Tailwind CSS.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={hoverScale}
              transition={smoothTransition}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-medium text-text-light dark:text-text-dark mb-2">
                Backend Versátil
              </h4>
              <p className="text-text-muted dark:text-gray-400">
                Desarrollo de APIs y servicios con Python (Django, FastAPI, Flask) y Node.js. Experiencia con bases de datos SQL y NoSQL como PostgreSQL y MongoDB.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={hoverScale}
              transition={smoothTransition}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-medium text-text-light dark:text-text-dark mb-2">
                DevOps y Herramientas
              </h4>
              <p className="text-text-muted dark:text-gray-400">
                Manejo de control de versiones con Git, automatización de procesos con Docker, y experiencia con herramientas de desarrollo como Postman y Jupyter Notebook.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 