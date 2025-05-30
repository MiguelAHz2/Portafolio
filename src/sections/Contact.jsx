import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo } from '../constants/portfolio';
import {
  containerVariants,
  titleVariants,
  descriptionVariants,
  cardVariants,
  fromLeftVariants,
  fromRightVariants,
  hoverScale,
  smoothTransition
} from '../constants/animations';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="card flex items-center space-x-4 p-4 backdrop-blur-sm bg-opacity-60"
  >
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-secondary-light dark:text-secondary-dark" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-text-muted dark:text-gray-400">
        {title}
      </h4>
      <p className="text-base font-medium text-text-light dark:text-text-dark">
        {content}
      </p>
    </div>
  </motion.div>
);

const ContactCard = ({ icon: Icon, title, value, link }) => (
  <motion.a
    href={link}
    target={link.startsWith('http') ? '_blank' : undefined}
    rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    whileHover={hoverScale}
    transition={smoothTransition}
    className="card p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300
    bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary-light/50 
    dark:hover:border-secondary-dark/50 rounded-lg"
  >
    <div className="p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 mb-3">
      <Icon className="w-6 h-6 text-secondary-light dark:text-secondary-dark" />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-medium text-text-light dark:text-text-dark mb-1">{title}</h3>
      <p className="text-sm text-text-muted dark:text-gray-400 break-all">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { ref, controls, variants } = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      name="contact"
      className="section-container bg-gradient-to-b from-surface-light to-background-light 
      dark:from-surface-dark dark:to-background-dark"
    >
      {/* Efectos de fondo */}
      <div className="bg-gradient-blur bg-gradient-primary w-[500px] h-[500px] top-0 left-0" />
      <div className="bg-gradient-blur bg-gradient-secondary w-[500px] h-[500px] bottom-0 right-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            variants={titleVariants}
            className="section-title text-3xl sm:text-4xl lg:text-5xl"
          >
            Contáctame
          </motion.h2>
          <motion.p
            variants={descriptionVariants}
            className="section-subtitle text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-6"
          >
            ¿Tienes un proyecto en mente? ¡Escríbeme y colaboramos!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ContactCard
            icon={HiMail}
            title="Email"
            value={contactInfo.email}
            link={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
          />
          <ContactCard
            icon={HiPhone}
            title="Teléfono"
            value={contactInfo.phone}
            link={`tel:${contactInfo.phone}`}
          />
          <ContactCard
            icon={FaWhatsapp}
            title="WhatsApp"
            value={contactInfo.phone}
            link={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`}
          />
          <ContactCard
            icon={HiLocationMarker}
            title="Ubicación"
            value={contactInfo.location}
            link={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}`}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 