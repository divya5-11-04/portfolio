import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPrint } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const NewspaperView = ({ open, onClose }) => {
  const name = portfolioData.name || 'The AI Engineer ';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f4ecd8] text-[#1a1a1a] w-full max-w-4xl my-8 p-8 sm:p-12 rounded-sm shadow-2xl font-serif"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {/* Close / Print buttons */}
            <div className="absolute top-4 right-4 flex gap-3 print:hidden">
              <button
                onClick={() => window.print()}
                className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
                title="Print"
              >
                <FaPrint />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
                title="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* Masthead */}
            <div className="text-center border-b-4 border-double border-black pb-4 mb-6">
              <p className="text-xs tracking-[0.3em] uppercase mb-1">Est. {new Date().getFullYear()} • Special Edition</p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase">
                Divya {name} Times
              </h1>
              <div className="flex justify-between text-xs uppercase tracking-wide mt-2 border-t border-black pt-2">
                <span>{today}</span>
                <span>Vol. 1 — No. {portfolioData.achievements?.length || 0}</span>
                <span>Price: Your Attention</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 leading-tight">
              Local Developer Racks Up Achievements, Colleagues "Not Surprised"
            </h2>
            <p className="text-center italic text-sm mb-8 text-gray-700">
              A comprehensive report on recent accolades and accomplishments
            </p>

            {/* Articles grid — newspaper columns */}
            <div className="columns-1 md:columns-2 gap-8 [column-rule:1px_solid_black]">
              {portfolioData.achievements?.map((a, i) => (
                <div key={i} className="break-inside-avoid mb-8">
                  <h3 className="text-xl font-bold uppercase mb-2 border-b border-black pb-1">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-justify">
                    <span className="float-left text-6xl font-black pr-2 leading-[0.8]">
                      {a.description.charAt(0)}
                    </span>
                    {a.description.slice(1)}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t-2 border-black text-center text-xs uppercase tracking-widest">
              — End of Report — Continued on Page ∞ —
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewspaperView;