import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/DoomCoffee.png';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const DonateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    amount: '',
  });

  const [isHovered, setIsHovered] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
    });

    if (error) {
      console.error('[PaymentMethod Error]', error);
      // Display error to user
    } else {
      // Send paymentMethod.id and amount to your backend
      const response = await fetch('/api/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: formData.amount,
          paymentMethodId: paymentMethod.id,
        }),
      });

      const paymentResult = await response.json();

      if (paymentResult.error) {
        console.error('[PaymentIntent Error]', paymentResult.error);
        // Display error to user
      } else {
        console.log('[PaymentIntent]', paymentResult.paymentIntent);
        // Display success message, clear form, etc.
      }
    }
  };

  return (
    <div
      className="w-full min-h-screen p-8 flex justify-center items-center"
      style={{
        background: 'linear-gradient(to bottom, #2C4E44, #79301A)',
      }}
    >
      <motion.div
        className="relative w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl"
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <motion.div
          className={`relative w-2/3 lg:w-1/2 bg-gray-800 bg-opacity-70 p-6 lg:p-10 rounded-r-lg z-10 backdrop-blur-md form-container ${isHovered ? 'border-animation' : ''}`}
          style={{
            backdropFilter: 'blur(10px)',
            transition: 'all 0.5s ease',
            boxShadow: isHovered
              ? '0 0 20px rgba(211, 180, 147, 0.8), 0 0 10px rgba(211, 180, 147, 0.5)'
              : 'none',
            border: isHovered ? '2px solid rgba(211, 180, 147, 0.8)' : 'none',
          }}
          initial={{ width: '40%', opacity: 0.6 }}
          animate={{
            width: isHovered ? '100%' : '40%',
            opacity: isHovered ? 0.85 : 0.6,
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
            {/* Name Field */}
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
            {/* Email Field */}
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
            {/* Phone Field */}
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
            {/* Message Field */}
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
            {/* Amount Field */}
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
            {/* CardElement */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-white">Card Details</label>
              <div className="w-full px-3 py-2 rounded-lg bg-gray-700 bg-opacity-70 border border-gray-600">
                <CardElement
                  options={{
                    style: {
                      base: {
                        color: '#ffffff',
                        fontSize: '16px',
                        '::placeholder': {
                          color: '#a0aec0',
                        },
                      },
                      invalid: {
                        color: '#f56565',
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#79301A] hover:bg-[#561E11] text-white py-3 px-6 rounded-lg text-lg transition duration-300"
                disabled={!stripe}
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

// Wrap DonateForm with Elements provider
const DonateSection = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonateForm />
    </Elements>
  );
};

export default DonateSection;
