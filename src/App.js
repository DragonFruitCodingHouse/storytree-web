import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

import Navbar from './navbar.js';

import Browse from './browse.js';
import Book from './book.js';
import Create from './create.js';


class BasicExample extends Component {
  constructor() {
    super();
    this.state = {
      provider: new firebase.auth.GoogleAuthProvider(),
      uid: null
    }
  }

  setUID(uid) {
    this.setState({
      uid: uid
    })
    console.log(uid);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar provider={this.state.provider} setUID={this.setUID.bind(this)} />
          <Switch>
            <Route exact path="/" component={Browse}/>
            <Route exact path="/create-new-book" component={Create}/>
            <Route path="/:id" component={Book}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BasicExample;
