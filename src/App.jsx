import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <Navbar />
          <main>
            <Hero />
            <About />
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
