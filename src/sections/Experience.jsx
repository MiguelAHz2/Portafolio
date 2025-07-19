import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaReact,
  FaPython,
  FaNodeJs
} from 'react-icons/fa';
import { GradientText, Timeline } from '../components/ui';
import {
  containerVariants,
  titleVariants,
  descriptionVariants
} from '../constants/animations';

const experienceData = [
  {
    title: "Estudiante de Ingeniería de Software",
    subtitle: "Politecnico Grancolombiano • 2023 - Presente",
    description: "Cursando el 4to semestre de ingeniería de software, aprendiendo fundamentos de programación, algoritmos, estructuras de datos y desarrollo de software.",
    icon: FaGraduationCap,
    variant: "primary",
    technologies: ["Java", "Python", "Algoritmos", "Estructuras de Datos"]
  },
  {
    title: "Desarrollador Frontend",
    subtitle: "Proyectos Personales • 2022 - Presente",
    description: "Desarrollo de aplicaciones web modernas usando React, TypeScript y Tailwind CSS. Creación de interfaces responsivas y experiencias de usuario excepcionales.",
    icon: FaReact,
    variant: "secondary",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Desarrollador Backend",
    subtitle: "Proyectos Personales • 2022 - Presente",
    description: "Desarrollo de APIs y servicios backend usando Python (Django, FastAPI, Flask) y Node.js. Experiencia con bases de datos SQL y NoSQL.",
    icon: FaServer,
    variant: "success",
    technologies: ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Técnico en Sistemas",
    subtitle: "Formación Técnica • 2020 - 2022",
    description: "Formación técnica en sistemas informáticos, redes y mantenimiento de equipos. Base sólida en tecnologías de la información.",
    icon: FaCode,
    variant: "warning",
    technologies: ["Redes", "Hardware", "Sistemas Operativos", "Mantenimiento"]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      name="experience"
      className="section-container bg-gradient-to-b from-surface-light/95 via-background-light to-surface-light/95
      dark:from-surface-dark/95 dark:via-[#1a1f2e] dark:to-surface-dark/95"
    >
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 right-0 opacity-10 dark:opacity-5 hidden sm:block" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 left-0 opacity-10 dark:opacity-5 hidden sm:block" />

      {/* Bordes difuminados */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none hidden sm:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-light/10 to-transparent backdrop-blur-[1px]
        dark:from-surface-dark/5 dark:to-transparent pointer-events-none hidden sm:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            variants={titleVariants}
            className="section-title text-3xl sm:text-4xl lg:text-5xl"
          >
            <GradientText gradient="from-indigo-500 via-purple-500 to-pink-500">
              Mi Experiencia
            </GradientText>
          </motion.h2>
          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto px-4 sm:px-6"
          >
            <p className="section-subtitle text-base sm:text-lg">
              Mi trayectoria en el mundo de la tecnología, desde mi formación técnica hasta mi desarrollo como programador full stack.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative"
        >
          <Timeline items={experienceData} className="py-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience; 