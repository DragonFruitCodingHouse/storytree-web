import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';
import Expanded from "./book-components/expanded.js";
import Info from "./book-components/info.js";
import Branched from "./book-components/branched.js";
import AddSection from "./book-components/add.js";

class Book extends Component {
  render() {
    return (
      <div className="App">
      	<Info/>
	  	<Expanded/>
	  	<Branched/>
	  	<AddSection/>
	  	<Footer/>
      </div>
    );
  }
}

export default Book;
