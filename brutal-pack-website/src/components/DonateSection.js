// src/components/DonateSection.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import webimg from '../assets/webimg.jpg'; // Make sure this path is correct

// Load your Stripe public key
const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

// Custom styling for the Stripe CardElement
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const DonateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Here, you would typically send the email, phone, and message to your backend.

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email: email,
        phone: phone,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      alert('Donation successful!'); // You should replace this with actual backend integration.
      // Send paymentMethod.id and other details to your backend for further processing.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 bg-[#f6f6f6] p-8 rounded-lg shadow-md w-full">
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-[#4D0D0A]">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-[#79301A] rounded-lg p-2 w-full"
          placeholder="Your email"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 text-[#4D0D0A]">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border border-[#79301A] rounded-lg p-2 w-full"
          placeholder="Your phone number"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-[#4D0D0A]">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-[#79301A] rounded-lg p-2 w-full"
          rows="4"
          placeholder="Your message"
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-[#4D0D0A]">Card Details</label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      {error && <div className="text-red-500 mb-6">{error}</div>}
      <button
        type="submit"
        disabled={!stripe}
        className="mt-4 bg-[#79301A] hover:bg-[#561E11] text-white px-8 py-4 rounded-lg text-lg"
      >
        Donate Now
      </button>
    </form>
  );
};

const DonateSection = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col md:flex-row items-center justify-between p-12 space-y-12 md:space-y-0 md:space-x-12 bg-[#f9f9f9] rounded-lg shadow-lg max-w-6xl mx-auto">
        {/* Left Column - Image */}
        <div className="flex-1 flex justify-center">
          <img src={webimg} alt="Support Us" className="rounded-lg shadow-lg max-w-full h-96 object-cover" />
        </div>

        {/* Middle Column - Headline and Paragraph */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#79301A] mb-6">Help Us Keep the Lights On</h1>
          <p className="text-lg text-[#4D0D0A] mb-6">
            If you’re happy with the development, consider helping us keep our lights on. Your support allows us to continue iterating and improving this project!
          </p>
        </div>

        {/* Right Column - Donation Form */}
        <div className="flex-1">
          <DonateForm />
        </div>
      </div>
    </Elements>
  );
};

export default DonateSection;
