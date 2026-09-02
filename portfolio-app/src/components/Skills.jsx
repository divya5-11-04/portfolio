import { motion } from 'framer-motion';
import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', color: 'from-neon-purple to-neon-cyan' },
    { id: 'technical', name: 'Technical', color: 'from-neon-purple to-neon-pink' },
    { id: 'aiml', name: 'AI & ML', color: 'from-neon-cyan to-neon-blue' },
    { id: 'libraries', name: 'Libraries', color: 'from-neon-pink to-neon-purple' },
    { id: 'generative', name: 'GenAI', color: 'from-neon-blue to-neon-cyan' },
  ];

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...portfolioData.skills.technical,
        ...portfolioData.skills.aiml,
        ...portfolioData.skills.libraries,
        ...portfolioData.skills.generative,
      ];
    }
    return portfolioData.skills[activeCategory] || [];
  };

  const skills = getAllSkills();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-neon-purple/50`
                  : 'bg-white dark:bg-gray-950/80 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-neon-purple/30 shadow-md'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative will-change-transform"
              >
                <div className="relative bg-white dark:bg-gray-950 p-4 rounded-xl border border-neon-purple/30 backdrop-blur-sm text-center hover:border-neon-cyan/50 transition-all duration-200 cursor-pointer shadow-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  <span className="relative z-10 text-gray-700 dark:text-gray-200 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  
                  {/* Progress bar on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>

          {/* Decorative Animated Circle */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 border-2 border-neon-purple/30 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity },
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-4 h-4 bg-neon-cyan rounded-full -translate-x-1/2"
              animate={{
                boxShadow: [
                  '0 0 5px #06b6d4',
                  '0 0 20px #06b6d4',
                  '0 0 5px #06b6d4',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-20 -left-20 w-48 h-48 border-2 border-neon-cyan/30 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity },
            }}
          >
            <motion.div
              className="absolute bottom-0 left-1/2 w-3 h-3 bg-neon-purple rounded-full -translate-x-1/2"
              animate={{
                boxShadow: [
                  '0 0 5px #a855f7',
                  '0 0 20px #a855f7',
                  '0 0 5px #a855f7',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
