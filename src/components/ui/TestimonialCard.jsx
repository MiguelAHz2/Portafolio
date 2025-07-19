import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassmorphismCard from './GlassmorphismCard';

const TestimonialCard = ({ 
  testimonial, 
  className = "",
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <GlassmorphismCard
        variant="default"
        className="p-6 h-full"
      >
        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-4xl text-blue-500/20 dark:text-blue-400/20">
          "
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-text-light dark:text-text-dark text-sm leading-relaxed mb-6">
            {testimonial.content}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-text-light dark:text-text-dark">
                {testimonial.author}
              </h4>
              <p className="text-sm text-text-muted dark:text-gray-400">
                {testimonial.position}
              </p>
              {testimonial.company && (
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  {testimonial.company}
                </p>
              )}
            </div>
          </div>

          {/* Rating */}
          {testimonial.rating && (
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          )}
        </div>

        {/* Hover effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </GlassmorphismCard>
    </motion.div>
  );
};

export default TestimonialCard; 