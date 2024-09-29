// src/components/ContactUsSection.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

// Initialize EmailJS with your Public Key
emailjs.init('VKgbSXE2tVETQDLpv');

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    emailjs
      .send(
        'BrutalPackDoom', // Service ID
        'BrutalPackDoom', // Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
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
        setError(
          'There was an issue sending your message. Please try again later.'
        );
        console.error('Error sending email:', error);
      });
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#AD5017' },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#8a3e12' },
  };

  const iconVariants = {
    hover: { scale: 1.2, color: '#AD5017' },
  };

  return (
    <section className="p-12 bg-gradient-to-b from-[#1e1e1e] via-[#2c2c2c] to-[#121212] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-5xl font-extrabold text-[#D4B693]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-xl text-[#D4B693] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Have questions or feedback? We'd love to hear from you. Reach out to us
          below.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#2c2c2c] bg-opacity-80 shadow-2xl rounded-xl p-8 max-w-3xl mx-auto"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-[#79301A] rounded-lg p-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#AD5017] transition duration-200"
              placeholder="Your Name"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#79301A] rounded-lg p-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#AD5017] transition duration-200"
              placeholder="Your Email"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <motion.input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-[#79301A] rounded-lg p-4 w-full mb-6 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#AD5017] transition duration-200"
            placeholder="Subject"
            required
            whileFocus="focus"
            variants={inputVariants}
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-[#79301A] rounded-lg p-4 w-full mb-6 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#AD5017] transition duration-200"
            rows="5"
            placeholder="Your Message"
            required
            whileFocus="focus"
            variants={inputVariants}
          ></motion.textarea>

          {/* Show loading, success, or error messages */}
          {loading ? (
            <p className="text-[#D4B693] mb-4">Sending...</p>
          ) : success ? (
            <p className="text-green-500 mb-4">Message sent successfully!</p>
          ) : error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}

          <motion.button
            type="submit"
            className="bg-[#AD5017] text-white rounded-full px-8 py-4 w-full font-semibold hover:bg-[#8a3e12] transition duration-300"
            disabled={loading}
            whileHover="hover"
            variants={buttonVariants}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-12 flex justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          <motion.a
            href="https://github.com"
            className="text-[#D4B693] text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a
            href="https://patreon.com"
            className="text-[#D4B693] text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <FontAwesomeIcon icon={faPatreon} />
          </motion.a>
          <motion.a
            href="mailto:support@brutalpack.com"
            className="text-[#D4B693] text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUsSection;
