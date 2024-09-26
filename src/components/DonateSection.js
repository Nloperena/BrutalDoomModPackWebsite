import React, { useState } from 'react';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Donation details:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Donation Section Container */}
      <div 
        className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg overflow-hidden relative" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center', // Adjust to focus on coffee
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Donation Form Container */}
        <div className="relative w-full lg:w-1/2 bg-gray-800 bg-opacity-80 p-6 lg:p-10 rounded-r-lg z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Help Us Keep the Lights On</h2>
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                  className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                  className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#D4B693]"
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
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
