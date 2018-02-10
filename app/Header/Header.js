import React, { Component } from "react";
import { Link } from "react-router-dom";



class Header extends Component {
  render() {
    return (

        <header className="masthead mb-auto">
        <div className="inner">
        <a className=" masthead-brand navbar-brand" href="#">
            <img src="/img/logo.png" width="45" alt="" />
        </a>
            <nav className="nav nav-masthead justify-content-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            </nav>
        </div>
        </header>

    );
  }
}

export default Header;
