// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  // Function to navigate to the download page
  const handleDownloadPage = () => {
    navigate('/download');
  };

  // Function to navigate to the contact page
  const handleContactPage = () => {
    navigate('/contact');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Vimeo Video Embed */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1012996979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-1/2 left-1/2"
            style={{
              width: '177.78vh', // 100vh * (16/9)
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
            }}
            title="Project 6"
          ></iframe>
        </div>
      </div>

      {/* Black Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          Slaying Demons Just Got Better
        </h1>
        <p className="text-2xl md:text-3xl mb-8 max-w-3xl">
          Experience the ultimate DOOM mod with enhanced gameplay and stunning
          visuals. Download now and join the chaos!
        </p>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Download Button with special hover effects */}
          <button
            onClick={handleDownloadPage}
            className="bg-gradient-to-r from-[#79301A] to-[#561E11] hover:from-[#D64D1A] hover:to-[#FF2E00] text-white py-4 px-10 rounded-xl text-2xl transition duration-300 transform hover:scale-110 hover:shadow-glow"
            style={{ boxShadow: '0 0 20px rgba(255, 46, 0, 0.7)' }}
          >
            Download Brutal Pack
          </button>

          {/* Contact Button with special hover effects */}
          <button
            onClick={handleContactPage}
            className="border-4 border-[#D4B693] text-white py-4 px-10 rounded-xl text-2xl transition duration-300 hover:bg-[#D4B693] hover:text-black bg-transparent hover:border-transparent transform hover:scale-110 hover:shadow-glow"
            style={{ boxShadow: '0 0 20px rgba(255, 46, 0, 0.7)' }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
