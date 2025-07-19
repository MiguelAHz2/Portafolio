// Configuración para GitHub API
// Obtén tu token desde: https://github.com/settings/tokens

export const GITHUB_CONFIG = {
  USERNAME: 'MiguelAHz2', // Reemplazar con tu username de GitHub
  TOKEN: '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', // Opcional: para más requests por hora
  API_BASE_URL: 'https://api.github.com',
};

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
    headers['Authorization'] = `token ${GITHUB_CONFIG.TOKEN}`;
  }
  
  return headers;
}; 