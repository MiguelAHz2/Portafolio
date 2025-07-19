import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphismCard from './GlassmorphismCard';
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

const Timeline = ({ items, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Línea central - oculta en móvil */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: 'top' }}
      />
      
      <div className="space-y-6 md:space-y-8">
        {items.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            index={index} 
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

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
    'Jupyter': SiJupyter,
    // Otros
    'Java': FaCode,
    'Algoritmos': FaCode,
    'Estructuras de Datos': FaCode,
    'Redes': FaServer,
    'Hardware': FaTools,
    'Sistemas Operativos': FaTools,
    'Mantenimiento': FaTools
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
      className={`w-4 h-4 ${iconColors[tech] || 'text-indigo-600 dark:text-indigo-400'}`} 
    />
  );
};

const TimelineItem = ({ item, index, isEven }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Contenido */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <GlassmorphismCard
          variant={item.variant || "default"}
          className="p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            {item.icon && (
              <div className="p-2 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10">
                <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
            )}
            <h3 className="text-base md:text-lg font-semibold text-text-light dark:text-text-dark">
              {item.title}
            </h3>
          </div>
          <p className="text-xs md:text-sm text-text-muted dark:text-gray-400 mb-2">
            {item.subtitle}
          </p>
          <p className="text-xs md:text-sm text-text-light dark:text-text-dark">
            {item.description}
          </p>
          {item.technologies && (
            <div className="flex flex-wrap gap-1 mt-3">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs bg-indigo-500/10 dark:bg-indigo-400/10 
                  text-indigo-600 dark:text-indigo-400 rounded-full flex items-center gap-1"
                >
                  {getTechIcon(tech)}
                  <span className="truncate">{tech}</span>
                </span>
              ))}
            </div>
          )}
        </GlassmorphismCard>
      </div>

      {/* Punto central - solo visible en desktop */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Timeline; 