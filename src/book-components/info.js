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
			<div className="row">
			<div className="col-12">
				<h1 className="title display-4 text-center mt-5">{this.props.bookInfo.title}</h1>
		    <h4 className="author text-center mt-3 mb-5"> By: {this.props.bookInfo.author}</h4>
		    <div className="tags">{tags}</div>
		    <hr/>
	    </div>
			</div>
			</div>
		);
	}
}

export default Info;
