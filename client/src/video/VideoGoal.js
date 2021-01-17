import React from 'react';
import goalVideo from "./goal-video.mp4";

const VideoGoal = () => {
  return (
    <video
      autoPlay
      muted loop
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '100vh',
        // width:'100%',
        marginTop:'30px',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-3'
      }}>
      <source src={goalVideo} type="video/mp4"></source>
    </video>)
}

export default VideoGoal;