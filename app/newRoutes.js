import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter} from "react-router-dom";

import Home from './Home/Home';
import Login from './Auth/components/Login';
import Signup from './Auth/components/Signup';
import Account from './Auth/components/Account';




class NewRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  isAuthenticated(){
      if(this.props.token){
        return true;
      }else{
        return false;
      }
  }
  
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

    const SkipRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.isAuthenticated() ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
          
        ) : (
          <Component {...props}/>
        )
      )}/>
    )

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <SkipRoute path="/login" component={Login} />
        <SkipRoute path="/signup" component={Signup} />
        <PrivateRoute path="/account" component={Account}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(NewRoutes));

