import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'

class GridComponent extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="contain">
				<p className="w-100 h-100"> A few lines </p>
				<button type="button" className="flag flag2 btn btn-outline-primary d-inline-block float-right"> Flag </button>
				<button type="button" className="score score2 btn btn-outline-primary d-inline-block float-right"> Score 500 </button>
			</div>
		);
	}
}

export default GridComponent;