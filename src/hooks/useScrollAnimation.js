import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return {
    ref,
    controls,
    variants: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 50 }
    }
  };
}; 