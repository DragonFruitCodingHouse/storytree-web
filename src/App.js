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
      		<div className="container">
      			<div className="row">
      				<div className="col-12">
      					<h1> Title </h1>
      					<h3> By Dfruit </h3>
      				
      					<button type="button" className="sect btn btn-outline-primary dropdown-toggle"> Section 1 </button>
      					<button type="button" className="sort btn btn-outline-primary dropdown-toggle"> Sort By </button>
      					<button type="button" className="fullscreen btn btn-outline-primary"> Full Screen </button>
      					<button type="button" className="save btn btn-outline-primary"> Save </button>
      					<button type="button" className="undo btn btn-outline-primary"> Undo </button>
      					<button type="button" className="add btn btn-outline-primary"> Add </button>
      					
      					<div className="firstCard">
      						<p> This is the start of a very cool story. </p>
      					</div>
      					
      					<div className="row"> </div>
      				</div>
      			</div>
      		</div>
      	<Footer/>
      </div>
    );
  }
}

export default App;
