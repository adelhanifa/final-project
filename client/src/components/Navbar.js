import React from 'react';
import { Link as SLink } from 'react-scroll'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className="header float-right" id="header">          
            <nav className="navbar navbar-expand-lg ">
                <a href="/" className="scrollto float-left ">
                    <img className=" mylogo" src="assets/img/logo/right-red_white.png" alt="logo" title="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-light">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </span>
                </button>
               
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="nav-menu navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><SLink to="about" offset={-70} smooth={true}>About us</SLink></li>
                        <li><SLink to="speakers" offset={-70} smooth={true}>Our Team</SLink></li>
                        <li><SLink to="contact" offset={-70} smooth={true}>Contact</SLink></li>
                        <li><Link to="/user/profile">profile</Link></li>
                        <li><Link to="/login/register">login/register</Link></li>
                        <li><Link to="/sign out">sign out</Link></li>
                        <li className="buy-tickets"><a href="/">Create Goal</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default NavBar;


