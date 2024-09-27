// src/components/InstructionSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGamepad, faCog, faKey, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import headerImg from '../assets/brutalpack-header--img.png'; // Update with the correct path if needed
import { motion } from 'framer-motion'; // Import framer-motion for animations

const InstructionSection = () => {
  // Animation variants for the cards
  const cardVariants = {
    idle: {
      y: [0, -10, 0], // Subtle up and down yoyo effect
      rotateX: [-5, 5, -5], // Slight rotation effect
      rotateY: [5, -5, 5],
      transition: {
        y: {
          duration: 2, // Duration of the yoyo animation cycle
          repeat: Infinity, // Repeats indefinitely
          repeatType: 'reverse', // Reverses the animation to create the yoyo effect
          ease: 'easeInOut',
        },
        rotateX: {
          duration: 5, // Duration of the rotation cycle
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotateY: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
    hover: {
      y: 10, // Push the card down slightly
      scale: 1.02, // Slightly increase scale
      rotateX: 0, // Reset rotation on hover
      rotateY: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 }, // Smooth easing
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, type: 'spring' },
    }),
  };

  // Animation variants for the container
  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.div
      className="p-12 bg-gradient-to-t from-[#2C4E44] via-[#79301A] to-[#AD5017] text-white" // Gradient reversed
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Image */}
        <div className="w-full flex justify-center mb-8">
          <motion.img
            src={headerImg}
            alt="Brutal Pack Header"
            className="rounded-lg shadow-lg w-full md:max-w-4xl object-cover h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Brutal Pack!</h2>
          <p className="text-lg">
            Ready to dive into the chaos? Follow these simple steps to set up Brutal Pack and get into the action in no time!
          </p>
        </div>

        {/* Instruction Cards with Arrows */}
        <motion.div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-6 md:space-y-0 space-y-12">
          {/* Step 1 */}
          <motion.div
            className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            animate="idle"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="text-xl font-bold text-[#2C4E44] mb-2">Step 1</div>
            <FontAwesomeIcon icon={faDownload} className="text-5xl text-[#79301A] mb-4" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Download GZDoom</h3>
              <p className="text-lg mb-4">
                Grab the latest version of GZDoom, the source port you’ll need to run Brutal Pack. Make sure you have version 4.12.2 or newer.
              </p>
            </div>
            <a
              href="https://zdoom.org/downloads"
              className="inline-block bg-[#2C4E44] text-white py-2 px-4 rounded-lg hover:bg-[#19332D] transition duration-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download GZDoom
            </a>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" />

          {/* Step 2 */}
          <motion.div
            className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            animate="idle"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="text-xl font-bold text-[#2C4E44] mb-2">Step 2</div>
            <FontAwesomeIcon icon={faGamepad} className="text-5xl text-[#79301A] mb-4" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Download Brutal Pack</h3>
              <p className="text-lg mb-4">
                Download the latest version of Brutal Pack. This is your core mod file to experience enhanced Doom gameplay!
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1yMbLuG2UeafjsLiogxqAeF_mvigSNKD9/view?usp=sharing"
              className="inline-block bg-[#79301A] text-white py-2 px-4 rounded-lg hover:bg-[#561E11] transition duration-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brutal Pack
            </a>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" />

          {/* Step 3 */}
          <motion.div
            className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            animate="idle"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="text-xl font-bold text-[#2C4E44] mb-2">Step 3</div>
            <FontAwesomeIcon icon={faCog} className="text-5xl text-[#79301A] mb-4" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Configure Controls</h3>
              <p className="text-lg mb-4">
                Set up your controls in GZDoom. Map keys for dashing, quick melee, and shoulder cannons for the best experience.
              </p>
            </div>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" />

          {/* Step 4 */}
          <motion.div
            className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            animate="idle"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <div className="text-xl font-bold text-[#2C4E44] mb-2">Step 4</div>
            <FontAwesomeIcon icon={faKey} className="text-5xl text-[#79301A] mb-4" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Launch and Enjoy</h3>
              <p className="text-lg mb-4">
                Run GZDoom, load Brutal Pack, and jump straight into the action. Get ready to experience Doom like never before!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Discord Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        >
          <h3 className="text-3xl font-bold mb-4">Need More Help? Join Our Discord!</h3>
          <p className="text-lg mb-4">
            Connect with other players, get support, and stay updated with the latest news. We’re here to help you enjoy the game to the fullest!
          </p>
          <motion.a
            href="https://discord.gg/Z2eE2WeWeb"
            className="flex items-center justify-center bg-[#5865F2] text-white py-2 px-4 rounded-lg hover:bg-[#404EED] transition duration-300 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 10 }}
          >
            <span className="text-xl font-bold">Join Discord</span>
            <FontAwesomeIcon icon={faDiscord} className="ml-2 text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InstructionSection;
