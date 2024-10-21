const MusicAndMedia = ({ setCurrentTrack }) => {
    const musicProducts = [
      { id: 1, title: 'Synthwave Album 1', price: 19.99, image: 'https://via.placeholder.com/150', audio: '/audio/track1.mp3' },
      { id: 2, title: 'Synthwave Album 2', price: 24.99, image: 'https://via.placeholder.com/150', audio: '/audio/track2.mp3' },
      { id: 3, title: 'Synthwave Album 3', price: 29.99, image: 'https://via.placeholder.com/150', audio: '/audio/track3.mp3' },
      // Add more products as needed...
    ];
  
    const handlePlay = (audio) => {
      setCurrentTrack(audio);
    };
  
    return (
      <div className="bg-gray-900 min-h-screen text-white p-10">
        <h1 className="text-4xl font-bold text-yellow-300 mb-6">Music & Media</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {musicProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <img src={product.image} alt={product.title} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pink-300">{product.title}</h3>
              <p className="text-lg text-pink-200">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handlePlay(product.audio)} 
                className="mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-yellow-300 hover:text-pink-500 transition-all"
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MusicAndMedia;
  