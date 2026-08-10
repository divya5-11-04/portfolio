import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaTrash, FaCopy, FaEllipsisH } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m Divya\'s AI assistant. Ask me about her skills, projects, or achievements!',
      timestamp: new Date(),
      displayedText: 'Hello! I\'m Divya\'s AI assistant. Ask me about her skills, projects, or achievements!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const messageIdRef = useRef(2);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typing animation effect
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.type === 'bot' && lastMessage.displayedText !== lastMessage.text) {
      const timer = setTimeout(() => {
        setMessages(prev => {
          const updated = [...prev];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg && lastMsg.displayedText.length < lastMsg.text.length) {
            lastMsg.displayedText = lastMsg.text.substring(0, lastMsg.displayedText.length + 2);
          }
          return updated;
        });
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const getFollowUpQuestions = (answer) => {
    const lowerAnswer = answer.toLowerCase();
    if (lowerAnswer.includes('skill') || lowerAnswer.includes('technology')) {
      return ['Tell me about your projects', 'What tools do you use?'];
    }
    if (lowerAnswer.includes('project')) {
      return ['What are your skills?', 'Tell me about your achievements'];
    }
    if (lowerAnswer.includes('achievement') || lowerAnswer.includes('award')) {
      return ['What are your skills?', 'Tell me about your projects'];
    }
    if (lowerAnswer.includes('experience') || lowerAnswer.includes('work')) {
      return ['What skills did you use?', 'What projects have you built?'];
    }
    return ['What else would you like to know?', 'Any other questions?'];
  };

  const findAnswer = (query) => {
    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(' ');
    
    // Check FAQs first with better matching
    const faq = portfolioData.chatbotData.faqs.find((item) => {
      const faqWords = item.question.toLowerCase().split(' ');
      return words.some(word => faqWords.some(faqWord => faqWord.includes(word) || word.includes(faqWord)));
    });
    
    if (faq) return faq.answer;

    // Advanced keyword matching
    if (words.some(w => ['skill', 'technology', 'techstack', 'tech', 'languages', 'expertise'].includes(w))) {
      const allSkills = [
        ...portfolioData.skills.technical,
        ...portfolioData.skills.aiml,
      ].slice(0, 10);
      return `🎯 Divya's core skills include:\n\n${allSkills.join(', ')}\n\nAnd many more! She's also proficient in Docker, Git, GitHub, and various ML frameworks.`;
    }

    if (words.some(w => ['project', 'projects', 'built', 'building', 'work'].includes(w))) {
      const projects = portfolioData.projects.slice(0, 4).map(p => `• ${p.name}`).join('\n');
      return `🚀 Some of Divya's notable projects:\n\n${projects}\n\nCheck the Projects section for more details and links!`;
    }

    if (words.some(w => ['education', 'college', 'university', 'degree', 'study'].includes(w))) {
      return `🎓 Divya is pursuing B.E. in Robotics and AI from Thapar Institute of Engineering & Technology (2023-2027) with a CGPA of 8.87/10.`;
    }

    if (words.some(w => ['experience', 'work', 'job', 'internship', 'worked'].includes(w))) {
      return `💼 Divya worked as a Full Stack Developer at Yog Sadhna Kendra Ferozepur NGO (Jun-Aug 2025).\n\nKey accomplishments:\n• Designed responsive websites\n• Developed frontend + backend workflows\n• Optimized performance significantly`;
    }

    if (words.some(w => ['contact', 'email', 'reach', 'phone', 'linkedin'].includes(w))) {
      return `📧 You can reach Divya at:\n\n• Email: ${portfolioData.personalInfo.email}\n• LinkedIn: ${portfolioData.personalInfo.linkedin}\n• GitHub: ${portfolioData.personalInfo.github}`;
    }

    if (words.some(w => ['achievement', 'award', 'award', 'accomplish', 'recognition'].includes(w))) {
      return `🏆 Divya's major achievements:\n\n• AI Skills Passport - EY & Microsoft\n• Top 10 in Google Gen AI Exchange Program\n• Team Lead - Adobe Hackathon Winner\n• 150+ LeetCode Problems Solved`;
    }

    if (words.some(w => ['hi', 'hello', 'hey', 'greetings'].includes(w))) {
      return 'Hey there! 👋 How can I help you learn more about Divya?';
    }

    if (words.some(w => ['help', 'what can', 'do you do'].includes(w))) {
      return `📚 I can help you learn about:\n\n• Skills & Technologies\n• Projects & Experience\n• Education & Achievements\n• Contact Information\n\nJust ask me anything!`;
    }

    return '🤔 I\'m not sure about that. Try asking about skills, projects, education, achievements, or experience!';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messageIdRef.current++,
      type: 'user',
      text: input,
      timestamp: new Date(),
      displayedText: input,
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const answerText = findAnswer(input);
      const botMessage = {
        id: messageIdRef.current++,
        type: 'bot',
        text: answerText,
        timestamp: new Date(),
        displayedText: '',
        followUpQuestions: getFollowUpQuestions(answerText),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);

    setInput('');
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: messageIdRef.current++,
        type: 'bot',
        text: 'Hello! I\'m Divya\'s AI assistant. Ask me about her skills, projects, or achievements!',
        timestamp: new Date(),
        displayedText: 'Hello! I\'m Divya\'s AI assistant. Ask me about her skills, projects, or achievements!',
      },
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] max-h-[600px] bg-white dark:bg-gray-950/95 backdrop-blur-md rounded-2xl border border-neon-purple/50 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header with Clear Button */}
            <div className="bg-gradient-to-r from-neon-purple to-neon-cyan p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaRobot className="text-2xl text-white" />
                <div>
                  <h3 className="font-bold text-white">Divya's AI Assistant</h3>
                  <p className="text-xs opacity-90 text-white">Ask me anything!</p>
                </div>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClearChat}
                  title="Clear chat"
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                >
                  <FaTrash className="text-sm" />
                </motion.button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neon-purple scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <div
                      className={`group px-4 py-3 rounded-2xl relative ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-br-none'
                          : 'bg-gray-100 dark:bg-gray-950/80 text-gray-800 dark:text-gray-200 border border-neon-cyan/30 rounded-bl-none'
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                        {message.displayedText || message.text}
                      </div>
                      <div className={`text-xs mt-1 opacity-70 ${message.type === 'user' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                        {formatTime(message.timestamp)}
                      </div>

                      {/* Copy Button */}
                      {message.type === 'bot' && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          onClick={() => handleCopy(message.text, message.id)}
                          className="absolute -right-8 top-0 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                          title="Copy message"
                        >
                          <FaCopy className={`text-xs ${copiedId === message.id ? 'text-green-500' : 'text-gray-500'}`} />
                        </motion.button>
                      )}
                    </div>

                    {/* Follow-up Questions */}
                    {message.type === 'bot' && message.followUpQuestions && message.displayedText === message.text && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.followUpQuestions.map((question, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => {
                              setInput(question);
                              setTimeout(() => handleSend(), 100);
                            }}
                            className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700 rounded-full hover:border-blue-500 transition-colors"
                          >
                            💬 {question}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-950/80 px-4 py-3 rounded-2xl rounded-bl-none border border-neon-cyan/30">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-neon-purple"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-neon-cyan"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-neon-pink"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions (only on first message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-400 mb-2 mt-2">💡 Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => handleSend(), 100);
                      }}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-950/80 border border-neon-purple/30 rounded-full hover:border-neon-cyan/50 hover:bg-neon-purple/10 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {question}
                    </motion.button>
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
                  disabled={isTyping}
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-950/80 border border-neon-purple/30 rounded-full focus:outline-none focus:border-neon-cyan transition-colors text-gray-900 dark:text-gray-200 disabled:opacity-60"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isTyping}
                  className="p-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full hover:shadow-lg hover:shadow-neon-purple/50 transition-all text-white disabled:opacity-60"
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
