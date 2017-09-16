import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Navbar from './navbar.js'
import Footer from './footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar/>
      		<div className="container w-100">
      			<div className="row w-100">
      				<div className="col-12">
      					<h1 className="w-75 m-auto"> Title </h1>
      					<h3 className="text-right w-50 m-auto"> By Dfruit </h3>
      				
	  					<div className="dropdown">
	      					<button type="button" className="sect btn btn-outline-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Section 1 </button>
	      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  					  	<a className="dropdown-item" href="#lol">Section 1</a>
	    						<a className="dropdown-item" href="#lol">Section 2</a>
	   							<a className="dropdown-item" href="#lol">Section 3</a>
							</div>
						</div>
						<button type="button" className="fullscreen btn btn-outline-primary"> Full Screen </button>
						
						<div className="dropdown">
	      					<button type="button" className="sort btn btn-outline-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By </button>
	      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  					  	<a className="dropdown-item" href="#lol">Highest Score</a>
	    						<a className="dropdown-item" href="#lol">Lowest Score</a>
	   							<a className="dropdown-item" href="#lol">Newest</a>
	   							<a className="dropdown-item" href="#lol">Oldest</a>
							</div>
						</div>
						<button type="button" className="undo btn btn-outline-primary"> Undo </button>
						<button type="button" className="x btn btn-outline-primary"> X </button>
						
						<div className="firstCard">
      						<p> This is the start of a very cool story. </p>
      					</div>
						
      					<button type="button" className="save btn btn-outline-primary"> Save </button>
      					<button type="button" className="add btn btn-outline-primary"> Add </button>
      					
      					<div className="bg-primary">
	      					<div className="carousel slide w-75 m-auto" data-ride="carousel" data-interval="false" id="carouselExampleControls"> 
	      						<div className="carousel-inner w-100" role="listbox">
		      						<div className="carousel-item active w-100 m-auto">
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
		      						<div className="carousel-item w-100 m-auto">
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
		      						<div className="carousel-item w-100 m-auto">
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
	      						</div>
	      						<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		  							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		  							<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
	      					</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	<Footer/>
      </div>
    );
  }
}

export default App;
