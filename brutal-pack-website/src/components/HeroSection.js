// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden"> {/* Full viewport height */}
      {/* Vimeo Video Embed */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe 
            src="https://player.vimeo.com/video/1012996979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&background=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            title="Project 6">
          </iframe>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Brutal Pack</h1>
        <p className="text-xl mb-6">
          Experience the ultimate DOOM mod with enhanced gameplay and stunning visuals. 
          Download now and join the chaos!
        </p>
        <a 
          href="/download" 
          className="bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Download Brutal Pack
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
