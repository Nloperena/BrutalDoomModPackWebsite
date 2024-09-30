import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBolt, faDragon } from '@fortawesome/free-solid-svg-icons';
import FluidGameplayGif from '../assets/Featurefgif1.gif';
import AnimatedGameplayGif from '../assets/Featurefgif2.gif';
import EnemyGameplayGif from '../assets/Featurefgif3.gif';
import './features.css'; // Ensure this CSS file is correctly imported

function FeaturesSection() {
  return (
    <section className="features-section py-16 bg-gradient-to-b from-[#1e1e1e] to-[#121212] text-white relative glow-animation">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {/* Feature 1 */}
          <div className="feature-card bg-[#2c2c2c] rounded-lg h-full flex flex-col p-6 lg:p-8 xl:p-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] hover:shadow-[inset_0_0_20px_#AD5017] transition-shadow duration-300">
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-6xl lg:text-7xl xl:text-8xl text-[#AD5017] mb-4"
            />
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
              Fluid Gameplay
            </h3>
            <img
              src={FluidGameplayGif}
              alt="Fluid Gameplay"
              className="mb-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,1)]"
            />
            <p className="text-lg lg:text-xl xl:text-2xl mt-auto">
              Enjoy smooth and responsive gameplay with enhanced controls and
              optimized performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-[#2c2c2c] rounded-lg h-full flex flex-col p-6 lg:p-8 xl:p-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] hover:shadow-[inset_0_0_20px_#AD5017] transition-shadow duration-300">
            <FontAwesomeIcon
              icon={faBolt}
              className="text-6xl lg:text-7xl xl:text-8xl text-[#AD5017] mb-4"
            />
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
              Custom Animations
            </h3>
            <img
              src={AnimatedGameplayGif}
              alt="Custom Animations"
              className="mb-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,1)]"
            />
            <p className="text-lg lg:text-xl xl:text-2xl mt-auto">
              Experience new animations for every action, providing a fresh and
              dynamic feel to every encounter.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-[#2c2c2c] rounded-lg h-full flex flex-col p-6 lg:p-8 xl:p-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] hover:shadow-[inset_0_0_20px_#AD5017] transition-shadow duration-300">
            <FontAwesomeIcon
              icon={faDragon}
              className="text-6xl lg:text-7xl xl:text-8xl text-[#AD5017] mb-4"
            />
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
              Unique Enemy Behavior
            </h3>
            <img
              src={EnemyGameplayGif}
              alt="Unique Enemy Behavior"
              className="mb-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,1)]"
            />
            <p className="text-lg lg:text-xl xl:text-2xl mt-auto">
              Engage with enemies that react dynamically, using aggressive
              tactics and special abilities to challenge your skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
