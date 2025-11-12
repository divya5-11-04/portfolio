import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const skills = [
    'Python', 'Machine Learning', 'Deep Learning', 'Neural Networks',
    'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch', 'React', 'Flask'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white dark:bg-gray-950/80 p-8 rounded-2xl border border-neon-purple/30 dark:glow-border glow-border-light shadow-lg overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink group-hover:w-full transition-all duration-500" />
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan relative z-10">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {portfolioData.summary}
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-cyan font-semibold">CGPA:</span> 8.87/10
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-purple font-semibold">Location:</span> Patiala, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-pink font-semibold">Email:</span> {portfolioData.personalInfo.email}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skill Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center text-neon-purple">
                Core Expertise
              </h3>
              <motion.div 
                className="flex flex-wrap gap-3 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.03
                    }
                  }
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-3 bg-white dark:bg-gray-950 rounded-full border border-neon-purple/50 cursor-pointer transition-all duration-200 shadow-md overflow-hidden group will-change-transform"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-pink/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 text-gray-700 dark:text-gray-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
