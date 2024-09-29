import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBolt, faDragon } from '@fortawesome/free-solid-svg-icons';
import FluidGameplayGif from '../assets/Featurefgif1.gif';
import './features.css'; // Import custom CSS for the breathing animation

function FeaturesSection() {
  const [activeGif, setActiveGif] = useState(null); // State to track the active GIF for enlargement

  return (
    <section className="features-section py-16 bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white relative glow-animation">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div
            className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center transform transition-all duration-300 hover:shadow-[0_0_15px_#AD5017] relative cursor-pointer"
            onClick={() => setActiveGif(1)} // Set the active GIF on click
          >
            <FontAwesomeIcon icon={faGamepad} className="text-6xl text-[#AD5017] mb-4 transform transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-2">Fluid Gameplay</h3>
            <img
              src={FluidGameplayGif}
              alt="Fluid Gameplay"
              className={`w-full h-48 object-cover mb-4 rounded-lg transition-all duration-300 transform ${
                activeGif === 1 ? 'expanded-gif' : ''
              }`}
              onClick={(e) => { e.stopPropagation(); setActiveGif(null); }} // Close the expanded GIF when clicked again
            />
            <p className="text-lg transform transition-transform duration-300 hover:translate-y-1">
              Enjoy the smooth and responsive gameplay with enhanced controls and optimized performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center transform transition-all duration-300 hover:shadow-[0_0_15px_#AD5017] relative cursor-pointer"
            onClick={() => setActiveGif(2)}
          >
            <FontAwesomeIcon icon={faBolt} className="text-6xl text-[#AD5017] mb-4 transform transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-2">Custom Animations</h3>
            <img
              src={FluidGameplayGif}
              alt="Custom Animations"
              className={`w-full h-48 object-cover mb-4 rounded-lg transition-all duration-300 transform ${
                activeGif === 2 ? 'expanded-gif' : ''
              }`}
              onClick={(e) => { e.stopPropagation(); setActiveGif(null); }}
            />
            <p className="text-lg transform transition-transform duration-300 hover:translate-y-1">
              Experience new animations for every action, providing a fresh and dynamic feel to every encounter.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center transform transition-all duration-300 hover:shadow-[0_0_15px_#AD5017] relative cursor-pointer"
            onClick={() => setActiveGif(3)}
          >
            <FontAwesomeIcon icon={faDragon} className="text-6xl text-[#AD5017] mb-4 transform transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-2">Unique Enemy Behavior</h3>
            <img
              src={FluidGameplayGif}
              alt="Unique Enemy Behavior"
              className={`w-full h-48 object-cover mb-4 rounded-lg transition-all duration-300 transform ${
                activeGif === 3 ? 'expanded-gif' : ''
              }`}
              onClick={(e) => { e.stopPropagation(); setActiveGif(null); }}
            />
            <p className="text-lg transform transition-transform duration-300 hover:translate-y-1">
              Engage with enemies that react dynamically, using aggressive tactics and special abilities to challenge your skills.
            </p>
          </div>

        </div>
      </div>
      {/* Overlay Background */}
      {activeGif && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-40"
          onClick={() => setActiveGif(null)}
        />
      )}
    </section>
  );
}

export default FeaturesSection;
