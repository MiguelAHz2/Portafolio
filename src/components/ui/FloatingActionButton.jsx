import { motion } from 'framer-motion';
import { useState } from 'react';

const FloatingActionButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary",
  size = "md",
  icon: Icon,
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-glow hover:shadow-glow-dark",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900",
    success: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    danger: "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
  };

  const sizes = {
    sm: "w-12 h-12 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-16 h-16 text-lg"
  };

  return (
    <motion.button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        rounded-full shadow-lg hover:shadow-xl
        text-white font-medium
        flex items-center justify-center
        transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        active:scale-95 cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}
      `}
      whileHover={!disabled ? { 
        scale: 1.05,
        y: -2,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 pointer-events-none" />}
      <span className="pointer-events-none">{children}</span>
      
      {/* Efecto de ondas */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-20 pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Efecto de pulso cuando está deshabilitado */}
      {disabled && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white opacity-10 pointer-events-none"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
};

export default FloatingActionButton; 