import React from 'react';
import { motion } from 'framer-motion';

const FriendsScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container"
    >
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
      <h2 style={{ color: '#9b5e2e' }}>Friends it is!</h2>
      <p style={{ fontSize: '1.3rem', margin: '2rem 0', lineHeight: '1.6' }}>
        I'm so happy to have you in my life, Janani.  
        <br/>A friendship with you is a treasure I'll always cherish.
      </p>
      <p style={{ fontStyle: 'italic', color: '#b15e6b' }}>— M Raj</p>
    </motion.div>
  );
};

export default FriendsScreen;