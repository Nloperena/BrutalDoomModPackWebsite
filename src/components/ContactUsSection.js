import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Initialize EmailJS with your Public Key
emailjs.init("VKgbSXE2tVETQDLpv");

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    // Log form data to verify fields
    console.log("Form Data:", formData);

    emailjs.send(
      'BrutalPackDoom', // Service ID
      'BrutalPackDoom', // Template ID
      {
        user_name: formData.name, // Maps to {{user_name}} in your template
        user_email: formData.email, // Maps to {{user_email}} in your template
        subject: formData.subject, // Optional, if used in template
        message: formData.message // Maps to {{message}} in your template
      },
      'VKgbSXE2tVETQDLpv' // Public Key
    )
    .then((response) => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      console.log('Email sent successfully:', response.status, response.text);
    })
    .catch((error) => {
      setLoading(false);
      setError('There was an issue sending your message. Please try again later.');
      console.error('Error sending email:', error);
      console.error('Error details:', error.text); // Log specific error details
    });
  };

  return (
    <section className="p-8 bg-[#2C4E44]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#D4B693] mb-4">Contact Us</h2>
        <p className="text-lg text-[#D4B693] mb-8">
          Have questions or feedback? We'd love to hear from you. Reach out to us below.
        </p>

        <form onSubmit={handleSubmit} className="bg-[#4D0D0A] shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#79301A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#79301A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-[#79301A] rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-[#79301A] rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          {/* Show loading, success, or error messages */}
          {loading ? (
            <p className="text-[#D4B693] mb-4">Sending...</p>
          ) : success ? (
            <p className="text-green-500 mb-4">Message sent successfully!</p>
          ) : error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="bg-[#79301A] text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-[#561E11]"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com" className="text-[#D4B693] text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://patreon.com" className="text-[#D4B693] text-2xl">
            <FontAwesomeIcon icon={faPatreon} />
          </a>
          <a href="mailto:support@brutalpack.com" className="text-[#D4B693] text-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
