import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';
import GridItem from './gridItem';

class Browse extends Component {
  constructor() {
    super();
    this.state = {
      bids: [],
      poppedbids: [],
      searchQuery: "",
      title: 'Recommended Stories'
    }
    
    this.handleUserInput = this.handleUserInput.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
    var database = firebase.database().ref('books');
    database.once('value').then(snapshot => {
      snapshot.forEach(childSnapshot => {
        this.state.bids.push(childSnapshot.key);
        this.forceUpdate();
      });
    });
  }
  
  handleUserInput(e) {
	  this.setState({
		  searchQuery: e.target.value
	  });
  }
  
  handleSubmit(event) {
	event.preventDefault();
	
	var query = this.state.searchQuery;
	this.setState({
		title: 'Searched for "' + query + '"'
	})
	
	this.state.poppedbids.forEach(bid => {
		this.state.bids.push(bid);
		this.state.poppedbids.pop(bid);
	});
	this.state.bids.forEach(bid => {
		firebase.database().ref('books/'+bid).once('value').then(snapshot => {
			
	        var book = snapshot.val();
	        var title = book.title;
	        if(title.substr(0, query.length) != query) {
		        this.state.poppedbids.push(bid);
		        this.state.bids.pop(bid);
	        }
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
	    <div className="homecontain">
	    	<div className="banner">
	    		<div className="row">
	    			  <div className="col-md-4 offset-md-4 text-center justify-content-center align-items-center d-flex">
					  	<form onSubmit={this.handleSubmit} className="w-100">
						  	<div className="form-group d-inline-flex w-100 justify-content-center">
						  		<input type="text" className="form-control-lg d-inline-flex w-100" placeholder="Search for..." value={this.state.searchQuery} onChange={this.handleUserInput} />
						  		<span className="input-group-btn">
						  			<input className="btn btn-lg btn-secondary" type="submit" value="Go!" />
						  		</span>
						  	</div>
					  	</form>
					  </div>
	    		</div>
	    	</div>
		    <div className="browseitems">
		      <div className="container p-0 m-auto">
		      	<div className="row w-100 p-0 m-0">
		      		<div className="col-12 text-left">
			      		<h1 className="pt-4 pb-2">{this.state.title}</h1>
		      		</div>
		        	{items}
		        </div>
			  </div>
			  <div className="aboutcontain bg-faded mt-4">
				  <div className="container about text-left pt-5 pb-5">
				  	<h1> About StoryTree </h1>
				  	<p> StoryTree is a project meant to inspire people to write the books they've always wanted to. It started off as a dream, for a group of young people to bring the joy of literature and writing to the general population. After years of tireless work, we are proud to present to you, StoryTree, the culmination of our blood, sweat, and tears, finally here to give you the chance to write your stories, to inspire generations to come, and most importantly, to express yourself. We hope you find what you've always been missing here at StoryTree. </p>
				  </div>
			  </div>
		        <Footer/>
	        </div>
        </div>
    );
  }
}

export default Browse;
