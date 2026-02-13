import React from 'react';
import { motion } from 'framer-motion';

const AcceptedScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="container"
    >
      <div className="heart-icon">❤️</div>
      <h2 style={{ color: '#b15e6b', marginBottom: '1.5rem' }}>Our college memory</h2>
      <div className="memory-card">
        <p style={{ fontSize: '2rem' }}>📚✨</p>
        <p><strong>I saw you first in college on 1st year.</strong></p>
        <p style={{ fontStyle: 'italic' }}>It was love at first sight.</p>
        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>And every day since, my heart has only grown fonder.</p>
      </div>
      <p style={{ marginTop: '2rem', fontSize: '1.3rem' }}>Thank you, Janani ❤️</p>
    </motion.div>
  );
};

export default AcceptedScreen;