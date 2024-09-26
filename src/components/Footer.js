import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#4D0D0A] text-[#D4B693] p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-[#D4B693] mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub: <a href="https://github.com" className="hover:text-white">Brutal Pack</a>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faPatreon} className="mr-2" />
              Support Us: <a href="https://patreon.com" className="hover:text-white">Patreon</a>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#D4B693] mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="/download" className="hover:text-white">Download</a>
            </li>
            <li className="mb-2">
              <a href="/support" className="hover:text-white">Support</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-[#D4B693]">
        © {new Date().getFullYear()} Brutal Pack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
