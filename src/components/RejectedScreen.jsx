import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const RejectedScreen = ({ onAccept, onFriend }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="container"
    >
      <h2 style={{ color: '#b15e6b', marginBottom: '1rem' }}>I will wait for you forever.</h2>
      <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>Will you accept me?</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        <Button variant="accept" onClick={onAccept}>Yes, I accept</Button>
        <Button variant="friend" onClick={onFriend}>Let's be friends</Button>
      </div>
    </motion.div>
  );
};

export default RejectedScreen;