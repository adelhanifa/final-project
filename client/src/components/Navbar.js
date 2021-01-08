import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="logo pull-left" id="logo">
                    <a href="/" className="scrollto"><img src="assets/img/logo-big1.png" alt="logo" title="logo" /></a>
                </div>
                
                <nav className="nav-menu-container">
                    <ul className="nav-menu">
                        <li><Link to="/" className="menu-active"/>Home</li>
                        <li><Link to="/aboutus"/>About us</li>
                        <li><Link to="/teamworker"/>Our Team</li>
                        <li><Link to="/contact" />Contact</li>
                        <li><Link to="/login/register" />login/register</li>
                        <li><Link to="/sign out" />sign out</li>
                        <li className="buy-tickets"><a href="/create/goal">Create Goal</a></li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Navbar;


