// Configuración para GitHub API
// Obtén tu token desde: https://github.com/settings/tokens

export const GITHUB_CONFIG = {
  USERNAME: import.meta.env.VITE_GITHUB_USERNAME || 'MiguelAHz2',
  TOKEN: import.meta.env.VITE_GITHUB_TOKEN || null, // Solo usar variables de entorno
  API_BASE_URL: 'https://api.github.com',
};

// Debug: Verificar que las variables se cargan correctamente
console.log('🔧 Variables de entorno cargadas:', {
  VITE_GITHUB_USERNAME: import.meta.env.VITE_GITHUB_USERNAME,
  VITE_GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN ? 'TOKEN_PRESENTE' : 'TOKEN_FALTANTE',
  USERNAME_FINAL: GITHUB_CONFIG.USERNAME,
  TOKEN_FINAL: GITHUB_CONFIG.TOKEN ? 'TOKEN_PRESENTE' : 'TOKEN_FALTANTE'
});

// Endpoints útiles
export const GITHUB_ENDPOINTS = {
  USER: (username) => `${GITHUB_CONFIG.API_BASE_URL}/users/${username}`,
  REPOS: (username) => `${GITHUB_CONFIG.API_BASE_URL}/users/${username}/repos`,
  USER_REPO: (username, repo) => `${GITHUB_CONFIG.API_BASE_URL}/repos/${username}/${repo}`,
  REPO_LANGUAGES: (username, repo) => `${GITHUB_CONFIG.API_BASE_URL}/repos/${username}/${repo}/languages`,
};

// Headers para las peticiones
export const getGitHubHeaders = () => {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };
  
  if (GITHUB_CONFIG.TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_CONFIG.TOKEN}`; // Cambiar a Bearer token
  }
  
  return headers;
}; 