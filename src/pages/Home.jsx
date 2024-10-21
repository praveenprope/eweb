import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MusicAndMedia from './MusicAndMedia ';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Clothing', description: 'Retro clothing for synthwave lovers' },
    { name: 'Electronics', description: 'Retro-styled electronics and gadgets' },
    { name: 'Accessories', description: 'Add-on accessories for synthwave fashion' },
    { name: 'Footwear', description: 'Stylish shoes to complete your retro look' },
    { name: 'Home Decor', description: 'Synthwave-inspired home accessories' },
    { name: 'Music & Media', description: 'Synthwave albums and retro media' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-blue-500 min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-6xl font-bold font-[Press Start 2P] text-yellow-300">
          Welcome to the Synthwave Shop
        </h1>
        <p className="mt-6 text-lg font-[Press Start 2P] text-pink-200">
          A Retro E-Commerce Experience
        </p>
        <Link
          to="/products"
          className="mt-10 px-6 py-3 bg-pink-500 text-white text-lg font-bold font-[Press Start 2P] border-4 border-yellow-300 hover:bg-yellow-300 hover:text-pink-500 transition-all"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-[Press Start 2P] text-yellow-300 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/200"
                alt="Product 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                Retro Product 1
              </h3>
              <p className="text-lg text-pink-200">$29.99</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/200"
                alt="Product 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                Retro Product 2
              </h3>
              <p className="text-lg text-pink-200">$39.99</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/200"
                alt="Product 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                Retro Product 3
              </h3>
              <p className="text-lg text-pink-200">$49.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-[Press Start 2P] text-yellow-300 mb-8">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="New Arrival 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                New Arrival 1
              </h3>
              <p className="text-lg text-pink-200">$19.99</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="New Arrival 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                New Arrival 2
              </h3>
              <p className="text-lg text-pink-200">$24.99</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="New Arrival 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                New Arrival 3
              </h3>
              <p className="text-lg text-pink-200">$34.99</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="New Arrival 4"
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold font-[Press Start 2P] text-pink-300">
                New Arrival 4
              </h3>
              <p className="text-lg text-pink-200">$44.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-[Press Start 2P] text-yellow-300 mb-8">
            Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.name === 'Music & Media' ? '/music-and-media' : `/categories/${category.name.toLowerCase()}`} // Link to Music & Media page
                className="bg-gray-800 p-8 rounded-lg shadow-lg cursor-pointer hover:bg-pink-500 transition-transform transform hover:-translate-y-2"
                onClick={() => handleCategoryClick(category.name)}
              >
                <h3 className="text-3xl font-bold font-[Press Start 2P] text-yellow-300">
                  {category.name}
                </h3>
                <p className="text-lg text-pink-200 mt-4">{category.description}</p>
              </Link>
            ))}
          </div>
          {selectedCategory && (
            <div className="mt-10">
              <p className="text-2xl font-[Press Start 2P] text-pink-200">
                You selected: {selectedCategory}
              </p>
              <Link
                to={`/products/${selectedCategory.toLowerCase()}`}
                className="mt-4 px-4 py-2 bg-yellow-300 text-pink-500 font-[Press Start 2P] text-lg border-4 border-pink-500 hover:bg-pink-500 hover:text-yellow-300 transition-all"
              >
                Explore {selectedCategory} Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-center">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" className="text-white hover:text-pink-500">
            <i className="fas fa-facebook text-2xl"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-pink-500">
            <i className="fas fa-twitter text-2xl"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500">
            <i className="fas fa-instagram text-2xl"></i>
          </a>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Synthwave Shop. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
