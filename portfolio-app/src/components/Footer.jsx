import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 backdrop-blur-md border-t border-neon-purple/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            © {currentYear} Divya Monga. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://linkedin.com/in/divya-ji4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-neon-cyan transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/divya5-11-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:ddivya.officially@gmail.com"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-neon-pink transition-colors duration-300"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          {/* Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-500 text-sm"
          >
            Designed with <span className="text-neon-pink">❤</span> by Divya Monga
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
