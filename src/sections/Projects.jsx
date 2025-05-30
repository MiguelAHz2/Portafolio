import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaNpm,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiVite,
  SiDjango,
  SiFastapi,
  SiJupyter,
  SiFlask
} from 'react-icons/si';
import { projects } from '../constants/portfolio';
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
  cardVariants,
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
    'Jupyter': SiJupyter
  };

  const Icon = iconMap[tech];
  if (!Icon) return null;

  // Colores específicos para cada tecnología
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

const Projects = () => {
  return (
    <section
      name="projects"
      className="section-container bg-gradient-to-b from-surface-light to-background-light 
      dark:from-surface-dark dark:to-background-dark"
    >
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 left-0" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 right-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <motion.h2
          variants={titleVariants}
          className="section-title text-center text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16"
        >
          Mis Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={hoverScale}
              transition={smoothTransition}
              className="card overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10
              hover:border-secondary-light/50 dark:hover:border-secondary-dark/50 transition-all duration-300"
            >
              {/* Contenedor de la imagen con marco y sombra */}
              <div className={`relative overflow-hidden ${project.title === "Próximamente" ? "h-full" : ""}`}>
                {/* Overlay decorativo superior */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Contenedor de la imagen con proporción fija */}
                <div className={`relative ${project.title === "Próximamente" ? "h-full" : "aspect-[16/9]"} overflow-hidden`}>
                  {/* Imagen con efecto de zoom */}
                  {project.title === "Próximamente" ? (
                    <div className="w-full h-full min-h-[250px] bg-gradient-to-br from-primary-500/5 to-secondary-500/5 
                      dark:from-primary-400/5 dark:to-secondary-400/5 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="relative">
                          {/* Línea circular exterior */}
                          <div className="w-44 h-44 rounded-full border border-secondary-light/10 
                            dark:border-secondary-dark/10" />
                          
                          {/* Arco giratorio */}
                          <motion.div 
                            className="absolute inset-0 w-44 h-44"
                            animate={{
                              rotate: 360
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            <div className="w-full h-full rounded-full border-2 border-transparent
                              border-t-secondary-light/30 dark:border-t-secondary-dark/30" />
                          </motion.div>

                          {/* Círculo central con efecto minimalista */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              className="w-36 h-36 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-sm
                              flex items-center justify-center border border-white/10 dark:border-white/5"
                              animate={{
                                boxShadow: [
                                  "0 0 0 0 rgba(37, 99, 235, 0)",
                                  "0 0 20px 2px rgba(37, 99, 235, 0.1)",
                                  "0 0 0 0 rgba(37, 99, 235, 0)"
                                ]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <motion.span 
                                className="text-xl font-light tracking-wide text-secondary-light/70
                                dark:text-secondary-dark/70 italic"
                                animate={{
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                Muy pronto...
                              </motion.span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform"
                    />
                  )}
                  
                  {/* Overlay con gradiente y contenido */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40
                    opacity-0 group-hover:opacity-100 transition-all duration-500 
                    ${project.title === "Próximamente" ? "h-full" : ""}`}>
                    {/* Contenido con animación */}
                    <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col transform translate-y-4 
                      group-hover:translate-y-0 transition-transform duration-500 
                      ${project.title === "Próximamente" ? "justify-center items-center text-center" : "justify-end"}`}>
                      <div className={`bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10
                        ${project.title === "Próximamente" ? "w-full max-w-md bg-transparent backdrop-blur-none border-none" : "w-full"}`}>
                        {project.title !== "Próximamente" && (
                          <>
                            <h3 className="text-sm font-bold text-white mb-1.5">
                              {project.title}
                            </h3>
                            <p className="text-xs text-gray-200 leading-relaxed
                              overflow-y-auto max-h-[60px]
                              scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent 
                              hover:scrollbar-thumb-white/30 pr-1">
                              {project.description}
                            </p>
                          </>
                        )}
                        {project.title === "Próximamente" && (
                          <p className="text-xs text-gray-200 leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay decorativo inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Sección de tecnologías - Solo mostrar si hay tecnologías y no es el proyecto "Próximamente" */}
              {project.technologies.length > 0 && project.title !== "Próximamente" && (
                <div className="p-4 sm:p-6 bg-gradient-to-b from-white/5 to-transparent dark:from-white/5 dark:to-transparent">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        transition={smoothTransition}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm
                        text-text-muted dark:text-gray-300 rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2
                        hover:bg-white/10 transition-all duration-300 border border-white/10
                        hover:border-secondary-light/50 dark:hover:border-secondary-dark/50"
                      >
                        {getTechIcon(tech)}
                        <span className="truncate">{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 