import React from 'react';
import goalVideo from "./goal-video.mp4";

const VideoGoal = () => {
  return (
    <video
      autoPlay
      muted loop
      style={{
          left: "5%",
          top: "5%",
          width: "100%",
          objectFit: "cover",
          zIndex: "-3",
      }}>
      <source src={goalVideo} type="video/mp4"></source>
    </video>)
}

export default VideoGoal;