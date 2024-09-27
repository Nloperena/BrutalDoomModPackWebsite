import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/DoomCoffee.png'; // Adjust the path if needed

const DonateSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    amount: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardName: '',
  });

  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation details:', formData);
  };

  return (
    <div 
      className="w-full min-h-screen p-8 flex justify-center items-center" 
      style={{ 
        background: 'linear-gradient(to bottom, #2C4E44, #79301A)', // Updated gradient background
      }}
    >
      {/* Donation Section Container */}
      <motion.div
        className="relative w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl" // Perspective added
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.9), 0 6px 6px rgba(0, 0, 0, 0.5)',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state when container is hovered
        onMouseLeave={() => setIsHovered(false)} // Reset hover state when container is not hovered
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Donation Form Container with Animation */}
        <motion.div
          className={`relative w-2/3 lg:w-1/2 bg-gray-800 bg-opacity-70 p-6 lg:p-10 rounded-r-lg z-10 backdrop-blur-md form-container ${isHovered ? 'border-animation' : ''}`} // Add border animation class on hover
          style={{
            backdropFilter: 'blur(10px)',
            transition: 'all 0.5s ease',
            boxShadow: isHovered
              ? '0 0 20px rgba(211, 180, 147, 0.8), 0 0 10px rgba(211, 180, 147, 0.5)' // Light border effect when expanded
              : 'none',
            border: isHovered ? '2px solid rgba(211, 180, 147, 0.8)' : 'none', // Border visible on hover
          }}
          initial={{ width: '40%', opacity: 0.6 }}
          animate={{
            width: isHovered ? '100%' : '40%', // Adjust width based on hover state
            opacity: isHovered ? 0.85 : 0.6, // Adjust opacity based on hover state
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.3 }}
          >
            Help Us Keep the Lights On
          </motion.h2>
          <p className="mb-6 text-white">
            Your support helps us continue developing and improving Brutal Pack. If you're happy with our work, consider making a donation to keep the updates coming!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="John Doe"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="email@example.com"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="(123) 456-7890"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="Your message or feedback..."
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Donation Amount ($)</label>
              <input 
                type="number" 
                name="amount" 
                value={formData.amount} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="50"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Card Number</label>
              <input 
                type="text" 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="1234 5678 9101 1121"
                required 
              />
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <label className="block text-sm font-semibold mb-1 text-white">Expiration Date</label>
                <input 
                  type="text" 
                  name="expirationDate" 
                  value={formData.expirationDate} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                  placeholder="MM/YY"
                  required 
                />
              </div>
              <div className="w-1/2 px-2">
                <label className="block text-sm font-semibold mb-1 text-white">CVV</label>
                <input 
                  type="text" 
                  name="cvv" 
                  value={formData.cvv} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                  placeholder="123"
                  required 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Name on Card</label>
              <input 
                type="text" 
                name="cardName" 
                value={formData.cardName} 
                onChange={handleChange} 
                className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
                placeholder="John Doe"
                required 
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-6 rounded-lg text-lg transition duration-300"
              >
                Donate Now
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DonateSection;
