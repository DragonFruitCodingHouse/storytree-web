import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';

class Create extends Component {
  render() {
    return (
      <div>
        <h1>This is where you create a new book</h1>
        <Footer/>
      </div>
    )
  }
}

export default Create;
