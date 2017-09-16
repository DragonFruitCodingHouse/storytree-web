import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';

class Browse extends Component {
  constructor() {
    super();
  }

  getBooks() {
    var database = firebase.database().ref('books');
    database.once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        console.log(childKey);
      });
    });
    return{
      __html: ''
    }
  }

  render() {
    return (
      <div>
        <h1>This is the home page where you can browse through all of the books</h1>
        <div dangerouslySetInnerHTML = {this.getBooks()} />
        <Footer/>
      </div>
    )
  }
}

export default Browse;
