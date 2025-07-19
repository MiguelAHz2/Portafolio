import { GITHUB_CONFIG, GITHUB_ENDPOINTS, getGitHubHeaders } from '../config/github';

/**
 * Obtener información del usuario de GitHub
 */
export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(GITHUB_ENDPOINTS.USER(GITHUB_CONFIG.USERNAME), {
      headers: getGitHubHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

/**
 * Obtener repositorios del usuario
 * @param {number} limit - Número máximo de repositorios a obtener
 * @param {string} sort - Campo para ordenar (created, updated, pushed, full_name)
 */
export const fetchGitHubRepos = async (limit = 6, sort = 'updated') => {
  try {
    console.log('🔍 Configuración GitHub:', {
      username: GITHUB_CONFIG.USERNAME,
      hasToken: !!GITHUB_CONFIG.TOKEN,
      tokenLength: GITHUB_CONFIG.TOKEN?.length || 0
    });

    const url = `${GITHUB_ENDPOINTS.REPOS(GITHUB_CONFIG.USERNAME)}?sort=${sort}&per_page=${limit}`;
    console.log('🌐 URL de la petición:', url);

    const headers = getGitHubHeaders();
    console.log('📋 Headers:', headers);

    const response = await fetch(url, { headers });

    console.log('📡 Respuesta del servidor:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error response body:', errorText);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const repos = await response.json();
    console.log('📦 Repositorios obtenidos:', repos.length);
    
    // Filtrar repositorios públicos (menos restrictivo)
    const publicRepos = repos.filter(repo => !repo.private);
    console.log('🔓 Repositorios públicos:', publicRepos.length);
    
    return publicRepos.slice(0, limit);
  } catch (error) {
    console.error('❌ Error fetching GitHub repos:', error);
    throw error;
  }
};

/**
 * Obtener lenguajes de un repositorio específico
 * @param {string} repoName - Nombre del repositorio
 */
export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await fetch(
      GITHUB_ENDPOINTS.REPO_LANGUAGES(GITHUB_CONFIG.USERNAME, repoName),
      {
        headers: getGitHubHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return {};
  }
};

/**
 * Obtener estadísticas de GitHub
 */
export const fetchGitHubStats = async () => {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepos(100) // Obtener más repos para estadísticas
    ]);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
      topLanguages: getTopLanguages(repos),
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
};

/**
 * Obtener los lenguajes más usados
 * @param {Array} repos - Lista de repositorios
 */
const getTopLanguages = (repos) => {
  const languageCount = {};
  
  repos.forEach(repo => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  return Object.entries(languageCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));
}; 