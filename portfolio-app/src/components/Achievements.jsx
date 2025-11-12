import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCode } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Achievements = () => {
  const getIcon = (iconName) => {
    const icons = {
      trophy: FaTrophy,
      medal: FaMedal,
      award: FaAward,
      code: FaCode,
    };
    return icons[iconName] || FaTrophy;
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient pb-2 leading-tight">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative will-change-transform"
              >
                <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-neon-purple/40 backdrop-blur-sm h-full dark:glow-border glow-border-light shadow-lg">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-neon-purple/50"
                  >
                    <IconComponent className="text-4xl text-neon-cyan group-hover:text-neon-pink transition-colors" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-purple transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-neon-cyan rounded-tr-lg"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-neon-purple rounded-bl-lg"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />

                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/0 via-neon-cyan/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                </div>

                {/* Floating particles on hover */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      top: `${20 + i * 20}%`,
                      right: '-10px',
                    }}
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Technologies', value: '25+' },
            { label: 'Certifications', value: '3+' },
            { label: 'LeetCode', value: '150+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-white dark:bg-gray-950/80 rounded-xl border border-neon-purple/30 dark:glow-border glow-border-light shadow-lg"
            >
              <motion.div
                className="text-4xl font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
