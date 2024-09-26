import React from 'react';

const HeroSection = () => {
  // Function to handle the download
  const handleDownload = () => {
    // Use the URL of the zip file in the public folder
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/BRUTAL_PACK_V10_10.0b.zip`;
    link.download = 'BRUTAL_PACK_V10_10.0b.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };

  return (
    <div className="relative w-full overflow-hidden"> {/* Remove fixed height */}
      {/* Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        {/* Vimeo Video Embed */}
        <iframe 
          src="https://player.vimeo.com/video/1012996979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&background=1"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          className="absolute inset-0 w-full h-full" // Use absolute positioning
          style={{ 
            objectFit: 'cover', // Cover the entire container
            zIndex: -1 // Ensure it stays behind other content
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
        <button 
          onClick={handleDownload} // Trigger the download on click
          className="bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Download Brutal Pack
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
