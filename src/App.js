import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import Navbar from './navbar.js';
import Footer from './footer.js';

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
          <Route exact path="/" component={Browse}/>
          <Route path="/book" component={Book}/>
          <Route path="/create-new-book" component={Create}/>
        </div>
      </Router>
    )
  }
}

class Browse extends Component {
  constructor() {
    super();
  }

  getBooks() {
    var database = firebase.database().ref('books');
    database.once('value').then(function(snapshot) {
      console.log(snapshot);
      snapshot.val().forEach(function(childSnapshot) {
        var childKey = childSnapshot.title;
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
      </div>
    )
  }
}

class Create extends Component {
  render() {
    return (
      <div>
        <h1>This is where you create a new book</h1>
      </div>
    )
  }
}

class Book extends Component {
  render() {
    return (
      <div className="App">
      		<div className="container w-100 p-0">
      			<div className="row w-100 m-0">
      				<div className="col-12 p-0">
<<<<<<< HEAD
      					<h1 className="w-75 m-auto"> Title </h1>
      					<h3 className="text-right w-25 m-auto"> By Dfruit </h3>

	  					<div className="dropdown d-inline-block">
	      					<button type="button" className="sect btn btn-outline-primary dropdown-toggle d-inline-block" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Section 1 </button>
	      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  					  	<a className="dropdown-item" href="#lol">Section 1</a>
	    						<a className="dropdown-item" href="#lol">Section 2</a>
	   							<a className="dropdown-item" href="#lol">Section 3</a>
							</div>
						</div>
						<button type="button" className="fullscreen btn btn-outline-primary d-inline-block"> Full Screen </button>

						<div className="dropdown d-inline-block">
	      					<button type="button" className="sort btn btn-outline-primary dropdown-toggle d-inline-block" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By </button>
	      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  					  	<a className="dropdown-item" href="#lol">Highest Score</a>
	    						<a className="dropdown-item" href="#lol">Lowest Score</a>
	   							<a className="dropdown-item" href="#lol">Newest</a>
	   							<a className="dropdown-item" href="#lol">Oldest</a>
							</div>
						</div>
						<button type="button" className="undo btn btn-outline-primary d-inline-block"> Undo </button>
						<button type="button" className="x btn btn-outline-primary d-inline-block"> X </button>

						<div className="firstCard">
      						<p> This is the start of a very cool story. </p>
      					</div>

      					<button type="button" className="save btn btn-outline-primary d-inline-block"> Save </button>
      					<button type="button" className="add btn btn-outline-primary d-inline-block"> Add </button>

      					<div className="bg-faded w-100">
	      					<div className="carousel slide w-75 m-auto" data-ride="carousel" data-interval="false" id="carouselExampleControls">
=======
      					<h1 className="w-75 m-auto pt-5"> Title </h1>
      					<h4 className="text-right w-25 m-auto pt-1"> By: Dfruit </h4>
      				
	  					<div className="bg-inverse text-white clearfix mt-5 p-2">
		  					<div className="dropdown d-inline-block float-left">
		      					<button type="button" className="sect btn btn-outline-primary dropdown-toggle d-inline-block" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Section 1 </button>
		      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			  					  	<a className="dropdown-item" href="#lol">Section 1</a>
		    						<a className="dropdown-item" href="#lol">Section 2</a>
		   							<a className="dropdown-item" href="#lol">Section 3</a>
								</div>
							</div>
							<button type="button" className="fullscreen btn btn-outline-primary d-inline-block float-left"> Full Screen </button>
							
							<div className="dropdown d-inline-block">
		      					<button type="button" className="sort btn btn-outline-primary dropdown-toggle d-inline-block" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By </button>
		      					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			  					  	<a className="dropdown-item" href="#lol">Highest Score</a>
		    						<a className="dropdown-item" href="#lol">Lowest Score</a>
		   							<a className="dropdown-item" href="#lol">Newest</a>
		   							<a className="dropdown-item" href="#lol">Oldest</a>
								</div>
							</div>
							
							<button type="button" className="x btn btn-outline-primary d-inline-block float-right"> X </button>
							<button type="button" className="undo btn btn-outline-primary d-inline-block float-right"> Undo </button>
							
							<div className="firstCard">
	      						<p className="p-5"> This is the start of a very cool story. </p>
	      					</div>
							
	      					<button type="button" className="save btn btn-outline-primary d-inline-block float-left"> Save </button>
	      					<button type="button" className="add btn btn-outline-primary d-inline-block float-right"> Add </button>
      					</div>
      					
      					<div className="bg-faded w-100 p-5">
	      					<div className="carousel slide w-75 m-auto" data-ride="carousel" data-interval="false" id="carouselExampleControls"> 
>>>>>>> 9ebe2bf8977ed752e8f228e32237254c80265280
	      						<div className="carousel-inner w-100" role="listbox">
		      						<div className="carousel-item active w-100 m-auto">
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
		      						<div className="carousel-item w-100 m-auto">
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
		      						<div className="carousel-item w-100 m-auto">
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 mr-2 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      							<div className="w-75 p-3">
		      								<p> A few lines. </p>
		      							</div>
		      						</div>
	      						</div>
	      						<a className="carousel-control-prev w-2.5" href="#carouselExampleControls" role="button" data-slide="prev">
		  							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		  							<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next w-2.5" href="#carouselExampleControls" role="button" data-slide="next">
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

export default BasicExample;
