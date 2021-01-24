import React, {useState} from 'react';
import goalVideo from "./goal-video.mp4";
import {Modal, Button} from "react-bootstrap"
const VideoGoal = ({show}) => {
  const [showV, setShowV] = useState(false);
  setShowV(show)
  
  const handleClose = () => setShowV(false);
  // const handleShow = () => setShowV(true);
  return (
<>
    <Modal show={showV} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
    </video>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>



  
    </>
    )
}

export default VideoGoal;