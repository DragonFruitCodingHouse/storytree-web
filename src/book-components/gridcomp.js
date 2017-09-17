import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'

class GridComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			preview:"Loading...",
			score:0
		}
		firebase.database().ref("sections/"+this.props.sid).once("value").then( rsp => {
			var sect = rsp.val();
			this.setState({
				preview:sect.preview,
				score:sect.score
			})
		})
	}
	clickHandler(e){
		this.props.selectHandler(this.props.sid)
		e.preventDefault();
		return false;

	}	
	render() {
		return (
			<a href="" onClick={this.clickHandler.bind(this)}><div className="contain">
				<p className="w-100 h-100">{this.state.preview}</p>
				<button type="button" className="flag flag2 btn btn-outline-primary d-inline-block float-right"> Flag </button>
				<button type="button" className="score score2 btn btn-outline-primary d-inline-block float-right"> Score {this.state.score} </button>
			</div> </a>
		);
	}
}

export default GridComponent;
