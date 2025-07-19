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
  SiFlask,
  SiMui
} from 'react-icons/si';
import { projects } from '../constants/portfolio';
import { GradientText, GlassmorphismCard, ModernButton } from '../components/ui';
import GitHubRepos from '../components/GitHubRepos';
import {
  containerVariants,
  titleVariants,
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
    'Material UI': SiMui,
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
    'Material UI': 'text-[#007FFF]',
    'JavaScript': 'text-[#F7DF1E]',
    'HTML': 'text-[#E34F26]',
    'CSS': 'text-[#1572B6]',
    'Git': 'text-[#F05032]',
    'Docker': 'text-[#2496ED]',
  };

  return (
    <Icon 
      className={`w-4 h-4 ${iconColors[tech] || ''} group-hover:text-secondary-light 
      dark:group-hover:text-secondary-dark transition-colors duration-300`}
    />
  );
};

// Función para obtener el color de fondo específico de cada tecnología
const getTechBackground = (tech) => {
  const backgrounds = {
    'Python': 'bg-blue-500/10 border-blue-500/20',
    'React': 'bg-cyan-500/10 border-cyan-500/20',
    'JavaScript': 'bg-yellow-500/10 border-yellow-500/20',
    'TypeScript': 'bg-blue-600/10 border-blue-600/20',
    'HTML': 'bg-orange-500/10 border-orange-500/20',
    'CSS': 'bg-blue-500/10 border-blue-500/20',
    'Node.js': 'bg-green-500/10 border-green-500/20',
    'Django': 'bg-green-700/10 border-green-700/20',
    'FastAPI': 'bg-teal-500/10 border-teal-500/20',
    'Flask': 'bg-gray-500/10 border-gray-500/20',
    'MongoDB': 'bg-green-500/10 border-green-500/20',
    'PostgreSQL': 'bg-blue-600/10 border-blue-600/20',
    'Tailwind CSS': 'bg-cyan-500/10 border-cyan-500/20',
    'Material UI': 'bg-blue-500/10 border-blue-500/20',
    'Git': 'bg-red-500/10 border-red-500/20',
    'Docker': 'bg-blue-500/10 border-blue-500/20',
    'Jupyter': 'bg-orange-500/10 border-orange-500/20',
    'Jupyter Notebook': 'bg-orange-500/10 border-orange-500/20',
    'Vue': 'bg-green-500/10 border-green-500/20',
    'Java': 'bg-orange-500/10 border-orange-500/20',
    'C++': 'bg-blue-600/10 border-blue-600/20',
    'C#': 'bg-green-500/10 border-green-500/20',
    'PHP': 'bg-purple-500/10 border-purple-500/20',
    'Ruby': 'bg-red-500/10 border-red-500/20',
    'Go': 'bg-cyan-500/10 border-cyan-500/20',
    'Rust': 'bg-orange-500/10 border-orange-500/20',
    'Swift': 'bg-orange-500/10 border-orange-500/20',
    'Kotlin': 'bg-purple-500/10 border-purple-500/20',
    'Dart': 'bg-cyan-500/10 border-cyan-500/20',
  };
  
  return backgrounds[tech] || 'bg-gray-500/10 border-gray-500/20';
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 relative bg-gradient-to-b from-surface-light/95 via-background-light to-surface-light/95
      dark:from-surface-dark/95 dark:via-[#1a1f2e] dark:to-surface-dark/95
      transition-colors duration-600">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <motion.h2
          variants={titleVariants}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 text-text-light dark:text-text-dark"
        >
          <GradientText gradient="from-indigo-500 via-purple-500 to-pink-500">
            Mis Proyectos
          </GradientText>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={hoverScale}
              transition={smoothTransition}
              className="group"
            >
              <GlassmorphismCard
                variant="default"
                className="h-full flex flex-col"
              >
                {/* Contenedor de la imagen */}
                <div className="relative overflow-hidden rounded-lg mb-4 group">
                  {/* Contenedor de la imagen con proporción fija */}
                  <div className={`relative ${project.title === "Próximamente" ? "h-48" : "aspect-[16/9]"} overflow-hidden`}>
                    {project.title === "Próximamente" ? (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 
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
                        className="w-full h-full object-cover object-center transform rounded-lg"
                      />
                    )}
                    
                    {/* Overlay con gradiente y contenido */}
                    {project.title !== "Próximamente" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40
                        opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col transform translate-y-4 
                          group-hover:translate-y-0 transition-transform duration-500 justify-end">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <h3 className="text-sm font-bold text-white mb-1.5">
                              {project.title}
                            </h3>
                            <p className="text-xs text-gray-200 leading-relaxed
                              overflow-y-auto max-h-[60px]
                              scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent 
                              hover:scrollbar-thumb-white/30 pr-1">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Sección de tecnologías */}
                  {project.technologies.length > 0 && project.title !== "Próximamente" && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          transition={smoothTransition}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 backdrop-blur-sm rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2
                          group hover:scale-105 transition-all duration-300 ${getTechBackground(tech)}`}
                        >
                          {getTechIcon(tech)}
                          <span className="truncate text-text-light dark:text-text-dark font-medium">{tech}</span>
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Botones de acción */}
                  {project.title !== "Próximamente" && (
                    <div className="flex gap-2 mt-auto">
                      <ModernButton
                        variant="primary"
                        size="sm"
                        icon={FaExternalLinkAlt}
                        onClick={() => window.open(project.live, '_blank')}
                        className="flex-1"
                      >
                        Ver Proyecto
                      </ModernButton>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        icon={FaGithub}
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1"
                      >
                        Ver Código
                      </ModernButton>
                    </div>
                  )}
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>

        {/* Sección de Repositorios de GitHub */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          <motion.h2
            variants={titleVariants}
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 text-text-light dark:text-text-dark"
          >
            <GradientText gradient="from-green-500 via-emerald-500 to-teal-500">
              Repositorios de GitHub
            </GradientText>
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-center text-base sm:text-lg text-text-muted dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Mis proyectos más recientes en GitHub, actualizados en tiempo real
          </motion.p>

          <GitHubRepos />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 