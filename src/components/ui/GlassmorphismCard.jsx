import { motion } from 'framer-motion';
import { useState } from 'react';

const GlassmorphismCard = ({ 
  children, 
  className = "",
  variant = "default",
  hover = true,
  blur = "backdrop-blur-md",
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10",
    primary: "bg-indigo-500/10 dark:bg-indigo-400/10 border-indigo-500/30 dark:border-indigo-400/30",
    secondary: "bg-purple-500/10 dark:bg-purple-400/10 border-purple-500/30 dark:border-purple-400/30",
    success: "bg-emerald-500/10 dark:bg-emerald-400/10 border-emerald-500/30 dark:border-emerald-400/30",
    warning: "bg-amber-500/10 dark:bg-amber-400/10 border-amber-500/30 dark:border-amber-400/30"
  };

  return (
    <motion.div
      className={`
        ${variants[variant]}
        ${blur}
        ${className}
        rounded-2xl border
        shadow-xl
        transition-all duration-300
        relative overflow-hidden
        ${hover ? 'hover:shadow-2xl hover:scale-[1.02]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      {...props}
    >
      {/* Efecto de brillo en hover */}
      {hover && isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Contenido */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Efecto de borde brillante */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-2xl border border-transparent"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
            backgroundSize: '200% 200%'
          }}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default GlassmorphismCard; 