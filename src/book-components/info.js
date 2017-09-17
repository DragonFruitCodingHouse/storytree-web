import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'

class Info extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="container">
				<h1 className="title w-75"> Title </h1>
		    	<h3 className="author text-right w-75"> By: Dfruit </h3>
		    	<div className="tags">Tags Tags Tags</div>
		    	<div className="bar w-80"></div>
	    	</div>
		);
	}
}

export default Info;