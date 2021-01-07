import React from 'react'
import { Link } from "react-router-dom";
import About from './About';
const Header = () => {
  return (
    <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <a href="/" class="scrollto"><img src="/assets/img/logo-big1.png" alt="logo" title="logo" /></a>
        </div>
        <nav className="nav-menu-container float-right">
          <ul className="nav-menu">
            <li><Link to="/" />Home</li>
            <li><Link to="/aboutus" />About us</li>
            <li><Link to="/gallery" />Service</li>
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
export default Header;