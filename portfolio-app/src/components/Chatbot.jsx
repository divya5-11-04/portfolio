import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m Divya\'s AI assistant. Ask me about her skills, projects, or achievements!',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Check FAQs first
    const faq = portfolioData.chatbotData.faqs.find((item) =>
      lowerQuery.includes(item.question.toLowerCase().split(' ').slice(0, 3).join(' '))
    );
    
    if (faq) return faq.answer;

    // Keyword matching
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology')|| lowerQuery.includes('techstack')) {
      const allSkills = [
        ...portfolioData.skills.technical,
        ...portfolioData.skills.aiml,
      ].slice(0, 8);
      return `Divya's core skills include: ${allSkills.join(', ')}, and many more!`;
    }

    if (lowerQuery.includes('project')) {
      const projects = portfolioData.projects.slice(0, 3).map(p => p.name);
      return `Some notable projects: ${projects.join(', ')}. Check out the Projects section for more details!`;
    }

    if (lowerQuery.includes('education') || lowerQuery.includes('college')) {
      return `Divya is pursuing B.E. in Robotics and AI from Thapar Institute of Engineering & Technology (2023-2027) with a CGPA of 8.87/10.`;
    }

    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return `Divya worked as a Full Stack Developer at Yog Sadhna Kendra Ferozepur NGO (Jun-Aug 2025), developing responsive websites and optimizing performance.`;
    }

    if (lowerQuery.includes('contact') || lowerQuery.includes('email')) {
      return `You can reach Divya at ${portfolioData.personalInfo.email} or connect on LinkedIn!`;
    }

    if (lowerQuery.includes('achievement') || lowerQuery.includes('award')) {
      return `Divya has earned AI Skills Passport from EY & Microsoft, ranked Top 10 in Google Gen AI Exchange, and led the winning team at Adobe Hackathon!`;
    }

    if (lowerQuery.includes('hi') || lowerQuery.includes('hello')) {
      return 'Hi there! How can I help you learn more about Divya?';
    }

    return 'I\'m not sure about that. Try asking about skills, projects, education, experience, or achievements!';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { type: 'bot', text: findAnswer(input) };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickQuestions = [
    'What are your skills?',
    'Tell me about your projects',
    'What are your achievements?',
    'How can I contact you?',
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full shadow-lg hover:shadow-neon-purple/50 transition-all"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaRobot className="text-2xl" />}
        </motion.div>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] h-[600px] bg-white dark:bg-gray-950/95 backdrop-blur-md rounded-2xl border border-neon-purple/50 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-purple to-neon-cyan p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaRobot className="text-2xl text-white" />
                <div>
                  <h3 className="font-bold text-white">Divya's AI Assistant</h3>
                  <p className="text-xs opacity-90 text-white">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neon-purple scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white'
                        : 'bg-gray-100 dark:bg-gray-950/80 text-gray-800 dark:text-gray-200 border border-neon-cyan/30'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => handleSend(), 100);
                      }}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-950/80 border border-neon-purple/30 rounded-full hover:border-neon-cyan/50 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-950/80 border border-neon-purple/30 rounded-full focus:outline-none focus:border-neon-cyan transition-colors text-gray-900 dark:text-gray-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="p-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all text-white"
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
