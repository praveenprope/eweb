import React, { useEffect, useState } from 'react';

const FooterMusicPlayer = ({ currentTrack, setCurrentTrack, musicProducts }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null); // Create a ref for the audio element

  useEffect(() => {
    // Cleanup function to stop and reset audio on track change or unmount
    const playAudio = async () => {
      if (audioRef.current) {
        await audioRef.current.pause(); // Ensure the previous audio is paused
        audioRef.current.currentTime = 0; // Reset time to 0
      }

      if (currentTrack) {
        audioRef.current = new Audio(currentTrack);
        await audioRef.current.play()
          .then(() => {
            console.log("Playing track:", currentTrack);
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing track:", error);
          });
      }
    };

    playAudio();

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset time to 0
        console.log("Stopped track:", currentTrack);
        setIsPlaying(false); // Reset the playing state
      }
    };
  }, [currentTrack]); // Only run when currentTrack changes

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      console.log("Paused track:", currentTrack);
    } else {
      audioRef.current.play()
        .then(() => console.log("Resumed track:", currentTrack))
        .catch((error) => console.error("Error resuming track:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (musicProducts.findIndex((product) => product.audio === currentTrack) + 1) % musicProducts.length;
    setCurrentTrack(musicProducts[nextIndex].audio);
    console.log("Next track set to:", musicProducts[nextIndex].audio);
  };

  const handlePrevious = () => {
    const prevIndex = (musicProducts.findIndex((product) => product.audio === currentTrack) - 1 + musicProducts.length) % musicProducts.length;
    setCurrentTrack(musicProducts[prevIndex].audio);
    console.log("Previous track set to:", musicProducts[prevIndex].audio);
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
    </footer>
  );
};

export default FooterMusicPlayer;
