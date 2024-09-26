// src/components/InstructionSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGamepad, faCog, faKey, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const InstructionSection = () => {
  return (
    <div className="p-12 bg-gradient-to-t from-[#4D0D0A] via-[#79301A] to-[#AD5017] text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Brutal Pack!</h2>
          <p className="text-lg">
            Ready to dive into the chaos? Follow these simple steps to set up Brutal Pack and get into the action in no time!
          </p>
        </div>

        {/* Instruction Cards with Arrows */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-6 md:space-y-0 space-y-12"> {/* Single row layout on larger screens */}
          {/* Step 1 */}
          <div className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between h-[380px]"> {/* Fixed card height */}
            <div>
              <FontAwesomeIcon icon={faDownload} className="text-5xl text-[#79301A] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Step 1: Download GZDoom</h3>
              <p className="text-lg mb-4">
                Grab the latest version of GZDoom, the source port you’ll need to run Brutal Pack. Make sure you have version 4.12.2 or newer.
              </p>
            </div>
            <a
              href="https://zdoom.org/downloads"
              className="inline-block bg-[#2C4E44] text-white py-2 px-4 rounded-lg hover:bg-[#19332D] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download GZDoom
            </a>
          </div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" /> {/* White arrow with more gap, hidden on small screens */}

          {/* Step 2 */}
          <div className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between h-[380px]"> {/* Fixed card height */}
            <div>
              <FontAwesomeIcon icon={faGamepad} className="text-5xl text-[#79301A] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Step 2: Download Brutal Pack</h3>
              <p className="text-lg mb-4">
                Download the latest version of Brutal Pack. This is your core mod file to experience enhanced Doom gameplay!
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1yMbLuG2UeafjsLiogxqAeF_mvigSNKD9/view?usp=sharing"
              className="inline-block bg-[#79301A] text-white py-2 px-4 rounded-lg hover:bg-[#561E11] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brutal Pack
            </a>
          </div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" />

          {/* Step 3 */}
          <div className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between h-[380px]"> {/* Fixed card height */}
            <div>
              <FontAwesomeIcon icon={faCog} className="text-5xl text-[#79301A] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Step 3: Configure Controls</h3>
              <p className="text-lg mb-4">
                Set up your controls in GZDoom. Map keys for dashing, quick melee, and shoulder cannons for the best experience.
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <FontAwesomeIcon icon={faArrowRight} className="text-4xl text-white my-6 hidden md:block" />

          {/* Step 4 */}
          <div className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center w-full md:max-w-xs flex flex-col justify-between h-[380px]"> {/* Fixed card height */}
            <div>
              <FontAwesomeIcon icon={faKey} className="text-5xl text-[#79301A] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Step 4: Launch and Play</h3>
              <p className="text-lg mb-4">
                Launch GZDoom, select Brutal Pack from the list of mods, and dive into the ultimate Doom experience!
              </p>
            </div>
          </div>
        </div>

        {/* Discord Invitation Section */}
        <div className="bg-[#ffffff50] p-6 rounded-lg shadow-md text-center max-w-md mx-auto"> {/* Squared container */}
          <h3 className="text-3xl font-bold mb-4">Need More Help? Join Our Discord!</h3>
          <p className="text-lg mb-4">
            Connect with other players, get support, and stay updated with the latest news. We’re here to help you enjoy the game to the fullest!
          </p>
          <a
            href="https://discord.gg/Z2eE2WeWeb"
            className="flex items-center justify-center bg-[#5865F2] text-white py-2 px-4 rounded-lg hover:bg-[#404EED] transition duration-300 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xl font-bold">Join Discord</span> {/* Larger text */}
            <FontAwesomeIcon icon={faDiscord} className="ml-2 text-2xl" /> {/* Larger icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructionSection;
