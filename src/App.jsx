import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import InitialScreen from './components/InitialScreen';
import AcceptedScreen from './components/AcceptedScreen';
import RejectedScreen from './components/RejectedScreen';
import FriendsScreen from './components/FriendsScreen';

// ⚠️ Replace with your actual EmailJS credentials
// Replace the hardcoded keys with:
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function App() {
  const [screen, setScreen] = useState('initial');

  // Function to send email notification
  const notify = (buttonName) => {
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { button: buttonName },
      EMAILJS_PUBLIC_KEY
    ).then(
      (response) => {
        console.log('Email sent successfully!', response);
      },
      (error) => {
        console.error('Email send failed:', error);
      }
    );
  };

  // Handlers that also notify
  const handleYes = () => {
    notify('Yes, I accept');
    setScreen('accepted');
  };

  const handleNo = () => {
    notify('No');
    setScreen('rejected');
  };

  const handleAcceptAfterReject = () => {
    notify('Yes, I accept (from "I will wait" screen)');
    setScreen('accepted');
  };

  const handleFriend = () => {
    notify('Let\'s be friends');
    setScreen('friends');
  };

  // Floating particles effect (same as before)
  React.useEffect(() => {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle';
    for (let i = 0; i < 30; i++) {
      const span = document.createElement('span');
      const size = Math.random() * 10 + 2;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 10}s`;
      span.style.animationDuration = `${Math.random() * 10 + 8}s`;
      particleContainer.appendChild(span);
    }
    document.body.appendChild(particleContainer);
    return () => document.body.removeChild(particleContainer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {screen === 'initial' && (
        <InitialScreen
          key="initial"
          onYes={handleYes}
          onNo={handleNo}
        />
      )}
      {screen === 'accepted' && (
        <AcceptedScreen key="accepted" />
      )}
      {screen === 'rejected' && (
        <RejectedScreen
          key="rejected"
          onAccept={handleAcceptAfterReject}
          onFriend={handleFriend}
        />
      )}
      {screen === 'friends' && (
        <FriendsScreen key="friends" />
      )}
    </AnimatePresence>
  );
}

export default App;