import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicAndMedia from './pages/MusicAndMedia ';
import FooterMusicPlayer from './components/FooterMusicPlayer'; // Import FooterMusicPlayer

function App() {
  const [currentTrack, setCurrentTrack] = useState(null); // Track state
  const musicProducts = [
    { id: 1, title: 'Synthwave Album 1', price: 19.99, image: 'https://via.placeholder.com/150', audio: '/audio/track1.mp3' },
    { id: 2, title: 'Synthwave Album 2', price: 24.99, image: 'https://via.placeholder.com/150', audio: '/audio/track2.mp3' },
    { id: 3, title: 'Synthwave Album 3', price: 29.99, image: 'https://via.placeholder.com/150', audio: '/audio/track3.mp3' },
    // Add more products as needed
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/music-and-media" 
          element={
            <MusicAndMedia 
              setCurrentTrack={setCurrentTrack} 
              musicProducts={musicProducts} // Pass musicProducts to MusicAndMedia
            />
          } 
        />
        {/* Add other routes here */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {currentTrack && ( // Conditionally render the FooterMusicPlayer
        <FooterMusicPlayer 
          currentTrack={currentTrack} 
          setCurrentTrack={setCurrentTrack} 
          musicProducts={musicProducts} // Pass musicProducts to FooterMusicPlayer
        />
      )}
      <Footer />
    </Router>
  );
}

export default App;
