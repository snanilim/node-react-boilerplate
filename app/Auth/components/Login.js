import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../authAction';
import { facebookLogin, twitterLogin, googleLogin, vkLogin, githubLogin } from '../oauthAction';
import Messages from '../../Others/Messages';

import '../auth.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password, this.props));
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  handleTwitter() {
    this.props.dispatch(twitterLogin())
  }

  handleGoogle() {
    this.props.dispatch(googleLogin())
  }

  handleVk() {
    this.props.dispatch(vkLogin())
  }

  handleGithub() {
    this.props.dispatch(githubLogin())
  }

  render() {
    return (
      <div className="login-container container">
        <div className="card" style={{padding: '30px'}}>
          <div className="card-body">
            <Messages messages={this.props.messages}/>
            <form onSubmit={this.handleLogin.bind(this)}>
              <p className="h2 text-center">Log In</p>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email" autoFocus className="form-control form-control-lg" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Password" className="form-control form-control-lg" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              
              <button type="submit" className="btn btn-success btn-block btn-lg">Log in</button>

              <div className="form-group text-center"><Link to="/forgot"><small>Forgot your password?</small></Link></div>
            </form>
            <div className="hr-title text-center"><span>or</span></div>
            <div style={{width: '376px', margin:'0 auto'}} className="btn-group btn-toolbar text-center">
              <button onClick={this.handleFacebook.bind(this)} className="btn btn-facebook">Sign in with Facebook</button>
              <button onClick={this.handleGoogle.bind(this)} className="btn btn-google">Sign in with Google</button>
            </div>
          </div>
        </div>
        <p className="text-center mastfoot">
        <small>Don't have an account?</small> <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Login);
