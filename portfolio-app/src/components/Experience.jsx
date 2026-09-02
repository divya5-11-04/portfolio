import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-950 p-8 rounded-2xl border border-neon-purple/30 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-200 dark:glow-border glow-border-light shadow-lg overflow-hidden">
                {/* Simplified top border on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-full transition-all duration-300" />
                
                <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-neon-purple/20 rounded-lg group-hover:bg-neon-cyan/20 transition-colors"
                    >
                      <FaBriefcase className="text-3xl text-neon-purple group-hover:text-neon-cyan transition-colors" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-neon-cyan mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-950/80 px-4 py-2 rounded-full">
                    <FaCalendarAlt className="text-neon-purple" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <FaCheckCircle className="text-neon-cyan mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{resp}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/0 via-neon-cyan/0 to-neon-purple/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Experience;
