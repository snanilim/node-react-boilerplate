import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from "react-router-dom";
import { logout } from "../Auth/authAction";


import "./header.css";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.dispatch(logout(this.props));
    }    
  render() {
    const rightNav = this.props.token ? (
        <nav className="nav nav-masthead justify-content-center">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink to="/account" activeClassName="active" className="nav-link">Account</NavLink>
            <a href="#" className="nav-link" onClick={this.handleLogout.bind(this)}>Logout</a>
        </nav>
    ) : (
        <nav className="nav nav-masthead justify-content-center">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>
            <NavLink to="/signup" activeClassName="active" className="nav-link">Sign Up</NavLink>
        </nav>
    )
    return (
        <header className="masthead mb-auto">
        <div className="inner">
        <a className=" masthead-brand navbar-brand" href="#">
            <img src="/img/logo.png" width="45" alt="" />
        </a>
        {rightNav}

        </div>
        </header>

    );
  }
}

const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
      user: state.auth.user
    };
  };

  export default withRouter(connect(mapStateToProps)(Header));
