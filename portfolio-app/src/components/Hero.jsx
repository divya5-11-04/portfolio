import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const roles = [
  'AI Student',
  'Full Stack Innovator',
  'ML Developer',
];

const Hero = () => {
  // ==============================
  // PARTICLES
  // ==============================
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2,
    }));

    setParticles(newParticles);
  }, []);

  // ==============================
  // TYPEWRITER
  // ==============================
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 50 : 100;

    // Pause when the complete role is visible
    if (!isDeleting && displayText === currentRole) {
      delay = 1500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // TYPE ONE CHARACTER
        const nextText = currentRole.slice(
          0,
          displayText.length + 1
        );

        setDisplayText(nextText);

        // Finished typing
        if (nextText === currentRole) {
          setIsDeleting(true);
        }
      } else {
        // DELETE ONE CHARACTER
        const nextText = currentRole.slice(
          0,
          displayText.length - 1
        );

        setDisplayText(nextText);

        // Finished deleting
        if (nextText === '') {
          setIsDeleting(false);

          setRoleIndex(
            (previousIndex) =>
              (previousIndex + 1) % roles.length
          );
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ============================== */}
      {/* ANIMATED BACKGROUND */}
      {/* ============================== */}

      <div className="absolute inset-0 bg-white dark:bg-gray-950">

        {/* PARTICLES */}
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

        {/* PURPLE GRADIENT ORB */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/15 dark:bg-neon-purple/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* CYAN GRADIENT ORB */}
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-neon-cyan/15 dark:bg-neon-cyan/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

      </div>

      {/* ============================== */}
      {/* CONTENT */}
      {/* ============================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* GREETING */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-neon-cyan text-lg mb-4"
          >
            Hi, I'm
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient dark:glow-text pb-4 leading-tight will-change-transform"
          >
            Divya Monga
          </motion.h1>

          {/* ============================== */}
          {/* TYPEWRITER TAGLINE */}
          {/* ============================== */}

          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
          >
            <span className="inline-block min-w-[320px]">
              <span className="text-gradient">
                {displayText}
              </span>

              <span className="ml-1 animate-pulse text-neon-cyan">
                |
              </span>
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Passionate about applying AI to solve real-world problems and
            contributing to innovative GenAI-driven projects
          </motion.p>

          {/* ============================== */}
          {/* BUTTONS */}
          {/* ============================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
            }}
            className="flex flex-wrap justify-center gap-4"
          >

            {/* LINKEDIN */}
            <motion.a
              href="https://linkedin.com/in/divya-ji4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-semibold overflow-hidden transition-all duration-200 glow-border shadow-lg hover:shadow-neon-purple/50 will-change-transform"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{
                  x: 5,
                }}
              >
                <FaLinkedin />
                LinkedIn
              </motion.span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            {/* GITHUB */}
            <motion.a
              href="https://github.com/divya5-11-04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full font-semibold overflow-hidden transition-all duration-200 glow-border shadow-lg hover:shadow-neon-cyan/50 will-change-transform"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{
                  x: 5,
                }}
              >
                <FaGithub />
                GitHub
              </motion.span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            {/* RESUME */}
            <motion.a
              href="https://drive.google.com/file/d/19RkwQksFKTC1Yb7xL0Qq83eYH-ZhjQqx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                rotateZ: 2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative px-8 py-3 border-2 border-neon-purple rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-neon-purple/20 shadow-lg"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                initial={false}
                whileHover={{
                  x: 5,
                }}
              >
                <FaFileDownload />
                Resume
              </motion.span>
            </motion.a>

          </motion.div>

        </motion.div>

        {/* ============================== */}
        {/* SCROLL INDICATOR */}
        {/* ============================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
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
