import React, { Component } from 'react';
import firebase from './firebase.js';
import Footer from './footer.js';
import Expanded from "./book-components/expanded.js";
import Info from "./book-components/info.js";
import Branched from "./book-components/branched.js";
import AddSection from "./book-components/add.js";

class Book extends Component {
  	constructor(props){
		super(props);
		this.state = {
			title:"Loading...",
			score:0,
			flag:0,
			firstSID:null,
			tags:{},
			authorUID:null,
			author:"Loading...",
			bid:this.props.match.params.id,
			draft:false,
			mode:"read",
			currSID:null,
			sections:[]
		}
		firebase.database().ref('books/'+this.props.match.params.id).once('value').then( rsp => {
			var book = rsp.val();
			this.setState({
				title:book.title,
				score:book.score,
				flag:book.flag,
				firstSID:book.firstSID,
				tags:book.tags,
				currSID:book.firstSID
			});
			this.state.sections.push( <Expanded sid={this.state.firstSID} section={1}/>)
			firebase.database().ref('sections/'+this.state.firstSID).once('value').then( rsp => {
				var sect = rsp.val();
				this.setState({authorUID:sect.author});
				firebase.database().ref('userInfos/'+sect.author).once('value').then( rsp => {
					this.setState({author:rsp.val().username})
				});
			});
		});
	}

  addSection(){
  	this.setState({mode:"add"});

  }
  selectSection(newSid){
	console.log(newSid)
	this.state.sections.push( <Expanded sid={newSid} section={this.state.sections.length+1}/>)
	this.setState({currSID:newSid})
	this.forceUpdate()
  }
  cancelAdd(){
  	this.setState({mode:"read"});
  }
  render() {
	 var bot = (this.state.mode === "read")? (<Branched selectHandler={this.selectSection.bind(this)} addHandler={this.addSection.bind(this)} sid={this.state.currSID} bookInfo={this.state}/>) : (<AddSection sid={this.state.currSID} bookInfo={this.state} cancelHandler={this.cancelAdd.bind(this)}/>)
    return (
      <div className="App">
        <Info bookInfo={this.state}/>
		    {this.state.sections}
	  	  {bot}
	  	  <Footer/>
      </div>
    );
  }
}

export default Book;
