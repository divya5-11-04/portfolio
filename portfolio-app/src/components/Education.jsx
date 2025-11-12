import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              style={{ perspective: "1000px" }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple hidden md:block" />

              <div className="relative mb-12">
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 2, rotate: 180 }}
                  className="absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-neon-cyan rounded-full border-4 border-gray-900 dark:border-gray-950 z-10 hidden md:block cursor-pointer"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(6, 182, 212, 0.7)',
                      '0 0 0 10px rgba(6, 182, 212, 0)',
                      '0 0 0 0 rgba(6, 182, 212, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-neon-cyan"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-neon-purple/30 backdrop-blur-sm md:w-[calc(50%-3rem)] md:ml-auto dark:glow-border glow-border-light shadow-lg will-change-transform"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-neon-purple/20 rounded-lg">
                      <FaGraduationCap className="text-3xl text-neon-purple" />
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full border border-neon-cyan/30">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    {edu.institution}
                  </h4>

                  {/* Details */}
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-neon-purple" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-neon-cyan" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 inline-block"
                  >
                    <div className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full border border-neon-purple/50">
                      <span className="text-white font-bold text-lg">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Education;
