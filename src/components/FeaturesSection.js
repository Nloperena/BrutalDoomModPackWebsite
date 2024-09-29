import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBolt, faDragon } from '@fortawesome/free-solid-svg-icons';
import HeaderImage from '../assets/brutalpack-header--img.png'; // Placeholder image
import FluidGameplayGif from '../assets/Featurefgif1.gif';

function FeaturesSection() {
  return (
    <section className="features-section py-16 bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center">
            <FontAwesomeIcon icon={faGamepad} className="text-6xl text-[#AD5017] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Fluid Gameplay</h3>
            <img src={FluidGameplayGif} alt="Fluid Gameplay" className="w-full h-48 object-cover mb-4" />
            <p className="text-lg">
              Enjoy the smooth and responsive gameplay with enhanced controls and optimized performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center">
            <FontAwesomeIcon icon={faBolt} className="text-6xl text-[#AD5017] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Custom Animations</h3>
            <img src={FluidGameplayGif} alt="Custom Animations" className="w-full h-48 object-cover mb-4" />
            <p className="text-lg">
              Experience new animations for every action, providing a fresh and dynamic feel to every encounter.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-[#2c2c2c] p-6 rounded-lg text-center">
            <FontAwesomeIcon icon={faDragon} className="text-6xl text-[#AD5017] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Unique Enemy Behavior</h3>
            <img src={FluidGameplayGif} alt="Unique Enemy Behavior" className="w-full h-48 object-cover mb-4" />
            <p className="text-lg">
              Engage with enemies that react dynamically, using aggressive tactics and special abilities to challenge your skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
