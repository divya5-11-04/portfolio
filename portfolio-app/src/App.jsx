import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import QuickContact from './components/RecruiterQuickContact';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-900 dark:text-white">

      {/* CINEMATIC INTRO */}
      {!introFinished && (
        <div className="fixed inset-0 z-[9999] bg-black">

          <video
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onEnded={() => setIntroFinished(true)}
          >
            <source src="projects/trailer.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex items-center gap-3">

            {/* Mute / Unmute */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="
                px-5 py-2.5
                rounded-full
                border border-white/30
                bg-black/40
                backdrop-blur-md
                text-white
                text-sm
                hover:bg-white/10
                transition-all duration-300
              "
            >
              {isMuted ? '🔇 Unmute' : '🔊 Mute'}
            </button>

            {/* Skip Intro */}
            <button
              onClick={() => setIntroFinished(true)}
              className="
                px-5 py-2.5
                rounded-full
                border border-white/30
                bg-black/40
                backdrop-blur-md
                text-white
                text-sm
                hover:bg-white/10
                transition-all duration-300
              "
            >
              Skip Intro
            </button>

          </div>

        </div>
      )}

      {/* ACTUAL PORTFOLIO */}
      <div
        className={`
          transition-opacity duration-1000
          ${introFinished ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
        <Chatbot />
        <QuickContact />
      </div>

    </div>
  );
}

export default App;