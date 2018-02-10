import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './Home/Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';




class NewRoutes extends Component {
  
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  }
}

export default NewRoutes;
