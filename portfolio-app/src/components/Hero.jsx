import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for neural network effect
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950">
        {/* Particles - Reduced for performance */}
        {particles.slice(0, 12).map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-neon-purple/15 dark:bg-neon-purple/25"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Gradient Orbs - Simplified */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/15 dark:bg-neon-purple/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-neon-cyan/15 dark:bg-neon-cyan/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neon-cyan text-lg mb-4"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient dark:glow-text pb-4 leading-tight will-change-transform"
          >
            Divya Monga
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 relative"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#a855f7" }}
              transition={{ duration: 0.2 }}
            >
              AI Student
            </motion.span>
            {" | "}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#06b6d4" }}
              transition={{ duration: 0.2 }}
            >
              ML & DL Developer
            </motion.span>
            {" | "}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#ec4899" }}
              transition={{ duration: 0.2 }}
            >
              Full Stack Innovator
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Passionate about applying AI to solve real-world problems and
            contributing to innovative GenAI-driven projects
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://linkedin.com/in/divya-ji4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-semibold overflow-hidden transition-all duration-200 glow-border shadow-lg hover:shadow-neon-purple/50 will-change-transform"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="https://github.com/divya5-11-04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full font-semibold overflow-hidden transition-all duration-200 glow-border shadow-lg hover:shadow-neon-cyan/50 will-change-transform"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <FaGithub /> GitHub
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="https://docs.google.com/document/d/1tEVeo3DnrOFwT6TmXpwbhU_MjbFpd2-UUW_1Bekdc5A/edit?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 border-2 border-neon-purple rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-neon-purple/20 shadow-lg"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                initial={false}
                whileHover={{ x: 5 }}
              >
                <FaFileDownload /> Resume
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-neon-cyan rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
