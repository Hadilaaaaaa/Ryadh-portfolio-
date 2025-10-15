
import React, { useRef, useEffect } from 'react';
import './MobileMockup.css';
import Video from '../../video/video.mp4'
const MobileMockup = () => {
  const videoRef = useRef(null);
  
  const videoSrc = Video;

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch((err) => console.error('Playback failed:', err));
      }
    };

    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, [videoSrc]);

  const handleError = () => {
    console.error('Video failed to load. Check the URL.');
  };

  return (
    <div className="mockup-container">
      <div className="phone-container">
        <div className="phone">
          <div className="bezel">
            <div className="notch"></div>
          </div>
          
          <div className="screen">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                className="video"
                controls
                width="100%"
                height="100%"
                playsInline
                muted
                loop
                onError={handleError}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="placeholder">
                <p>No video source provided.</p>
              </div>
            )}
          </div>
          
          <div className="bottom-bezel"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;