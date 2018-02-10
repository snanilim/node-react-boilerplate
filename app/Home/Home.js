import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="wrapper text-center">

        <div className="container d-flex h-100 p-3 mx-auto flex-column">

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Node React Boilerplate</h1>
            <p className="lead">
              Start your next node react web app with node-react-boilerplate. It's covered with react router V4, express js, JWT && Mongodb. Just clone or download it & type on your terminal 'npm install && npm start'.
            </p>
            <p className="lead">
              <a href="https://github.com/aiaoio/node-react-boilerplate" className="btn btn-lg btn-secondary">
              Git Clone
              </a>
            </p>
          </main>

        </div>
      </div>
    );
  }
}

export default Home;
