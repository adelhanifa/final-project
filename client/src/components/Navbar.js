import React, { } from 'react';
import { Link } from 'react-router-dom';
import About from './About';

const Navbar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo pull-left">
                    <a href="index.html" className="scrollto"><img src="assets/img/logo-big1.png" alt="logo" title="" /></a>
                    <nav className="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="index.html">Home</a></li>
                            <li><Link to="/about" component={About} /></li>
                            <li><Link to="/" />Home</li>
                            <li><Link to="/venue" />About us</li>
                            <li><Link to="/gallery" />Service</li>
                            <li><Link to="/supporters" />Supporters</li>
                            <li><Link to="/contact" />Contact</li>
                            <li><Link to="/sign in" />sign in</li>
                            <li><Link to="/sign out" />sign out</li>
                            <li className="buy-tickets"><a href="#buy-tickets">Create Goal</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )

}

export default Navbar;


