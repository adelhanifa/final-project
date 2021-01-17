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
                <Navbar collapseOnSelect expand="lg" style={{marginLeft:'50px'}}
                    className="navbar navbar-expand-lg" variant="dark">
                    <Navbar.Brand href="/" className="mx-5">
                        <img
                            alt="logo"
                            src="/assets/img/logo/right-red_white.png"
                            className="d-inline-block align-top mylogo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className="mx-5">
                        <Nav className="mr-auto " id="navbarNav">
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
                                <li> <Nav.Link as={Link} to="/">Home</Nav.Link></li>
                                <li> <Nav.Link as={SLink} to="about" offset={-70} smooth={true}>About us</Nav.Link></li>
                                <li> <Nav.Link as={SLink} to="speakers" offset={-70} smooth={true}>Our Team</Nav.Link></li>
                                <li> <Nav.Link as={SLink} to="contact" offset={-70} smooth={true}>Contact</Nav.Link></li>
                                <li> <Nav.Link as={Link} to="/user/profile">profile</Nav.Link></li>
                                {this.state.user === null ?
                                    <li> <Nav.Link as={Link} to="/login/register">login/register</Nav.Link></li>
                                    :
                                    <li> <Nav.Link as={Link} to="" onClick={this.userSignOut} >sign out</Nav.Link></li>
                                }
                                <li className="buy-tickets"> <a href="/" >Main page</a></li>

                            </ul>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </header>
        )
    }
}

export default HeaderProfile;