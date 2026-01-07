import React from 'react';
import promoVideo from '../assets/videos/promo.mp4';
import iconVideo from '../assets/images/icon-video.png';

function VideoSection() {
  return (
    // Promotional video section
    <section className="video">
      <h2><img src={iconVideo} alt="video" className="icon" /> Discover Figueres</h2>
      <div className="video-container">
        <video controls width="800" src={promoVideo}>
          Your browser does not support videos.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
