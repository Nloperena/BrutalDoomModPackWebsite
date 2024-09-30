// src/components/DonateSection.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import backgroundImage from '../assets/DoomCoffee.png';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Initialize Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const DonateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const [isHovered, setIsHovered] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // Animation controls and refs
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const backgroundControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Start the background blur animation
      backgroundControls.start('visible').then(() => {
        // After the background animation completes, start the container animation
        containerControls.start('visible');
      });
    }
  }, [isInView, backgroundControls, containerControls]);

  // Animation variants
  const backgroundVariants = {
    hidden: { filter: 'blur(20px)' },
    visible: {
      filter: 'blur(0px)',
      transition: { duration: 1 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your existing handleSubmit code here
  };

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(44, 78, 68, 0.9), rgba(121, 48, 26, 0.9)), url(${backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1, // Lowered z-index
        }}
        variants={backgroundVariants}
        initial="hidden"
        animate={backgroundControls}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="w-full min-h-screen p-8 flex justify-center items-center relative"
        variants={containerVariants}
        initial="hidden"
        animate={containerControls}
        style={{ zIndex: -1 }} // Lowered z-index
      >
        <motion.div
          className="relative w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl flex border-4 border-[#D4B693]"
          style={{
            boxShadow:
              '0 10px 30px rgba(0, 0, 0, 0.9), 0 6px 6px rgba(0, 0, 0, 0.5)',
            transformStyle: 'preserve-3d',
          }}
          whileHover={{
            scale: 1.02,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Icon and Message Section */}
          <motion.div
            className="relative flex-1 flex flex-col items-center justify-center text-center p-6 lg:p-10 z-0"
            style={{
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.5s ease',
            }}
          >
            <div>
              <FontAwesomeIcon
                icon={faCoffee}
                className="text-9xl text-[#D4B693]"
              />
              <h2 className="text-6xl font-extrabold text-white mt-6">
                Buy Us a Coffee
              </h2>
              <p className="text-xl text-white mt-4 max-w-md">
                Love what we're doing? Fuel our passion by buying us a coffee!
                Your support keeps us energized to bring you the best of Brutal
                Pack. Every dollar helps us keep the lights on and continue
                development.
              </p>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            className={`relative flex-1 bg-gray-900 bg-opacity-90 p-6 lg:p-10 rounded-lg z-0 backdrop-blur-md form-container`}
            style={{
              backdropFilter: 'blur(10px)',
              transition: 'all 0.5s ease',
              boxShadow: isHovered
                ? '0 0 20px rgba(211, 180, 147, 0.8), 0 0 10px rgba(211, 180, 147, 0.5)'
                : 'none',
              border: isHovered
                ? '2px solid rgba(211, 180, 147, 0.8)'
                : 'none',
            }}
            initial={{ flex: 1 }}
            animate={{
              flex: isHovered ? 2 : 1,
            }}
          >
            {isHovered && (
              <>
                <motion.h2
                  className="text-3xl font-bold mb-4 text-white"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 10,
                    delay: 0.1,
                  }}
                >
                  Help Us Keep the Lights On
                </motion.h2>
                <p className="mb-6 text-white">
                  Your support helps us continue developing and improving Brutal
                  Pack. If you're happy with our work, consider making a donation to
                  keep the updates coming!
                </p>
              </>
            )}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693] text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693] text-white"
                  placeholder="email@example.com"
                  required
                />
              </div>
              {/* Amount Field */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-white">
                  Donation Amount ($)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693] text-white"
                  placeholder="5"
                  required
                />
              </div>
              {/* CardElement */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1 text-white">
                  Card Details
                </label>
                <div className="w-full px-3 py-2 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-600">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          color: '#ffffff',
                          fontSize: '16px',
                          '::placeholder': {
                            color: '#a0aec0',
                          },
                        },
                        invalid: {
                          color: '#f56565',
                        },
                      },
                    }}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-6 rounded-lg text-lg transition duration-300"
                  disabled={!stripe}
                >
                  Donate Now
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Wrap DonateForm with Elements provider
const DonateSection = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonateForm />
    </Elements>
  );
};

export default DonateSection;
