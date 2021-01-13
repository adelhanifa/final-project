import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
 import { Link as SLink } from 'react-scroll'
 import { Link } from 'react-router-dom'
import axios from 'axios';

class HeaderProfile extends React.Component {

    constructor() {
        super()
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        this.state = { user: loggedInUser }
        console.log(this.state)
    }

    userSignOut = () => {
        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) {
            axios.get("/user/log-out/")
            localStorage.removeItem('loggedInUser');
            window.location = '/'
        }
    }
    render() {
        return (
            
                <header className="header" id="header">
                    <Navbar collapseOnSelect expand="lg" 
                        className="navbar navbar-expand-lg" variant="dark">
                        <Navbar.Brand href="/">
                            <img
                                alt="logo"
                                src="/assets/img/logo/right-red_white.png"
                                width="100"
                                height="30"
                                className="d-inline-block align-top mylogo"
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" id="navbarNav">
                                {/* <Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                                <ul className="nav-menu navbar-nav">
                                    <li>
                                        <NavDropdown title="Pages" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    <li> <Link to="/">Home</Link></li>
                                    <li> <SLink to="about" offset={-70} smooth={true}>About us</SLink></li>
                                    <li> <SLink to="speakers" offset={-70} smooth={true}>Our Team</SLink></li>
                                    <li> <SLink to="contact" offset={-70} smooth={true}>Contact</SLink></li>
                                    <li> <Link to="/user/profile">profile</Link></li>
                                    {this.state.user === null ?
                                        <li> <Link to="/login/register">login/register</Link></li>
                                        :
                                        <li> <Link to="" onClick={this.userSignOut} >sign out</Link></li>
                                    }
                                    <li className="buy-tickets"> <a href="/" >Create Goal</a></li>

                                </ul>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </header>
        )
    }
}

export default HeaderProfile;