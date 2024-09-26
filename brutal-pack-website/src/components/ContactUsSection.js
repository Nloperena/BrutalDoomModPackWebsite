import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUsSection() {
  return (
    <section className="p-8 bg-[#2C4E44]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#D4B693] mb-4">Contact Us</h2>
        <p className="text-lg text-[#D4B693] mb-8">
          Have questions or feedback? We'd love to hear from you. Reach out to us below.
        </p>
        
        <form className="bg-[#4D0D0A] shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="border border-[#79301A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border border-[#79301A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="border border-[#79301A] rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
            placeholder="Subject"
          />
          <textarea
            className="border border-[#79301A] rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#AD5017]"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="bg-[#79301A] text-white rounded-lg px-6 py-3 w-full font-semibold hover:bg-[#561E11]"
          >
            Send Message
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
