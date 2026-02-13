import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const quotes = [
  "I love you.",
  "You're the first thought in my morning.",
  "My heart smiles every time I see you.",
  "I adore you, Janani."
];

const InitialScreen = ({ onYes, onNo }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container"
    >
      <h1 style={{ fontSize: '2.5rem', color: '#b15e6b' }}>M Raj says...</h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="quote"
        >
          {quotes[index]}
        </motion.div>
      </AnimatePresence>

      <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" onClick={onYes}>Yes, I accept</Button>
        <Button variant="secondary" onClick={onNo}>No</Button>
      </div>
    </motion.div>
  );
};

export default InitialScreen;