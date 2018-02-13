import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
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
        <div>
        <Link to="/account">Account</Link>
        <a href="#" onClick={this.handleLogout.bind(this)}>Logout</a>
        </div>
    ) : (
        <div>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
    )
    return (
        <header className="masthead mb-auto">
        <div className="inner">
        <a className=" masthead-brand navbar-brand" href="#">
            <img src="/img/logo.png" width="45" alt="" />
        </a>
            <nav className="nav nav-masthead justify-content-center">
            <Link to="/" className="nav-link">Home</Link>
            {rightNav}
            </nav>
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
