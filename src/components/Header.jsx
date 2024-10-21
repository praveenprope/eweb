import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-blue-500 text-white shadow-lg border-b border-pink-500">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold font-[Press Start 2P]">E-Commerce</h1>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-xs font-semibold font-[Press Start 2P] hover:text-yellow-300 transition duration-300 ease-in-out">
            <i className="fas fa-home mr-2"></i> Home
          </Link>
          <Link to="/products" className="text-xs font-semibold font-[Press Start 2P] hover:text-yellow-300 transition duration-300 ease-in-out">
            <i className="fas fa-box mr-2"></i> Products
          </Link>
          <Link to="/about" className="text-xs font-semibold font-[Press Start 2P] hover:text-yellow-300 transition duration-300 ease-in-out">
            <i className="fas fa-info-circle mr-2"></i> About
          </Link>
          <Link to="/contact" className="text-xs font-semibold font-[Press Start 2P] hover:text-yellow-300 transition duration-300 ease-in-out">
            <i className="fas fa-envelope mr-2"></i> Contact
          </Link>
          <Link to="/cart" className="text-xs font-semibold font-[Press Start 2P] hover:text-yellow-300 transition duration-300 ease-in-out">
            <i className="fas fa-shopping-cart mr-2"></i> Cart
          </Link>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 text-gray-900 p-2 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.5 11A4.5 4.5 0 1112 6.5 4.5 4.5 0 0116.5 11z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
