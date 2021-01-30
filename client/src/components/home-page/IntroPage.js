import React, { useState } from "react";
import HeaderNavbar from "../HeaderNavbar.jsx";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import TeamWorker from "./TeamWorker";
import Footer from "./Footer";
import Contact from "./Contact";
import VideoGoal from "../../video/VideoGoal";
import { Modal } from "react-bootstrap";
const IntroPage = () => {
  const [showVideo, setShowVedio] = useState(false);
  let d = new Date();

  const onClickFunc = () => {
    setShowVedio(true);
    console.log({ showVideo });
  };
  const handleClose = () => setShowVedio(false);
  return (
    <>
      <HeaderNavbar />

      <section id="intro">
        <Modal
          onHide={handleClose}
          show={showVideo}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="bg-dark">
           <VideoGoal />
          </Modal.Body>
        </Modal>

        {!showVideo && (
          <div
            className="intro-container"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="mb-4 pb-0">
              Your Platform <br />
              <span>
                The Power of Sharing <br /> Your Goals{" "}
              </span>
              <br /> with others{" "}
            </h3>
            <p className="mb-4 pb-0">{d.toLocaleString("en-GB")}, Germany</p>
            <button
              onClick={onClickFunc}
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></button>
            <Link to="/login/register" className="about-btn scrollto">
              {" "}
              Get Started
            </Link>
          </div>
        )}
      </section>
      <main id="main">
        <AboutUs />
        <TeamWorker />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IntroPage;
