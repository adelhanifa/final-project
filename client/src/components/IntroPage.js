import React from 'react'
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import TeamWorker from './TeamWorker';
import Footer from "./Footer";
import Contact from './Contact';
const IntroPage = () => {
    let d = new Date();
    return (
        <>
            <NavBar />
            <section id="intro">
                <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <h3 className="mb-4 pb-0">Your Platform <br /><span>The Power of Sharing <br /> Your Goals </span><br />  with others </h3>
                    <p className="mb-4 pb-0">{d.toLocaleString('en-GB', { timeZone: 'UTC' })}, Germany</p>
                    <a href="https://www.youtube.com/watch?v=8cCiqbSJ9fg" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    <Link to="/signup" className="about-btn scrollto">Get Started</Link>
                </div>
            </section>
            <main id="main">
                <AboutUs />
                <TeamWorker />
                <Contact />
            </main>
            <Footer/>
        </>

    )
}

export default IntroPage;
