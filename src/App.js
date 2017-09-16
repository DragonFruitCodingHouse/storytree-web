import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js'

import Navbar from './navbar.js'
import Footer from './footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar/>
      	<Footer/>
      </div>
    );
  }
}

export default App;
