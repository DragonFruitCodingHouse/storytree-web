import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'

class Info extends Component {
	constructor(props) {
		super(props);
		console.log(props.bookInfo);
	this.state = props
	}
	
	render() {
		var tags = ""
		//console.log(this.props)
		//console.log(this.state)
		console.log(this.props.bookInfo.tags)
		//this.props.bookInfo.tags.forEach((tag,index) => {
	//		tags = tags + " " + tag
	//	})
		return (
			<div className="container">
				<h1 className="title w-75">{this.props.bookInfo.title}</h1>
		    	<h3 className="author text-right w-75"> By: {this.props.bookInfo.author}</h3>
		    	<div className="tags">{tags}</div>
		    	<div className="bar w-80"></div>
	    	</div>
		);
	}
}

export default Info;
