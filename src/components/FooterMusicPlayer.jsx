import React, { useEffect, useState } from 'react';

const FooterMusicPlayer = ({ currentTrack, setCurrentTrack, musicProducts }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null); // Ref for the audio element

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio position

      if (currentTrack) {
        audioRef.current.src = currentTrack; // Set the new track source
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Error playing track:', error);
          });
      }
    }
    // Cleanup function to stop the audio when component unmounts or track changes
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset time to 0
        setIsPlaying(false); // Reset playing state
      }
    };
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .catch((error) => console.error('Error playing audio:', error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (musicProducts.findIndex((product) => product.audio === currentTrack) + 1) % musicProducts.length;
    setCurrentTrack(musicProducts[nextIndex].audio);
  };

  const handlePrevious = () => {
    const prevIndex = (musicProducts.findIndex((product) => product.audio === currentTrack) - 1 + musicProducts.length) % musicProducts.length;
    setCurrentTrack(musicProducts[prevIndex].audio);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button onClick={handlePrevious} className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-yellow-300 hover:text-pink-500 transition-all">Previous</button>
        <button onClick={handlePlayPause} className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-yellow-300 hover:text-pink-500 transition-all">{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNext} className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-yellow-300 hover:text-pink-500 transition-all">Next</button>
      </div>
      {currentTrack && (
        <p className="text-lg">Now playing: {musicProducts.find((product) => product.audio === currentTrack)?.title}</p>
      )}
      {/* Audio element for playback */}
      <audio ref={audioRef} />
    </footer>
  );
};

export default FooterMusicPlayer;
