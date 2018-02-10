import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <footer className="mastfoot mt-auto">
            <div className="inner">
                <p>node-react-boilerplate On <a href="https://github.com/aiaoio/node-react-boilerplate"> Github</a>, by <a href="https://www.facebook.com/people/Sna-Nilim/100011138372945">SNA Nilim</a>.</p>
            </div>
        </footer>
    );
  }
}

export default Footer;
