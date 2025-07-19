import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExclamationTriangle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { ModernButton } from './ui';

const GitHubConfig = ({ onConfigUpdate }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [configStatus, setConfigStatus] = useState('idle');

  useEffect(() => {
    // Verificar configuración actual
    const checkCurrentConfig = () => {
      const currentUsername = import.meta.env.VITE_GITHUB_USERNAME;
      const hasToken = !!import.meta.env.VITE_GITHUB_TOKEN;
      
      if (currentUsername) {
        setUsername(currentUsername);
      }
      
      if (hasToken) {
        setConfigStatus('configured');
      } else {
        setConfigStatus('missing');
      }
    };

    checkCurrentConfig();
  }, []);

  const handleSaveConfig = () => {
    if (!username.trim()) {
      alert('Por favor ingresa tu username de GitHub');
      return;
    }

    setIsConfiguring(true);
    setConfigStatus('saving');
    
    // Simular guardado de configuración
    setTimeout(() => {
      console.log('Configuración guardada:', { username, hasToken: !!token });
      
      // Actualizar la configuración en tiempo real
      if (onConfigUpdate) {
        onConfigUpdate({ username, token });
      }
      
      setIsConfiguring(false);
      setConfigStatus('saved');
      
      setTimeout(() => {
        setConfigStatus('configured');
      }, 2000);
    }, 1000);
  };

  const getStatusIcon = () => {
    switch (configStatus) {
      case 'configured':
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
      case 'missing':
        return <FaExclamationTriangle className="w-5 h-5 text-yellow-500" />;
      case 'saving':
        return <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'saved':
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <FaInfoCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusText = () => {
    switch (configStatus) {
      case 'configured':
        return 'Configuración detectada';
      case 'missing':
        return 'Token de GitHub faltante';
      case 'saving':
        return 'Guardando configuración...';
      case 'saved':
        return 'Configuración guardada';
      default:
        return 'Configuración pendiente';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-md mx-auto"
    >
      <div className="flex items-center gap-3 mb-4">
        <FaGithub className="w-6 h-6 text-green-500" />
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
          Configurar GitHub
        </h3>
        {getStatusIcon()}
      </div>

      <div className="mb-4">
        <p className="text-sm text-text-muted dark:text-gray-400 mb-2">
          {getStatusText()}
        </p>
        
        {configStatus === 'missing' && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Para configurar el token de GitHub en Vercel:
            </p>
            <ol className="text-xs text-yellow-600 dark:text-yellow-400 mt-2 list-decimal list-inside space-y-1">
              <li>Ve a tu proyecto en Vercel Dashboard</li>
              <li>Settings → Environment Variables</li>
              <li>Agrega: VITE_GITHUB_TOKEN = tu_token</li>
              <li>Redeploy el proyecto</li>
            </ol>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Username de GitHub
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="tu-username"
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Token de GitHub (opcional para desarrollo local)
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-text-muted dark:text-gray-400 mt-1">
            Para producción, configura VITE_GITHUB_TOKEN en Vercel
          </p>
        </div>

        <ModernButton
          variant="primary"
          size="sm"
          onClick={handleSaveConfig}
          disabled={isConfiguring}
          className="w-full"
        >
          {isConfiguring ? 'Guardando...' : 'Guardar Configuración'}
        </ModernButton>
      </div>

      <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
          Cómo generar un token:
        </h4>
        <ol className="text-xs text-blue-600 dark:text-blue-400 space-y-1 list-decimal list-inside">
          <li>Ve a GitHub Settings → Developer settings → Personal access tokens</li>
          <li>Generate new token (classic)</li>
          <li>Selecciona: public_repo, read:user</li>
          <li>Copia el token y agrégalo a Vercel</li>
        </ol>
      </div>
    </motion.div>
  );
};

export default GitHubConfig; 