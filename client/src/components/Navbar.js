import React, { } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header float-right" id="header">
            <div className="container">
                <div className="logo pull-left" id="logo">
                    <a href="/" className="scrollto float-left"><img src="assets/img/logo-big1.png" alt="logo" title="" /></a>
                </div>
                <nav className="nav-menu-container float-right">
                    <ul className="nav-menu">
                        <li><Link to="/" />Home</li>
                        <li><Link to="/aboutus"/>About us</li>
                        <li><Link to="/supporters" />Supporters</li>
                        <li><Link to="/contact" />Contact</li>
                        <li><Link to="/sign in" />sign in</li>
                        <li><Link to="/sign out" />sign out</li>
                        <li className="buy-tickets"><a href="#buy-tickets">Create Goal</a></li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Navbar;


