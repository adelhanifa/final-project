import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Header from './Header';
const IntroPage = () => {
    let d = new Date();
    return (

        <section id="intro">
           <Navbar/>
            <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                <h1 className="mb-4 pb-0">Your Platform <br /><span>sharing your goals </span> with others </h1>
                <p className="mb-4 pb-0">{d.toLocaleString('en-GB', { timeZone: 'UTC' })}, Germany</p>
                <a href="https://www.youtube.com/watch?v=8cCiqbSJ9fg" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                <Link to="/signup" className="about-btn scrollto">Get Started</Link>
            </div>
        </section>

    )
}

export default IntroPage;
