// src/components/AnimatedContainer.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedContainer = ({ children, className = '', style = {} }) => {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update state with mouse position relative to the container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // Range: -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // Range: -1 to 1
    setMousePosition({ x, y });
  };

  // Calculate rotation based on mouse position
  const rotationX = mousePosition.y * 10; // Adjust for sensitivity
  const rotationY = mousePosition.x * 10;

  return (
    <motion.div
      className={`rounded-lg overflow-hidden relative shadow-2xl ${className}`}
      style={{
        perspective: '1000px', // Perspective for 3D effect
        background: 'linear-gradient(to bottom, #2C4E44, #79301A)', // Reversed colors for background
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)', // Darker shadow for a stronger effect
        ...style,
      }}
      onMouseMove={handleMouseMove}
      whileHover={{
        rotateX: -rotationX, // Apply rotation based on mouse position
        rotateY: rotationY,
        scale: 1.05, // Slight scaling effect
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      initial={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
