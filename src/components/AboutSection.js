// src/components/AboutSection.js
import React from 'react';
import webimg from '../assets/webimg.jpg'; // Use the same image for now

const AboutSection = () => {
  return (
    <div className="p-12 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 flex justify-center">
            <img src={webimg} alt="About Us" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#79301A] mb-4">Our Mission</h2>
            <p className="text-lg text-[#4D0D0A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tortor ac velit fringilla venenatis.
              Maecenas malesuada, felis in ultricies ullamcorper, erat augue elementum est, sit amet malesuada metus
              eros in libero.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#79301A] mb-4">Our History</h2>
            <p className="text-lg text-[#4D0D0A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et pharetra risus. Integer aliquam nec
              purus a molestie. Ut et sollicitudin sapien. Aliquam feugiat velit ac urna aliquet, in sagittis purus
              auctor.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={webimg} alt="Our History" className="rounded-lg shadow-lg w-full h-64 object-cover md:h-80" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 flex justify-center">
            <img src={webimg} alt="Our Vision" className="rounded-lg shadow-lg w-full h-96 object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#79301A] mb-4">Our Vision</h2>
            <p className="text-lg text-[#4D0D0A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel augue lacus. Duis vulputate
              lacinia felis, et suscipit tortor accumsan at. Nunc venenatis tortor in ligula tristique, sed ullamcorper
              sapien bibendum. In id cursus felis.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#79301A] mb-4">Our Team</h2>
            <p className="text-lg text-[#4D0D0A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat tortor in leo faucibus, eget
              feugiat nisl scelerisque. Nam et ultricies arcu, ut lobortis turpis. Sed malesuada metus at efficitur
              ultricies. Quisque ut gravida eros.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={webimg} alt="Our Team" className="rounded-lg shadow-lg w-full h-72 object-cover md:h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;