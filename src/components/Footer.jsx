import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://facebook.com" className="text-white hover:text-pink-500">
            <i className="fab fa-facebook-f text-3xl"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-pink-500">
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500">
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a href="https://youtube.com" className="text-white hover:text-pink-500">
            <i className="fab fa-youtube text-3xl"></i>
          </a>
        </div>

        {/* Links Section */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="/" className="text-sm font-[Press Start 2P] hover:text-pink-500">
            Home
          </a>
          <a href="/about" className="text-sm font-[Press Start 2P] hover:text-pink-500">
            About
          </a>
          <a href="/contact" className="text-sm font-[Press Start 2P] hover:text-pink-500">
            Contact
          </a>
          <a href="/privacy" className="text-sm font-[Press Start 2P] hover:text-pink-500">
            Privacy Policy
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm font-[Press Start 2P] text-pink-200">
          © 2024 Synthwave Shop - All Rights Reserved
        </p>

        {/* Neon Line */}
        <div className="h-1 mt-6 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-500"></div>
      </div>
    </footer>
  );
};

export default Footer;
