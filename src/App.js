import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import DonateSection from './components/DonateSection'; 
import AboutSection from './components/AboutSection';
import InstructionSection from './components/InstructionSection';
import FeaturesSection from './components/FeaturesSection';
import './assets/fonts.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InstructionSection />
                <FeaturesSection />
                <DonateSection /> {/* Added DonateSection to the home page */}
                <ContactUsSection />
              </>
            }
          />

          {/* About Page Route */}
          <Route
            path="/about"
            element={
              <>
                <AboutSection />
              </>
            }
          />

          {/* Contact Page Route */}
          <Route
            path="/contact"
            element={
              <>
                <ContactUsSection />
              </>
            }
          />

          {/* Download Page Route */}
          <Route
            path="/download"
            element={
              <InstructionSection />
            }
          />

          {/* Support Page Route */}
          <Route
            path="/support"
            element={
              <DonateSection />
            }
          />

          {/* Donate Page Route */}
          <Route
            path="/donate"
            element={
              <div className="p-8 text-center">
                <h2 className="text-4xl font-bold mb-4 text-[#D4B693]">Donate to Support</h2>
                <p className="text-lg text-[#AD5017] mb-8">Your donations help us continue developing and improving Brutal Pack. If you enjoy our work, please consider supporting us.</p>
                <DonateSection /> {/* Replace this with your DonateSection component */}
              </div>
            }
          />

          {/* 404 Page Route */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-2xl text-[#AD5017]">
                404 Page Not Found
              </div>
            }
          />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
