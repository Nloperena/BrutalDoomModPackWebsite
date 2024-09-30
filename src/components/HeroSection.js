// src/components/HeroSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  // State to track if the video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Function to navigate to the download page
  const handleDownloadPage = () => {
    navigate('/download');
  };

  // Function to navigate to the credits page
  const handleCreditsPage = () => {
    navigate('/credits'); // Ensure this route exists in your router
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden crt-effect">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Wrapper for Blur Effect */}
        <div
          className="absolute inset-0 w-full h-full transition-filter ease"
          style={{
            filter: videoLoaded ? 'blur(0px)' : 'blur(20px)',
            transition: 'filter 8s ease',
          }}
        >
          {/* Vimeo Video Embed */}
          <iframe
            src="https://player.vimeo.com/video/1012996979?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute top-1/2 left-1/2"
            style={{
              width: '177.78vh', // 100vh * (16/9) to maintain aspect ratio
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
            }}
            title="Project 6"
            onLoad={() => setVideoLoaded(true)} // Set videoLoaded to true when iframe loads
          ></iframe>
        </div>
      </div>

      {/* Animated Gradient Overlay */}
      {!videoLoaded && (
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-animation"></div>
        </div>
      )}

      {/* Black Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Scan Lines Overlay with Fade-Out Effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ease ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transition: 'opacity 10s ease',
        }}
      >
        <div className="scan-lines"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10">
        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 crt-text">
          Brutality Awaits
        </h1>
        {/* Description */}
        <p className="text-2xl md:text-3xl mb-8 max-w-3xl crt-text">
        The gates of hell have opened, it's your turn to slam them shut. Gear up and dive headfirst into the inferno. The fight is merciless, but so are you.
        </p>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Download Button with special hover effects */}
          <button
            onClick={handleDownloadPage}
            className="bg-gradient-to-r from-[#79301A] to-[#561E11] hover:from-[#D64D1A] hover:to-[#FF2E00] text-white py-4 px-10 rounded-xl text-2xl transition duration-300 transform hover:scale-110 hover:shadow-glow crt-button focus:outline-none focus:ring-2 focus:ring-[#D4B693]"
            style={{ boxShadow: '0 0 20px rgba(255, 46, 0, 0.7)' }}
            aria-label="Download Brutal Pack"
          >
            Download Brutal Pack
          </button>

          {/* Credits Button with special hover effects */}
          <button
            onClick={handleCreditsPage}
            className="border-4 border-[#D4B693] text-white py-4 px-10 rounded-xl text-2xl transition duration-300 hover:bg-[#D4B693] hover:text-black bg-transparent hover:border-transparent transform hover:scale-110 hover:shadow-glow crt-button focus:outline-none focus:ring-2 focus:ring-[#D4B693]"
            style={{ boxShadow: '0 0 20px rgba(255, 46, 0, 0.7)' }}
            aria-label="View Credits"
          >
            Credits
          </button>
        </div>
      </div>

      {/* CSS for Gradient Animation, Scan Lines, Flicker, and CRT Effects */}
      <style jsx>{`
        /* Animated Gradient Overlay */
        .bg-gradient-animation {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7),
            rgba(192, 192, 192, 0.7)
          );
          background-size: 100% 200%;
          animation: gradientMove 3s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Shadow Glow for Buttons */
        .shadow-glow {
          box-shadow: 0 0 20px rgba(255, 46, 0, 0.7);
        }

        /* Transition for Filter */
        .transition-filter {
          transition: filter 8s ease;
        }

        /* Scan Lines Overlay */
        .scan-lines {
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.3) 0px,      /* Increased opacity */
            rgba(255, 255, 255, 0.3) 3px,      /* Adjusted spacing */
            rgba(0, 0, 0, 0.3) 3px,
            rgba(0, 0, 0, 0.3) 6px
          );
          background-size: 100% 200%;
          animation: scanLineMove 10s linear infinite, flicker 3s infinite;
        }

        /* Scan Lines Movement Animation */
        @keyframes scanLineMove {
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: 0% 100%;
          }
        }

        /* Flicker Animation */
        @keyframes flicker {
          0% {
            opacity: 1;
          }
          5% {
            opacity: 0.95;
          }
          10% {
            opacity: 1;
          }
          15% {
            opacity: 0.9;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        /* CRT Text Effect */
        .crt-text {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        /* CRT Button Effect */
        .crt-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2px);
          /* For Safari */
          -webkit-backdrop-filter: blur(2px);
        }

        /* Optional: Curved Screen Edges */
        /* Uncomment the following if you want to add slight curvature */

        /*
        .crt-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10%;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
          pointer-events: none;
        }
        */
      `}</style>
    </div>
  );
};

export default HeroSection;
