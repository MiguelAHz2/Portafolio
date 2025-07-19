import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaStar, 
  FaCodeBranch, 
  FaEye, 
  FaCalendar,
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs,
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
import { fetchGitHubRepos, fetchRepoLanguages } from '../services/githubService';
import { GlassmorphismCard, ModernButton } from './ui';
import GitHubConfig from './GitHubConfig';
import {
  containerVariants,
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
    'Jupyter': SiJupyter,
    'Jupyter Notebook': SiJupyter, // Agregar el nombre completo que devuelve GitHub
    // Otros nombres comunes de GitHub
    'Vue': FaReact, // Placeholder para Vue
    'Java': FaReact, // Placeholder para Java
    'C++': FaReact, // Placeholder para C++
    'C#': FaReact, // Placeholder para C#
    'PHP': FaReact, // Placeholder para PHP
    'Ruby': FaReact, // Placeholder para Ruby
    'Go': FaReact, // Placeholder para Go
    'Rust': FaReact, // Placeholder para Rust
    'Swift': FaReact, // Placeholder para Swift
    'Kotlin': FaReact, // Placeholder para Kotlin
    'Dart': FaReact, // Placeholder para Dart
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
    'Jupyter': 'text-[#F37626]',
    'Jupyter Notebook': 'text-[#F37626]',
    // Otros colores
    'Vue': 'text-[#4FC08D]',
    'Java': 'text-[#ED8B00]',
    'C++': 'text-[#00599C]',
    'C#': 'text-[#178600]',
    'PHP': 'text-[#777BB4]',
    'Ruby': 'text-[#CC342D]',
    'Go': 'text-[#00ADD8]',
    'Rust': 'text-[#DEA584]',
    'Swift': 'text-[#FA7343]',
    'Kotlin': 'text-[#F18E33]',
    'Dart': 'text-[#00B4AB]',
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
    'Material UI': 'text-[#007FFF]',
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

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Cargando repositorios de GitHub...');
        const reposData = await fetchGitHubRepos(12, 'updated'); // Aumentar a 12 para tener más opciones
        
        console.log('Repositorios obtenidos:', reposData);
        
        // Debug: Mostrar todos los lenguajes únicos
        const allLanguages = new Set();
        reposData.forEach(repo => {
          if (repo.language) {
            allLanguages.add(repo.language);
          }
        });
        console.log('Lenguajes únicos encontrados:', Array.from(allLanguages));
        
        if (!reposData || reposData.length === 0) {
          setError('No se encontraron repositorios públicos. Verifica tu configuración de GitHub.');
          return;
        }
        
        // Obtener lenguajes para cada repositorio
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo) => {
            try {
              const languages = await fetchRepoLanguages(repo.name);
              return {
                ...repo,
                languages: Object.keys(languages).slice(0, 3) // Top 3 lenguajes
              };
            } catch (langError) {
              console.warn(`Error obteniendo lenguajes para ${repo.name}:`, langError);
              return {
                ...repo,
                languages: []
              };
            }
          })
        );
        
        setRepos(reposWithLanguages);
        console.log('Repositorios con lenguajes:', reposWithLanguages);
      } catch (err) {
        console.error('Error loading GitHub repos:', err);
        
        let errorMessage = 'Error al cargar los repositorios de GitHub';
        
        if (err.message.includes('404')) {
          errorMessage = 'Usuario de GitHub no encontrado. Verifica tu configuración.';
        } else if (err.message.includes('403')) {
          errorMessage = 'Límite de requests excedido. Intenta más tarde.';
        } else if (err.message.includes('401')) {
          errorMessage = 'Error de autenticación. Verifica tu token de GitHub.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };



  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        <p className="mt-2 text-text-muted dark:text-gray-400">Cargando repositorios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="mb-6">
          <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
          <ModernButton
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
            className="mr-2"
          >
            Reintentar
          </ModernButton>
        </div>
        
        {/* Mostrar configuración si el error es de configuración */}
        {(error.includes('Usuario de GitHub no encontrado') || error.includes('Verifica tu configuración')) && (
          <GitHubConfig />
        )}
      </div>
    );
  }

  // Filtrar repositorios para mostrar
  const displayRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayRepos.map((repo, index) => (
          <motion.div
            key={repo.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={hoverScale}
            transition={smoothTransition}
          >
            <GlassmorphismCard
              variant="default"
              className="h-full p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header del repositorio */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 line-clamp-1">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-2">
                    {repo.description || 'Sin descripción'}
                  </p>
                </div>
                <FaGithub className="w-5 h-5 text-text-muted dark:text-gray-400 flex-shrink-0 ml-2" />
              </div>

                          {/* Lenguajes */}
            {repo.languages && repo.languages.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {repo.languages.map((language) => (
                  <motion.span
                    key={language}
                    whileHover={{ scale: 1.05 }}
                    transition={smoothTransition}
                    className={`px-2 sm:px-3 py-1 sm:py-1.5 backdrop-blur-sm rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2
                    group hover:scale-105 transition-all duration-300 ${getTechBackground(language)}`}
                  >
                    {getTechIcon(language)}
                    <span className="truncate text-text-light dark:text-text-dark font-medium">{language}</span>
                  </motion.span>
                ))}
              </div>
            )}

              {/* Estadísticas */}
              <div className="flex items-center justify-between text-sm text-text-muted dark:text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="w-3 h-3" />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye className="w-3 h-3" />
                    <span>{repo.watchers_count}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendar className="w-3 h-3" />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              {/* Botón de enlace */}
              <ModernButton
                variant="outline"
                size="sm"
                onClick={() => window.open(repo.html_url, '_blank')}
                className="w-full"
              >
                Ver en GitHub
              </ModernButton>
            </GlassmorphismCard>
          </motion.div>
        ))}
      </div>

      {/* Botón para mostrar más/menos repositorios */}
      {repos.length > 6 && (
        <div className="text-center">
          <ModernButton
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Mostrar Menos' : `Mostrar Todos (${repos.length})`}
          </ModernButton>
        </div>
      )}
    </motion.div>
  );
};

export default GitHubRepos; 