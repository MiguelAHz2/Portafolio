import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaCalendar } from 'react-icons/fa';
import { fetchGitHubRepos, fetchRepoLanguages } from '../services/githubService';
import { GlassmorphismCard, ModernButton } from './ui';
import {
  containerVariants,
  cardVariants,
  hoverScale,
  smoothTransition
} from '../constants/animations';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const reposData = await fetchGitHubRepos(6, 'updated');
        
        // Obtener lenguajes para cada repositorio
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo) => {
            const languages = await fetchRepoLanguages(repo.name);
            return {
              ...repo,
              languages: Object.keys(languages).slice(0, 3) // Top 3 lenguajes
            };
          })
        );
        
        setRepos(reposWithLanguages);
      } catch (err) {
        console.error('Error loading GitHub repos:', err);
        setError('Error al cargar los repositorios de GitHub');
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

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-blue-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'Java': 'bg-red-500',
      'C++': 'bg-pink-500',
      'C#': 'bg-green-500',
      'PHP': 'bg-purple-600',
      'Ruby': 'bg-red-600',
      'Go': 'bg-cyan-500',
      'Rust': 'bg-orange-600',
      'Swift': 'bg-orange-400',
      'Kotlin': 'bg-purple-400',
      'Dart': 'bg-blue-400',
      'Vue': 'bg-green-400',
      'React': 'bg-cyan-400',
    };
    
    return colors[language] || 'bg-gray-400';
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
        <p className="text-red-500 dark:text-red-400">{error}</p>
        <ModernButton
          variant="outline"
          size="sm"
          onClick={() => window.location.reload()}
          className="mt-4"
        >
          Reintentar
        </ModernButton>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {repos.map((repo, index) => (
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
                  {repo.description}
                </p>
              </div>
              <FaGithub className="w-5 h-5 text-text-muted dark:text-gray-400 flex-shrink-0 ml-2" />
            </div>

            {/* Lenguajes */}
            {repo.languages && repo.languages.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.languages.map((language) => (
                  <span
                    key={language}
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getLanguageColor(language)}`}
                  >
                    {language}
                  </span>
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
    </motion.div>
  );
};

export default GitHubRepos; 