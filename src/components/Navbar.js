import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.id !== 'menu-button'
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-[#4D0D0A] text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Brutal Pack
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            id="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" label="Home" currentPath={location.pathname} />
          <NavLink to="/credits" label="Credits" currentPath={location.pathname} />
          <NavLink to="/download" label="Download" currentPath={location.pathname} />
          <NavLink to="/support" label="Support" currentPath={location.pathname} />
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-2 bg-[#4D0D0A] shadow-lg rounded-md"
        >
          <div className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-[#D4B693]' : ''
              } hover:text-[#D4B693]`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/credits"
              className={`${
                location.pathname === '/credits' ? 'text-[#D4B693]' : ''
              } hover:text-[#D4B693]`}
              onClick={() => setMenuOpen(false)}
            >
              Credits
            </Link>
            <Link
              to="/download"
              className={`${
                location.pathname === '/download' ? 'text-[#D4B693]' : ''
              } hover:text-[#D4B693]`}
              onClick={() => setMenuOpen(false)}
            >
              Download
            </Link>
            <Link
              to="/support"
              className={`${
                location.pathname === '/support' ? 'text-[#D4B693]' : ''
              } hover:text-[#D4B693]`}
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink component for desktop menu
function NavLink({ to, label, currentPath }) {
  return (
    <Link
      to={to}
      className={`hover:text-[#D4B693] ${
        currentPath === to ? 'text-[#D4B693]' : ''
      }`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
