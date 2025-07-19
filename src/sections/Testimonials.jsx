import { motion } from 'framer-motion';
import { GradientText, TestimonialCard } from '../components/ui';
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
  cardVariants
} from '../constants/animations';

const testimonialsData = [
  {
    content: "Miguel demostró una excelente capacidad técnica y profesionalismo en el desarrollo de nuestro proyecto. Su conocimiento en React y Python fue fundamental para el éxito del proyecto.",
    author: "Carlos Rodríguez",
    position: "Project Manager",
    company: "TechCorp",
    rating: 5
  },
  {
    content: "Trabajar con Miguel fue una experiencia increíble. Su atención al detalle y su capacidad para resolver problemas complejos hicieron que nuestro proyecto fuera un éxito total.",
    author: "Ana Martínez",
    position: "Frontend Developer",
    company: "Digital Solutions",
    rating: 5
  },
  {
    content: "Miguel tiene un gran dominio de las tecnologías modernas y siempre está dispuesto a aprender nuevas cosas. Su código es limpio y bien estructurado.",
    author: "David García",
    position: "Senior Developer",
    company: "Innovation Labs",
    rating: 5
  },
  {
    content: "Excelente comunicación y capacidad de trabajo en equipo. Miguel entregó el proyecto a tiempo y con la calidad esperada. Definitivamente lo recomendaría.",
    author: "Laura Sánchez",
    position: "Product Owner",
    company: "StartupXYZ",
    rating: 5
  },
  {
    content: "Miguel es un desarrollador muy talentoso. Su capacidad para aprender rápidamente y adaptarse a nuevas tecnologías es impresionante. Un verdadero profesional.",
    author: "Roberto López",
    position: "Tech Lead",
    company: "FutureTech",
    rating: 5
  },
  {
    content: "Trabajar con Miguel fue muy productivo. Su conocimiento en full stack development y su capacidad para resolver problemas complejos son excepcionales.",
    author: "María González",
    position: "UX Designer",
    company: "Creative Studio",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      name="testimonials"
      className="section-container bg-gradient-to-b from-surface-light/95 via-background-light to-surface-light/95
      dark:from-surface-dark/95 dark:via-[#1a1f2e] dark:to-surface-dark/95"
    >
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 left-0 opacity-10 dark:opacity-5 hidden sm:block" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 right-0 opacity-10 dark:opacity-5 hidden sm:block" />

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
              Lo Que Dicen de Mí
            </GradientText>
          </motion.h2>
          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto px-4 sm:px-6"
          >
            <p className="section-subtitle text-base sm:text-lg">
              Testimonios de clientes y colegas que han trabajado conmigo en diversos proyectos.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard
                testimonial={testimonial}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials; 