import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMicrophone, FaStop, FaPaperPlane, FaTimes, FaBolt } from 'react-icons/fa';

// TODO: replace with your Cloudinary cloud name + unsigned upload preset
const CLOUDINARY_CLOUD_NAME = 'e6oiujxe';
const CLOUDINARY_UPLOAD_PRESET = 'divyaz';

const RecruiterQuickContact = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    setStatus({ type: '', message: '' });
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      mr.ondataavailable = (e) => chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setRecording(true);
    } catch (err) {
      setStatus({ type: 'error', message: 'Mic access denied or unavailable.' });
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const uploadAudio = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('resource_type', 'video'); // Cloudinary treats audio under 'video'
console.log('DEBUG cloud name:', CLOUDINARY_CLOUD_NAME);
console.log('DEBUG preset:', CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`,
      { method: 'POST', body: formData }
    );
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return data.secure_url;
  };

  const handleSend = async () => {
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email.' });
      return;
    }
    if (!audioBlob) {
      setStatus({ type: 'error', message: 'Please record a quick voice note.' });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });
    try {
      const audioLink = await uploadAudio(audioBlob);

      await emailjs.send(
        'service_pbbx16i',        // same EmailJS service ID you already use
        'template_tf0zpke', // create a new EmailJS template for this
        {
          recruiter_email: email,
          audio_link: audioLink,
        },
        'V5YS4z5QGMql5P4hQ'
      );

      setStatus({ type: 'success', message: "Got it! I'll reach out shortly." });
      setEmail('');
      setAudioBlob(null);
      setAudioUrl(null);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Something went wrong. Try again?' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating bouncing button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: [0, -10, 0] }}
            exit={{ scale: 0 }}
            transition={{ y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full
                       bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold
                       shadow-lg shadow-neon-purple/40 hover:shadow-neon-cyan/60"
          >
            <FaBolt /> In a hurry?
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-2xl
                       border border-neon-purple/30 shadow-2xl p-5"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-neon-cyan">Quick note for me?</h4>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-200">
                <FaTimes />
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Drop your email + a short voice note. I'll get back to you ASAP.
            </p>

            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded-lg border border-neon-purple/30 bg-gray-50
                         dark:bg-gray-950/80 text-gray-900 dark:text-gray-200 focus:outline-none
                         focus:border-neon-cyan"
            />

            <div className="flex items-center gap-3 mb-3">
              {!recording ? (
                <button
                  onClick={startRecording}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-purple/20
                             text-neon-purple hover:bg-neon-purple/30"
                >
                  <FaMicrophone /> Record
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20
                             text-red-400 animate-pulse"
                >
                  <FaStop /> Stop
                </button>
              )}
              {audioUrl && <audio controls src={audioUrl} className="h-8 flex-1" />}
            </div>

            {status.message && (
              <div
                className={`mb-3 p-2 text-sm rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              onClick={handleSend}
              disabled={sending}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan
                         text-white font-semibold flex items-center justify-center gap-2
                         disabled:opacity-50"
            >
              <FaPaperPlane /> {sending ? 'Sending...' : 'Send'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecruiterQuickContact;