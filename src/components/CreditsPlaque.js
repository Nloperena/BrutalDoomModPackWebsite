import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/Creditsbackground.png';

function CreditsPlaque() {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  const credits = [
    {
        name: 'Sgt_Mark_IV',
        description: `Huge thank you to him and his creation of Brutal Doom, it is the foundation of this mod, this mod would not be made possible or exist without it.`,
      },
    {
        name: 'Plimbro (N.L.)',
        description: `Creator, designer and developer of DoomBrutalPack.com`
      },
    {
      name: 'Awez',
      description: `The creation of the insanely detailed and unique blood and gore animations and sprites. Completely made from scratch and adds so much to the gameplay! Also, unique deaths for the Mancubus and Archville, these are some of the nicest animations I have ever seen, huge thank you to him!`,
    },
    {
      name: 'Wolf1366',
      description: `Beautifully made blood, gore, and unique death animations for practically all the enemies, as well as unique edits and lighting to weapons, items, and features of the mod. The heart of the enemy balancing and their unique abilities, as well as one of the longest-time main contributors to the original ideas and directions for this mod, huge thank you to him!`,
    },
    {
      name: 'BROS_ETT_311',
      description: `The code master! Perfected the Doom Eternal inspired movement for this mod. The double jumping, dashing, ledge climbing, quake movement, weapon lighting, monster spawner, map enhancement, and major fixes as well as a ton of ZScript conversions, ACS, and DECORATE-based contributions, the core of the speed, movement, and gameplay of this mod would not be possible without him! Huge thank you!`,
    },
    {
      name: 'IKDFA',
      description: `Amazing work on his creation of the original code for the shoulder equipment launchers, making them function simultaneously when firing/gameplay and work on a recharge basis, as well as the spriting/animation and code for the BFG, and the unique original HUD for this mod showing recharge meters for the equipment launchers and ammo amounts. Huge thank you to him for his awesome work!`,
    },
    {
      name: 'Skeep',
      description: `The soul of the weapon animations for this mod! Some of the smoothest and unique animations I have ever seen. Animations and unique spriting for the Pump Shotgun, Rifle, Pistol, Rocket Launcher, and many other weapons in this mod. As well as unique monster death animations and spriting for the Mancubus, Pinky, and many other enemies, huge thank you to him!`,
    },
    {
      name: 'C⛧rrot',
      description: `His beautiful creation, spriting, and animating of the new Minigun and Rifle edit as well as the Plasma Gun reload sprites/cooldown sprites. These weapons just look badass! Huge thank you to him!`,
    },
    {
      name: 'TSF (Tesefy)',
      description: `Absolutely amazing original sprite work for the reworked vanilla Pistol to all kinds of weapon sprites and enemy deaths.`,
    },
    {
      name: 'Heretic',
      description: `Incredible sound layering and work. They have an insane ability to match the perfect sound for any weapon and item. Full credits for SSG fire sounds in current 9.0+ builds.`,
    },
    {
      name: 'Xamp',
      description: `Huge thank you to him! A long-time contributor to older versions of this mod, and his awesome Plasma Gun death animations for many enemies.`,
    },
    {
      name: 'FalcN',
      description: `Huge thank you to him for his awesome ideas! As well as his future plans to create a unique map pack for this mod.`,
    },
    {
      name: 'Dox778',
      description: `A massive inspiration to this mod! Beautifully made Plasma Gun reload animation, brightmaps for enemies and effects for weapons such as the smoke on the SSG, as well as a ton of code and work towards the Zombie guys, Shotgun guys' unique movements. Huge thank you to him!`,
    },
    {
      name: 'BerserkerNoir',
      description: `Huge thank you to him for his optimizations and edits of sprites, as well as his personal contributions/recommendations to the mod!`,
    },
    {
      name: 'Kamil',
      description: `Huge thank you for their contributions towards optimizing sprites and organizing this mod, as well as ideas!`,
    },
    {
      name: 'Kinnerokhn',
      description: `Huge thank you to him! A long-time contributor, helped a ton with organizing and moderating this server in its early stages, as well as edits for weapons and many ideas towards this mod.`,
    },
    {
      name: 'JMartinez2098',
      description: `Huge thank you to them! Helped a ton with organizing this server in its early stages and moderation of this server, as well as contributions towards mod organization.`,
    },
    {
      name: 'MajesticKaled77',
      description: `Huge thank you to him! Helped a ton with organizing and moderating this server in its early stages!`,
    },
    {
      name: 'IDDQD_1337',
      description: `Huge thank you to him! Helped a ton with adding the map enhancement system to this mod as well as the improved code for the Plasma Gun. Also, their contributions for weapon animations and spriting, awesome work!`,
    },
    {
      name: 'Secret',
      description: `Huge thank you to him for his personal contributions to this mod! Animated the bullet feeding into the Chaingun. His spriting and animating of a future SSG sprite as well as ideas for this mod.`,
    },
    {
      name: 'Metalman',
      description: `Huge thank you for his Rifle sprite edit he did for us! As well as his personal contributions/recommendations to the mod.`,
    },
    {
      name: 'sniffles studios',
      description: `Huge thank you for their ideas and contributions to this mod!`,
    },
    {
      name: 'Dark.Knight',
      description: `Huge thank you for their ideas and contributions to this mod!`,
    },
    {
      name: 'Quaker540',
      description: `Huge thank you to him! Although I haven't heard from him in a long time, this mod was completely based off and developed from his submod of Brutal Doom, huge inspiration and helped me a lot in getting familiar with modding Doom.`,
    }
  ];
  

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setBgImageLoaded(true);
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Background Image Container */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
          bgImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Black Background as Fallback */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto p-8 bg-black bg-opacity-80 border-4 border-red-800 rounded-lg shadow-lg relative z-10">
          <h1 className="text-center text-6xl font-extrabold text-red-600 mb-8 uppercase">
            Project Credits
          </h1>
          <p className="text-center text-2xl text-yellow-200 mb-12">
            An early detailed credits list specifically for this mod. I'll be updating this
            regularly just in case I may have missed anything or anyone. Please give these
            awesome people a massive thank you for their amazing work on this mod! Wouldn't
            be possible without them.
          </p>
          <div className="space-y-8">
            {credits.map((credit, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-60 p-6 rounded-md shadow-[inset_0_0_10px_rgba(0,0,0,1)] hover:shadow-[inset_0_0_20px_#AD5017] transform hover:scale-105 transition duration-300"
              >
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">{credit.name}</h2>
                <p className="text-lg text-gray-200 whitespace-pre-line">{credit.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-2xl text-yellow-200 mt-12">
            If I missed anyone or missed something, please let me know and I will add to this
            list! Thank you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditsPlaque;
