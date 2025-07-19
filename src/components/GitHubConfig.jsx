import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { ModernButton } from './ui';

const GitHubConfig = ({ onConfigUpdate }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [isConfiguring, setIsConfiguring] = useState(false);

  const handleSaveConfig = () => {
    if (!username.trim()) {
      alert('Por favor ingresa tu username de GitHub');
      return;
    }

    setIsConfiguring(true);
    
    // Simular guardado de configuración
    setTimeout(() => {
      // Aquí normalmente guardarías en localStorage o env
      console.log('Configuración guardada:', { username, token });
      
      // Actualizar la configuración en tiempo real
      if (onConfigUpdate) {
        onConfigUpdate({ username, token });
      }
      
      setIsConfiguring(false);
      alert('Configuración guardada. Recarga la página para ver los cambios.');
    }, 1000);
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
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Username de GitHub *
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="tu-usuario-github"
            className="w-full px-3 py-2 rounded-lg bg-white/10 dark:bg-black/10 
            border border-white/20 dark:border-white/10 
            text-text-light dark:text-text-dark
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Token de GitHub (Opcional)
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2 rounded-lg bg-white/10 dark:bg-black/10 
            border border-white/20 dark:border-white/10 
            text-text-light dark:text-text-dark
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            transition-all duration-300"
          />
          <p className="text-xs text-text-muted dark:text-gray-400 mt-1">
            El token es opcional pero recomendado para más requests por hora
          </p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <FaExclamationTriangle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-600 dark:text-blue-400">
              <p className="font-medium mb-1">Instrucciones:</p>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li>Ingresa tu username real de GitHub</li>
                <li>Opcional: Crea un token en GitHub Settings</li>
                <li>Guarda la configuración</li>
                <li>Recarga la página</li>
              </ol>
            </div>
          </div>
        </div>

        <ModernButton
          variant="primary"
          size="lg"
          loading={isConfiguring}
          onClick={handleSaveConfig}
          className="w-full"
        >
          {isConfiguring ? 'Guardando...' : 'Guardar Configuración'}
        </ModernButton>
      </div>
    </motion.div>
  );
};

export default GitHubConfig; 