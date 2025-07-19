import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo } from '../constants/portfolio';
import { GradientText, GlassmorphismCard, ModernButton } from '../components/ui';
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
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { useEffect } from 'react';

const ContactInfo = ({ icon: Icon, title, content }) => (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card flex items-center space-x-4 p-4 backdrop-blur-sm bg-opacity-60"
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
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
    <div className="p-3 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 mb-3">
      <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('');
  const { ref, controls, variants } = useScrollAnimation();

  // Configuración de EmailJS
  const EMAILJS_SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
  const EMAILJS_USER_ID = EMAILJS_CONFIG.USER_ID;

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, [EMAILJS_USER_ID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Portafolio Web',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      setSubmitStatus('success');
      setSubmitMessage('¡Mensaje enviado exitosamente! Te responderé pronto.');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        userId: EMAILJS_USER_ID
      });
      
      let errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
      
      if (error.status === 412) {
        errorMessage = 'Error de configuración. Verifica las credenciales de EmailJS.';
      } else if (error.status === 400) {
        errorMessage = 'Datos del formulario inválidos. Verifica que todos los campos estén completos.';
      } else if (error.status === 429) {
        errorMessage = 'Demasiados intentos. Espera un momento antes de intentar nuevamente.';
      }
      
      setSubmitStatus('error');
      setSubmitMessage(errorMessage);
      
      // Limpiar mensaje de error después de 8 segundos
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      name="contact"
      className="section-container min-h-[70vh] bg-gradient-to-b from-surface-light/95 via-background-light to-surface-light/95
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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            variants={titleVariants}
            className="section-title text-3xl sm:text-4xl lg:text-5xl"
          >
            <GradientText gradient="from-indigo-500 via-purple-500 to-pink-500">
              Contáctame
            </GradientText>
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

        {/* Formulario de contacto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16"
        >
          <GlassmorphismCard
            variant="primary"
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-6 text-center">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensaje de estado */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <HiXCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium">{submitMessage}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 
                    border border-white/20 dark:border-white/10 
                    text-text-light dark:text-text-dark
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 
                    border border-white/20 dark:border-white/10 
                    text-text-light dark:text-text-dark
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 
                  border border-white/20 dark:border-white/10 
                  text-text-light dark:text-text-dark
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>
              <div className="text-center">
                <ModernButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </ModernButton>
              </div>
            </form>
          </GlassmorphismCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 