// src/components/InstructionSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faGamepad,
  faCog,
  faKey,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import headerImg from '../assets/brutalpack-header--img.png'; // Update with the correct path if needed
import { motion } from 'framer-motion'; // Import framer-motion for animations

const InstructionSection = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    },
  };

  // Animation variants for the container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="p-12 bg-gradient-to-b from-[#1e1e1e] via-[#2c2c2c] to-[#121212] text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Image */}
        <div className="w-full flex justify-center mb-8">
          <motion.img
            src={headerImg}
            alt="Brutal Pack Header"
            className="rounded-lg shadow-lg w-full md:max-w-4xl object-cover h-80 md:h-96"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>

        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Welcome to <span className="text-[#AD5017]">Brutal Pack!</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to dive into the chaos? Follow these simple steps to set up
            Brutal Pack and get into the action in no time!
          </p>
        </div>

        {/* Instruction Cards with Arrows */}
        <motion.div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8 md:space-y-0 space-y-12">
          {/* Step 1 */}
          <motion.div
            className="bg-[#2c2c2c] p-8 rounded-xl shadow-xl text-center w-full md:max-w-sm flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="text-3xl font-bold text-[#AD5017] mb-4">Step 1</div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-6xl text-[#D4B693] mb-6"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Download GZDoom</h3>
              <p className="text-lg mb-6">
                Grab the latest version of GZDoom, the source port you’ll need
                to run Brutal Pack. Make sure you have version 4.12.2 or newer.
              </p>
            </div>
            <a
              href="https://zdoom.org/downloads"
              className="inline-block bg-[#AD5017] text-white py-3 px-6 rounded-full hover:bg-[#8a3e12] transition duration-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download GZDoom
            </a>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-4xl text-[#AD5017] my-6 hidden md:block"
          />

          {/* Step 2 */}
          <motion.div
            className="bg-[#2c2c2c] p-8 rounded-xl shadow-xl text-center w-full md:max-w-sm flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="text-3xl font-bold text-[#AD5017] mb-4">Step 2</div>
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-6xl text-[#D4B693] mb-6"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Download Brutal Pack</h3>
              <p className="text-lg mb-6">
                Download the latest version of Brutal Pack. This is your core
                mod file to experience enhanced Doom gameplay!
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1yMbLuG2UeafjsLiogxqAeF_mvigSNKD9/view?usp=sharing"
              className="inline-block bg-[#AD5017] text-white py-3 px-6 rounded-full hover:bg-[#8a3e12] transition duration-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brutal Pack
            </a>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-4xl text-[#AD5017] my-6 hidden md:block"
          />

          {/* Step 3 */}
          <motion.div
            className="bg-[#2c2c2c] p-8 rounded-xl shadow-xl text-center w-full md:max-w-sm flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <div className="text-3xl font-bold text-[#AD5017] mb-4">Step 3</div>
            <FontAwesomeIcon
              icon={faCog}
              className="text-6xl text-[#D4B693] mb-6"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Configure Controls</h3>
              <p className="text-lg mb-6">
                Set up your controls in GZDoom. Map keys for dashing, quick
                melee, and shoulder cannons for the best experience.
              </p>
            </div>
          </motion.div>

          {/* Arrow Icon */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-4xl text-[#AD5017] my-6 hidden md:block"
          />

          {/* Step 4 */}
          <motion.div
            className="bg-[#2c2c2c] p-8 rounded-xl shadow-xl text-center w-full md:max-w-sm flex flex-col justify-between items-center h-auto overflow-hidden transform transition duration-300 ease-in-out"
            whileHover="hover"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div className="text-3xl font-bold text-[#AD5017] mb-4">Step 4</div>
            <FontAwesomeIcon
              icon={faKey}
              className="text-6xl text-[#D4B693] mb-6"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Launch and Enjoy</h3>
              <p className="text-lg mb-6">
                Run GZDoom, load Brutal Pack, and jump straight into the action.
                Get ready to experience Doom like never before!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Discord Section */}
        <motion.div
          className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, type: 'spring' }}
        >
          <h3 className="text-4xl font-bold mb-6">
            Need More Help? Join Our{' '}
            <span className="text-[#5865F2]">Discord!</span>
          </h3>
          <p className="text-lg mb-8 text-center max-w-xl">
            Connect with other players, get support, and stay updated with the
            latest news. We’re here to help you enjoy the game to the fullest!
          </p>
          <motion.a
            href="https://discord.gg/Z2eE2WeWeb"
            className="flex items-center justify-center bg-[#5865F2] text-white py-3 px-6 rounded-full hover:bg-[#4752c4] transition duration-300 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faDiscord} className="mr-2 text-2xl" />
            <span className="text-xl font-bold">Join Discord</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InstructionSection;
