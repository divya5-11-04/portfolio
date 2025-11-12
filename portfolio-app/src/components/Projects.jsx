import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-neon-purple to-neon-pink',
      'Computer Vision': 'from-neon-cyan to-neon-blue',
      'NLP': 'from-neon-pink to-neon-purple',
      'Deep Learning': 'from-neon-blue to-neon-cyan',
    };
    return colors[category] || 'from-neon-purple to-neon-cyan';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Innovative AI/ML solutions showcasing expertise in GenAI, Deep Learning, and Full Stack Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative will-change-transform"
            >
              <div className="bg-white dark:bg-gray-950 rounded-2xl border border-neon-purple/30 overflow-hidden backdrop-blur-sm h-full flex flex-col dark:glow-border glow-border-light shadow-lg">
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-xs font-semibold text-white`}>
                    {project.category}
                  </span>
                </div>

                {/* Image Placeholder with Gradient */}
                <div className="relative h-48 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-cyan/30"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.linkg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neon-purple rounded-full hover:bg-neon-cyan transition-colors text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.linkp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neon-cyan rounded-full hover:bg-neon-purple transition-colors text-white"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-neon-cyan mb-3 group-hover:text-neon-purple transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-950/80 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-950/80 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-neon-cyan/30">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #06b6d4, #a855f7) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
