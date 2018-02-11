import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "../routes";
import NewRoutes from "../newRoutes";

import "./app.css";

import Header from '../Header/Header';
import Footer from '../Others/Footer';


function isAuthenticated(){
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }



  
  render() {
    return (
      <div className="container-fluid site-container d-flex h-100 p-3 mx-auto flex-column">
        <Header />

        <NewRoutes />

        <Footer />
 
{/* 
        {
          routes.map((route, i) => (
          route.isAuthenticated ? (
            <Route key={i} {...route} />
          ) : (
            <Redirect  key={i} to={{
              pathname: '/login',
              state: { }
            }}/>
          )
          
          // <Route key={i} {...route} />
        ))
        
        } */}
      </div>
    );
  }
}

export default App;
