import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedStats = ({ 
  value, 
  label, 
  suffix = "", 
  prefix = "",
  duration = 2,
  className = "",
  icon: Icon,
  color = "blue"
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const [count, setCount] = useState(0);

  const colors = {
    blue: "text-indigo-600 dark:text-indigo-400",
    green: "text-emerald-600 dark:text-emerald-400", 
    purple: "text-purple-600 dark:text-purple-400",
    red: "text-rose-600 dark:text-rose-400",
    yellow: "text-amber-600 dark:text-amber-400"
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (inView) {
      // Reiniciar el contador cuando entra al viewport
      setCount(0);
      
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        const currentCount = Math.floor(value * progress);
        setCount(Math.max(0, currentCount)); // Evitar números negativos
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value); // Asegurar que llegue al valor final
        }
      };
      
      animate();
    } else {
      // Reiniciar el contador cuando sale del viewport
      setCount(0);
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`text-center ${className}`}
    >
      <div className="flex items-center justify-center mb-2">
        {Icon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Icon className={`w-6 h-6 mr-2 ${colors[color]}`} />
          </motion.div>
        )}
        <motion.div
          className={`text-3xl sm:text-4xl font-bold ${colors[color]}`}
          key={count}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {prefix}{count}{suffix}
        </motion.div>
      </div>
      
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedStats; 