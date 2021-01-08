import React from 'react';
import { Link as SLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
<<<<<<< HEAD
        <header id="header">
=======
        <header className="header float-right" id="header">
            <Navbar  expand="lg">
                <div className="container">
                <Navbar.Brand href="#home">
                    <div className="logo pull-left" id="logo">
                        <a href="/" className="scrollto float-left"><img src="assets/img/logo-big1.png" alt="logo" title="" /></a>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                    <Nav className="mr-auto"> 
                            <Nav.Link><SLink to="intro" smooth={true}>Home</SLink></Nav.Link>
                            <Nav.Link><SLink to="about" smooth={true}>About us</SLink></Nav.Link>
                            <Nav.Link><SLink to="speakers" smooth={true}>Our Team</SLink></Nav.Link>
                            <Nav.Link><SLink to="contact" smooth={true}>Contact</SLink></Nav.Link>
                            <Nav.Link><Link to="/login/register" >login/register</Link></Nav.Link>
                            <Nav.Link><Link to="/sign out" >sign out</Link></Nav.Link>
                            <Nav.Link className="buy-tickets"><a href="#buy-tickets">Create Goal</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>

>>>>>>> 75b673020f6210b77a6d159c03b37804e2437378
            <div className="container">
                <div className="logo pull-left" id="logo">
                    <a href="/" className="scrollto"><img src="assets/img/logo-big1.png" alt="logo" title="logo" /></a>
                </div>
<<<<<<< HEAD
                
                <nav className="nav-menu-container">
                    <ul className="nav-menu">
                        <li><Link to="/" className="menu-active"/>Home</li>
                        <li><Link to="/aboutus"/>About us</li>
                        <li><Link to="/teamworker"/>Our Team</li>
                        <li><Link to="/contact" />Contact</li>
                        <li><Link to="/login/register" />login/register</li>
                        <li><Link to="/sign out" />sign out</li>
                        <li className="buy-tickets"><a href="/create/goal">Create Goal</a></li>
=======

                <nav className="nav-menu-container float-right">
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><SLink to="about" smooth={true}>About us</SLink></li>
                        <li><SLink to="speakers" smooth={true}>Our Team</SLink></li>
                        <li><SLink to="contact" smooth={true}>Contact</SLink></li>
                        <li><Link to="/login/register" >login/register</Link></li>
                        <li><Link to="/sign out" >sign out</Link></li>
                        <li className="buy-tickets"><a href="#buy-tickets">Create Goal</a></li>
>>>>>>> 75b673020f6210b77a6d159c03b37804e2437378
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default NavBar;


