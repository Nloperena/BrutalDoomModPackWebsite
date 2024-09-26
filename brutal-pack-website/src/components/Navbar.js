import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#4D0D0A] text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Brutal Pack
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-[#D4B693]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#D4B693]">
            About
          </Link>
          <Link to="/download" className="hover:text-[#D4B693]">
            Download
          </Link>
          <Link to="/support" className="hover:text-[#D4B693]">
            Support
          </Link>
          <Link to="/contact" className="hover:text-[#D4B693]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
