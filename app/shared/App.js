import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import "./App.css";

function isAuthenticated(){
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
    this.state = { 

     };
  }

  componentDidMount() {
    console.log(this.props.location)
  
  }

  
  render() {
    // console.log(window.location.href);
    return (
      <Switch>

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
        
        }
      </Switch>
    );
  }
}

export default App;
