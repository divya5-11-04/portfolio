import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import NewspaperView from './NewspaperView';
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCode,
  FaMicrophone,
  FaMicrochip,
  FaVolumeUp,
  FaRobot,
  FaFileAlt,
  FaSearch,
  FaCommentDots,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Achievements = () => {
  const [showNewspaper, setShowNewspaper] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      trophy: FaTrophy,
      medal: FaMedal,
      award: FaAward,
      code: FaCode,
      mic: FaMicrophone,
      cpu: FaMicrochip,
      'volume-2': FaVolumeUp,
      bot: FaRobot,
      'file-text': FaFileAlt,
      search: FaSearch,
      'message-square': FaCommentDots,
    };

    return icons[iconName] || FaTrophy;
  };

  const openAchievement = (link) => {
    if (!link) return;

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
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

          <div className="text-center mt-6">
            <button
              onClick={() => setShowNewspaper(true)}
              className="
                px-6 py-3 rounded-full
                border-2 border-neon-purple
                text-neon-cyan font-semibold
                hover:bg-neon-purple/10
                transition-colors
              "
            >
              📰 View as Newspaper
            </button>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {portfolioData.achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            const isHovered = hoveredAchievement === index;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredAchievement(index)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >

                {/* Achievement Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openAchievement(achievement.link)}
                  className="
                    group relative
                    will-change-transform
                    cursor-pointer
                  "
                >
                  <div
                    className="
                      bg-white dark:bg-gray-950
                      p-8 rounded-2xl
                      border border-neon-purple/40
                      backdrop-blur-sm
                      h-full
                      dark:glow-border
                      glow-border-light
                      shadow-lg
                      overflow-hidden
                    "
                  >

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="
                        inline-block p-4
                        bg-gradient-to-br
                        from-neon-purple/30
                        to-neon-cyan/30
                        rounded-2xl mb-4
                        group-hover:shadow-lg
                        group-hover:shadow-neon-purple/50
                      "
                    >
                      <IconComponent
                        className="
                          text-4xl
                          text-neon-cyan
                          group-hover:text-neon-pink
                          transition-colors
                        "
                      />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="
                        text-xl font-bold
                        text-neon-cyan mb-3
                        group-hover:text-neon-purple
                        transition-colors
                      "
                    >
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Visit indicator */}
                    <div
                      className="
                        mt-5 flex items-center gap-2
                        text-sm font-semibold
                        text-neon-cyan
                        opacity-70
                        group-hover:opacity-100
                        transition-opacity
                      "
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>View Achievement</span>
                    </div>

                    {/* Decorative Corner */}
                    <motion.div
                      className="
                        absolute top-4 right-4
                        w-3 h-3
                        border-t-2 border-r-2
                        border-neon-cyan
                        rounded-tr-lg
                      "
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    <motion.div
                      className="
                        absolute bottom-4 left-4
                        w-3 h-3
                        border-b-2 border-l-2
                        border-neon-purple
                        rounded-bl-lg
                      "
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />

                    {/* Animated Background Gradient */}
                    <motion.div
                      className="
                        absolute inset-0
                        rounded-2xl
                        bg-gradient-to-r
                        from-neon-purple/0
                        via-neon-cyan/10
                        to-neon-purple/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        pointer-events-none
                      "
                      animate={{
                        backgroundPosition: [
                          '0% 50%',
                          '100% 50%',
                          '0% 50%',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    />
                  </div>

                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="
                        absolute w-1 h-1
                        bg-neon-cyan
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                      "
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

                {/* ================================= */}
                {/* HOVER LINK PREVIEW */}
                {/* ================================= */}

            
{/* Hover Details Preview */}
<AnimatePresence>
  {isHovered && achievement.link && (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 10,
        scale: 0.95,
      }}
      transition={{ duration: 0.2 }}
      className="
        absolute
        z-50
        left-1/2
        -translate-x-1/2
        top-full
        mt-4
        w-[min(360px,90vw)]
      "
      onMouseEnter={() => setHoveredAchievement(index)}
      onMouseLeave={() => setHoveredAchievement(null)}
    >
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          openAchievement(achievement.link);
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="
          w-full
          p-5
          rounded-2xl
          bg-gray-950
          border
          border-neon-cyan/50
          shadow-2xl
          shadow-neon-purple/30
          text-left
          cursor-pointer
          group/preview
        "
      >
        {/* Microsoft Learn Branding */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="
              w-10 h-10
              rounded-xl
              bg-white
              flex items-center
              justify-center
              shadow-lg
            "
          >
            <span className="text-blue-600 font-bold text-xs">
              MS
            </span>
          </div>

          <div>
            <p className="text-white font-semibold text-sm">
              Microsoft Learn
            </p>
            <p className="text-gray-400 text-xs">
              Achievement
            </p>
          </div>
        </div>

        {/* Click for details */}
        <div
          className="
            flex items-center justify-between
            p-4
            rounded-xl
            bg-gradient-to-r
            from-neon-purple/20
            to-neon-cyan/20
            border border-white/10
            group-hover/preview:border-neon-cyan/50
            transition-all
          "
        >
          <div>
            <p className="text-white font-bold text-lg">
              Click for details
            </p>

            <p className="text-gray-400 text-xs mt-1">
              View achievement on Microsoft Learn
            </p>
          </div>

          <motion.div
            className="
              w-10 h-10
              rounded-full
              bg-neon-cyan/10
              flex items-center
              justify-center
              text-neon-cyan
            "
            whileHover={{ x: 5 }}
          >
            <FaExternalLinkAlt className="text-sm" />
          </motion.div>
        </div>

        {/* Small hint */}
        <p className="text-gray-500 text-xs mt-3 text-center">
          ↗ Opens in a new tab
        </p>
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>


              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="
            mt-16
            grid grid-cols-2
            md:grid-cols-4
            gap-6
            max-w-4xl
            mx-auto
          "
        >
          {[
            { label: 'Projects', value: '45+' },
            { label: 'Technologies', value: '25+' },
            { label: 'Certifications', value: '3+' },
            { label: 'LeetCode', value: '150+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="
                text-center p-6
                bg-white dark:bg-gray-950/80
                rounded-xl
                border border-neon-purple/30
                dark:glow-border
                glow-border-light
                shadow-lg
              "
            >
              <motion.div
                className="
                  text-4xl font-bold
                  text-gradient mb-2
                "
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: index * 0.1 + 0.2,
                }}
              >
                {stat.value}
              </motion.div>

              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Newspaper */}
      <NewspaperView
        open={showNewspaper}
        onClose={() => setShowNewspaper(false)}
      />
    </section>
  );
};

export default Achievements;
