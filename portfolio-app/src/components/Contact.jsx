import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your EmailJS credentials
      // Sign up at https://www.emailjs.com/ to get your credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log(result.text);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error.text);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="relative flex items-center gap-4 p-4 bg-white dark:bg-gray-950/80 rounded-xl border border-neon-purple/30 hover:border-neon-cyan/50 transition-all group shadow-md overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <div className="p-3 bg-neon-purple/20 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                    <FaEnvelope className="text-2xl text-neon-purple group-hover:text-neon-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-700 dark:text-gray-200">{portfolioData.personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${portfolioData.personalInfo.phone}`}
                  className="relative flex items-center gap-4 p-4 bg-white dark:bg-gray-950/80 rounded-xl border border-neon-purple/30 hover:border-neon-cyan/50 transition-all group shadow-md overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <div className="p-3 bg-neon-cyan/20 rounded-lg group-hover:bg-neon-purple/20 transition-colors">
                    <FaPhone className="text-2xl text-neon-cyan group-hover:text-neon-purple transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-700 dark:text-gray-200">{portfolioData.personalInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="relative flex items-center gap-4 p-4 bg-white dark:bg-gray-950/80 rounded-xl border border-neon-purple/30 shadow-md overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <div className="p-3 bg-neon-pink/20 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-neon-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-700 dark:text-gray-200">{portfolioData.personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-neon-purple mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 8, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan transition-all overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-neon-cyan/30 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-300"
                  />
                  <FaLinkedin className="text-3xl text-neon-cyan relative z-10" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -8, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-xl border border-neon-purple/30 hover:border-neon-purple transition-all overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-neon-purple/30 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-300"
                  />
                  <FaGithub className="text-3xl text-neon-purple relative z-10" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-neon-purple/30 backdrop-blur-sm dark:glow-border glow-border-light shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950/80 border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-gray-900 dark:text-gray-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950/80 border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-gray-900 dark:text-gray-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950/80 border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-cyan transition-colors text-gray-900 dark:text-gray-200 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                        : 'bg-red-500/20 border border-red-500/50 text-red-300'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 15px 40px rgba(168, 85, 247, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-purple/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
