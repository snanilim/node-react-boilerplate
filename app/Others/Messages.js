import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class Messages extends React.Component {

  render() {
    return this.props.messages.success ? (

      <div role="alert" className="animated bounceInDown message alert alert-success">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>{this.props.dispatch({type: "CLEAR_MESSAGES"})}}>
          <span aria-hidden="true">&times;</span>
        </button>
        <ul>
          {this.props.messages.success.map((message, index) => <div key={index}>{message.msg}</div>)}
        </ul>
      </div>

    ) : this.props.messages.error ? (

      <div role="alert" className="animated bounceInDown message alert alert-danger">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>{this.props.dispatch({type: "CLEAR_MESSAGES"})}}>
          <span aria-hidden="true">&times;</span>
        </button>
        <ul>
            {this.props.messages.error.map((message, index) => <li key={index}>{message.msg}</li>)}
        </ul>
      </div>

    ) : this.props.messages.info ? (

      <div role="alert" className="animated bounceInDown message alert alert-info">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>{this.props.dispatch({type: "CLEAR_MESSAGES"})}}>
            <span aria-hidden="true">&times;</span>
          </button>
          <ul>
            {this.props.messages.info.map((message, index) => <div key={index}>{message.msg}</div>)}
          </ul>
      </div>
        
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default withRouter(connect(mapStateToProps)(Messages));
