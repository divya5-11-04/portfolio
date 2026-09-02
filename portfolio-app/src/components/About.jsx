import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: 'Python',
      project: 'AI & ML Projects',
      description:
        'Used extensively for machine learning, automation, data analysis and research.',
      proofUrl: 'https://github.com/divya5-11-04/logbook',
    },
    {
      name: 'HTML/CSS/JavaScript',
      project: 'Voice Recorder',
      description:
        'AI Voice Recorder to record and Transcribe',
      proofUrl: 'https://github.com/divya5-11-04/logbook',
    },
    {
      name: 'Machine Learning',
      project: 'RouteGuardian AI',
      description:
        'Predictive maintenance system built using machine learning and XGBoost.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'Deep Learning',
      project: 'Deep Learning Projects',
      description:
        'Built and experimented with neural network architectures for AI applications.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'Neural Networks',
      project: 'Neural Network Projects',
      description:
        'Hands-on implementation and experimentation with neural network models.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'NLP',
      project: 'NLP Projects',
      description:
        'Worked with natural language processing and AI-based language applications.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'Computer Vision',
      project: 'AI Attendance System',
      description:
        'Built a computer vision based attendance system using face detection and recognition.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'TensorFlow',
      project: 'Deep Learning Projects',
      description:
        'Used TensorFlow for developing and experimenting with deep learning models.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'PyTorch',
      project: 'Deep Learning Projects',
      description:
        'Used PyTorch for neural network experimentation and model development.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'React',
      project: 'Interactive Web Applications',
      description:
        'Built modern responsive interfaces using React, Vite, TypeScript and Tailwind CSS.',
      proofUrl: 'https://github.com/',
    },
    {
      name: 'Flask',
      project: 'AI Backend APIs',
      description:
        'Built Python backend APIs for machine learning and AI applications.',
      proofUrl: 'https://github.com/',
    },
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

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
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

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT: SUMMARY ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white dark:bg-gray-950/80 p-8 rounded-2xl border border-neon-purple/30 dark:glow-border glow-border-light shadow-lg overflow-hidden group">

              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink group-hover:w-full transition-all duration-500" />

              <h3 className="text-2xl font-bold mb-6 text-neon-cyan relative z-10">
                Professional Summary
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {portfolioData.summary}
              </p>

              <div className="mt-6 space-y-3">

                {/* CGPA */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />

                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-cyan font-semibold">
                      CGPA:
                    </span>{' '}
                    8.89/10
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />

                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-purple font-semibold">
                      Location:
                    </span>{' '}
                    Patiala, India
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />

                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="text-neon-pink font-semibold">
                      Email:
                    </span>{' '}
                    {portfolioData.personalInfo.email}
                  </span>
                </div>

              </div>
            </div>
          </motion.div>


          {/* ================= RIGHT: SKILLS ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">

              {/* Skill Heading */}
              <h3 className="text-2xl font-bold mb-3 text-center text-neon-purple">
                Skills
              </h3>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-7">
                Hover over a skill to see proof of my work
              </p>

              {/* Skill Pills */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.03,
                    },
                  },
                }}
              >

                {skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >

                    {/* Skill Button */}
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 10,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.3,
                          },
                        },
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() =>
                        setActiveSkill(
                          activeSkill?.name === skill.name
                            ? null
                            : skill
                        )
                      }
                      className="
                        relative
                        px-6
                        py-3
                        bg-white
                        dark:bg-gray-950
                        rounded-full
                        border
                        border-neon-purple/50
                        cursor-pointer
                        transition-all
                        duration-200
                        shadow-md
                        overflow-visible
                        group
                        will-change-transform
                      "
                    >

                      {/* Hover Gradient */}
                      <motion.div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-neon-purple/20
                          via-neon-cyan/20
                          to-neon-pink/20
                          opacity-0
                          group-hover:opacity-100
                          rounded-full
                        "
                        transition={{
                          duration: 0.3,
                        }}
                      />

                      {/* Skill Name */}
                      <span className="relative z-10 text-gray-700 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>

                    </motion.div>


                    {/* ================= PROOF CARD ================= */}
                    <AnimatePresence>
                      {activeSkill?.name === skill.name && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 8,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 8,
                            scale: 0.95,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                            absolute
                            z-[100]
                            left-1/2
                            -translate-x-1/2
                            top-full
                            mt-4
                            w-72
                            sm:w-80
                            p-5
                            rounded-2xl
                            border
                            border-neon-purple/40
                            bg-white/95
                            dark:bg-gray-950/95
                            backdrop-blur-xl
                            shadow-2xl
                          "
                        >

                          {/* Top Gradient */}
                          <div className="
                            absolute
                            top-0
                            left-0
                            right-0
                            h-1
                            rounded-t-2xl
                            bg-gradient-to-r
                            from-neon-purple
                            via-neon-cyan
                            to-neon-pink
                          " />


                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">

                            <div>
                              <p className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-neon-cyan
                                mb-1
                              ">
                                Skill Proof
                              </p>

                              <h4 className="
                                text-lg
                                font-bold
                                text-gray-900
                                dark:text-white
                              ">
                                {skill.name}
                              </h4>
                            </div>

                            {/* Check Icon */}
                            <div className="
                              w-9
                              h-9
                              rounded-full
                              bg-gradient-to-r
                              from-neon-purple
                              to-neon-cyan
                              flex
                              items-center
                              justify-center
                              shadow-lg
                            ">
                              <span className="text-white text-sm font-bold">
                                ✓
                              </span>
                            </div>

                          </div>


                          {/* Project */}
                          <div className="mb-5">

                            <p className="
                              text-sm
                              font-semibold
                              text-neon-purple
                              mb-1
                            ">
                              {skill.project}
                            </p>

                            <p className="
                              text-sm
                              text-gray-600
                              dark:text-gray-400
                              leading-relaxed
                            ">
                              {skill.description}
                            </p>

                          </div>


                          {/* Proof Button */}
                          <a
                            href={skill.proofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="
                              flex
                              items-center
                              justify-center
                              gap-2
                              w-full
                              px-4
                              py-3
                              rounded-xl
                              bg-gradient-to-r
                              from-neon-purple
                              to-neon-cyan
                              text-white
                              font-semibold
                              text-sm
                              hover:opacity-90
                              hover:shadow-lg
                              transition-all
                              duration-200
                            "
                          >
                            <span>
                              Check proof of my work
                            </span>

                            <span className="text-base">
                              ↗
                            </span>
                          </a>

                        </motion.div>

                      )}
                    </AnimatePresence>

                  </div>

                ))}

              </motion.div>
            </div>


            {/* ================= DECORATIVE ELEMENTS ================= */}

            <motion.div
              className="
                absolute
                -top-10
                -right-10
                w-40
                h-40
                bg-neon-purple/20
                rounded-full
                blur-3xl
              "
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="
                absolute
                -bottom-10
                -left-10
                w-40
                h-40
                bg-neon-cyan/20
                rounded-full
                blur-3xl
              "
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;