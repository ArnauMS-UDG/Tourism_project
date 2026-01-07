import React, { useRef, useState } from 'react';
import backgroundMusic from '../assets/audio/background-music.mp3';
import iconMusicOn from '../assets/images/icon-music-on.png';
import iconMusicOff from '../assets/images/icon-music-off.png';

function MusicButton() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle between play and pause
  const handleToggle = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  // Function to display button content
  const getButtonContent = () => {
    if (musicPlaying) {
      return <><img src={iconMusicOn} alt="music on" className="icon" /> Music ON</>;
    } else {
      return <><img src={iconMusicOff} alt="music off" className="icon" /> Music OFF</>;
    }
  };

  return (
    // Button to control background music
    <>
      <audio ref={audioRef} loop src={backgroundMusic} />
      <button className="music-button" onClick={handleToggle}>
        {getButtonContent()}
      </button>
    </>
  );
}

export default MusicButton;
