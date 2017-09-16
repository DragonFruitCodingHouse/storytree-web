import React, { Component } from 'react';
import firebase from './firebase.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      uid: null,
      loginText: 'Login'
    }
  }

  handleLogin(e) {
    if (this.state.uid === null) {
      //console.log(this);
      firebase.auth().signInWithPopup(this.props.provider).then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        this.props.setUID(user.uid);
        this.setState({
          uid: user.uid,
          loginText: 'Logout'
        });
      }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        // console.log(errorMessage);
        this.props.setUID(null);
        this.setState({
          uid: null,
          loginText: 'Login'
        });
      });
    } else {
      firebase.auth().signOut().then( () => {
        this.props.setUID(null);
        this.setState({
          uid: null,
          loginText: 'Login'
        });
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            <img src="" width="30" height="30" alt=""/>
            Story Tree
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Browse
                </Link>
              </li>
              <li className="nav-item pr-5">
                <Link to="/create-new-book" className="nav-link">
                  Create a Story
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.handleLogin.bind(this)}>{this.state.loginText}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;