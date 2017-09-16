import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';
import GridItem from './gridItem';

class Browse extends Component {
  constructor() {
    super();
    this.state = {
      bids: []
    }
    var database = firebase.database().ref('books');
    database.once('value').then(snapshot => {
      snapshot.forEach(childSnapshot => {
        this.state.bids.push(childSnapshot.key);
        this.forceUpdate();
      });
    });
  }

  render() {
    var bids = this.state.bids
    bids.forEach(bid => {
      console.log("hi")
    })
    var items = bids.map(bid => <GridItem bid={bid}/>)
    console.log(items);
    console.log(this.state.bids);

    return (
      <div>
        <h1>This is the home page where you can browse through all of the books</h1>
        {items}
        <Footer/>
      </div>
    )
  }
}

export default Browse;
