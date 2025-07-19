import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { useEffect, useRef } from 'react';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';
import './styles/AnimatedBackground.css';

const App = () => {
  const radialGlowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (radialGlowRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        radialGlowRef.current.style.setProperty('--mouse-x', `${x}%`);
        radialGlowRef.current.style.setProperty('--mouse-y', `${y}%`);
        radialGlowRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (radialGlowRef.current) {
        radialGlowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={`min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark
          selection:bg-primary-500/20 selection:text-primary-500 dark:selection:bg-primary-400/20 dark:selection:text-primary-400`}>
          <CustomCursor />
          <div className="animated-grid-background hidden sm:block">
            <div className="grid-system">
              <div className="main-grid" />
              <div className="secondary-grid" />
              <div className="accent-lines" />
            </div>
            <div className="particles">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${25 + (Math.random() * 50)}%`,
                    top: `${25 + (Math.random() * 50)}%`,
                    animationDelay: `${-Math.random() * 20}s`
                  }}
                />
              ))}
            </div>
            <div ref={radialGlowRef} className="radial-glow" />
          </div>
          <div className="blur-overlay" />
          <svg className="svg-filters">
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="gooey"
                />
              </filter>
            </defs>
          </svg>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
