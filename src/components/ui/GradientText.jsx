import { motion } from 'framer-motion';

const GradientText = ({ 
  children, 
  className = "", 
  gradient = "from-indigo-500 via-purple-500 to-pink-500",
  animate = false,
  ...props 
}) => {
  const baseClasses = `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`;
  
  if (animate) {
    return (
      <motion.span
        className={`${baseClasses} ${className}`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={`${baseClasses} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default GradientText; 