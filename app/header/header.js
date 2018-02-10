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
            <Link to="/news" className="nav-link active">Home</Link>
            <a className="nav-link" href="#">Login</a>
            <a className="nav-link" href="#">Sign Up</a>
            </nav>
        </div>
        </header>

    );
  }
}

export default Header;
