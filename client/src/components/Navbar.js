import React from 'react';
import { Link as SLink } from 'react-scroll'
import { Link } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
// import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <header className="header float-right" id="header">
            {/* <Navbar  expand="lg">
                <div className="container">
                <Navbar.Brand href="#home">
                    <div className="logo pull-left" id="logo">
                        <a href="/" className="scrollto float-left"><img src="assets/img/logo/text right- red white.png" alt="logo" title="" /></a>
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
            </Navbar> */}

            <nav className="navbar navbar-expand-lg ">
                <a href="/" className="scrollto float-left ">
                    <img className=" mylogo" src="assets/img/logo/right-red_white.png" alt="logo" title="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon navbar-light"  >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </span>
                </button>
               
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="nav-menu navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><SLink to="about" offset={-70} smooth={true}>About us</SLink></li>
                        <li><SLink to="speakers" offset={-70} smooth={true}>Our Team</SLink></li>
                        <li><SLink to="contact" offset={-70} smooth={true}>Contact</SLink></li>
                        <li><Link to="/login/register">login/register</Link></li>
                        <li><Link to="/sign out" >sign out</Link></li>
                        <li className="buy-tickets"><a href="#buy-tickets">Create Goal</a></li>
                    </ul>
                </div>
            </nav>

            

            {/* <div className="container">

                <a href="/" className="scrollto float-left ">
                    <img className=" mylogo" src="assets/img/logo/right-red_white.png" alt="logo" title="" />
                </a>
                
                <nav className="nav-menu-container float-right" id="navbarNav">
                    <ul className="nav-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><SLink to="about" offset={-70} smooth={true}>About us</SLink></li>
                        <li><SLink to="speakers" offset={-70} smooth={true}>Our Team</SLink></li>
                        <li><SLink to="contact" offset={-70} smooth={true}>Contact</SLink></li>
                        <li><Link to="/login/register">login/register</Link></li>
                        <li><Link to="/sign out" >sign out</Link></li>
                        <li className="buy-tickets"><a href="#buy-tickets">Create Goal</a></li>
                    </ul>
                </nav>

            </div> */}
        </header>

    )
}

export default NavBar;


