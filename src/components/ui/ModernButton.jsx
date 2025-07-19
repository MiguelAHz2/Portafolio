import { motion } from 'framer-motion';
import { useState } from 'react';

const ModernButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary",
  size = "md",
  icon: Icon,
  loading = false,
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-glow hover:shadow-glow-dark",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white",
    outline: "border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white",
    ghost: "text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
    success: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white",
    danger: "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        rounded-lg font-medium
        flex items-center justify-center gap-2
        transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        relative overflow-hidden cursor-pointer
      `}
      whileHover={!disabled ? { 
        scale: 1.02,
        y: -1,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onMouseDown={(e) => {
        if (!disabled) {
          e.stopPropagation();
          setIsPressed(true);
        }
      }}
      onMouseUp={(e) => {
        e.stopPropagation();
        setIsPressed(false);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsPressed(false);
      }}
      onClick={(e) => {
        if (!disabled && !loading && onClick) {
          e.stopPropagation();
          onClick(e);
        }
      }}
      disabled={disabled || loading}
      {...props}
    >
      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 flex items-center gap-2 pointer-events-none">
        {loading ? (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          Icon && <Icon className="w-4 h-4 pointer-events-none" />
        )}
        <span className="pointer-events-none">{children}</span>
      </div>
      
      {/* Efecto de ondas al hacer clic */}
      {isPressed && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-white opacity-20 pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default ModernButton; 