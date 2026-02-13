import React from 'react';
import { motion } from 'framer-motion';
import './Button.css'; // we'll create next

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;