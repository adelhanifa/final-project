import React from 'react'
// import NavBar from './NavBar';
import HeaderNavbar from './HeaderNavbar'
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import TeamWorker from './TeamWorker';
import Footer from "./Footer";
import Contact from './Contact';
import youtube from "../api/youtube";
import ReactPlayer from 'react-player'

const IntroPage = () => {
    let videoSrc = youtube.get('https://www.youtube.com/watch?v=8cCiqbSJ9fg')
    console.log({ videoSrc })
    let d = new Date();
    return (
        <>
            <HeaderNavbar />

            <section id="intro">
            <div className='player-wrapper'>
            <a
                        href="https://www.youtube.com/watch?v=8cCiqbSJ9fg"
                        className="venobox play-btn mb-4"
                        data-vbtype="video"
                        data-autoplay="true">
                            <ReactPlayer
                                className='react-player fixed-bottom'
                                url= 'M_03292018202006_00000000U2940605_1_001-1.MP4'
                                width='50%'
                                height='50%'
                                controls = {true}
                            />
          </a>
        </div>




                <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <h3 className="mb-4 pb-0">Your Platform <br /><span>The Power of Sharing <br /> Your Goals </span><br />  with others </h3>
                    <p className="mb-4 pb-0">{d.toLocaleString('en-GB')}, Germany</p>
                    <a
                        href="https://www.youtube.com/watch?v=8cCiqbSJ9fg"
                        className="venobox play-btn mb-4"
                        data-vbtype="video"
                        data-autoplay="true"> </a>
                    <Link to="/login/register" className="about-btn scrollto"> Get Started</Link>
                </div>
            </section>
            <main id="main">
                <AboutUs />
                <TeamWorker />
                <Contact />
            </main>
            <Footer />
        </>

    )
}

export default IntroPage;
