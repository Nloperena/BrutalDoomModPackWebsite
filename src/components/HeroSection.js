import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the download page
  const handleDownloadPage = () => {
    navigate('/download'); // Navigate to the download page
  };

  // Function to navigate to the contact page
  const handleContactPage = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {/* Vimeo Video Embed */}
        <iframe 
          src="https://player.vimeo.com/video/1012996979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&background=1"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          className="absolute inset-0 w-full h-full"
          style={{ 
            objectFit: 'cover',
            zIndex: -1
          }} 
          title="Project 6">
        </iframe>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Brutal Pack</h1>
        <p className="text-xl mb-6">
          Experience the ultimate DOOM mod with enhanced gameplay and stunning visuals. 
          Download now and join the chaos!
        </p>
        
        {/* Button Container */}
        <div className="flex space-x-4"> {/* Flex container with spacing between buttons */}
          {/* Download Button */}
          <button 
            onClick={handleDownloadPage} 
            className="bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Download Brutal Pack
          </button>
          
          {/* Contact Button */}
          <button 
            onClick={handleContactPage} 
            className="border-2 border-[#D4B693] text-white py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-[#D4B693] hover:text-black bg-transparent"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
