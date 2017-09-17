import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'

class Expanded extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text:"",
			retrieved:false
		}
	}
	/* Insert Function to get Section # */
	
	render() {
		 var overflowStyle = { overflow: 'overlay'}
		if(!this.state.retrieved && this.props.sid) {
			this.state.retrieved = true;
			
			firebase.storage().ref().child("sections/"+this.props.sid).getDownloadURL().then( url => {
				var xhr = new XMLHttpRequest();
				xhr.responseType = 'text';
				xhr.onload = (event) => {
					this.setState({text:xhr.response});
				};
				xhr.open('GET', url);
				xhr.send();
			})
		}
		return (
			<div className="container w-100 p-0 m-0">
				<div className="row w-100 p-0 m-0">
					<div className="col-12 w-100 p-0 pb-5 m-0 clearfix">
						<button type="button" className="save btn btn-outline-primary d-inline-block float-left"> Save </button>
						<button type="button" className="x btn btn-outline-primary d-inline-block float-right"> X </button>
						<p> Section #{this.props.section} </p>
				
						<div className="text clearfix">
							<button type="button" className="fullscreen btn btn-outline-primary d-inline-block float-right"> Full Screen </button>
							<p style={overflowStyle} className="m-auto p-5">{this.state.text}</p>
							<button type="button" className="flag btn btn-outline-primary d-inline-block float-right"> Flag </button>
							<button type="button" className="score btn btn-outline-primary d-inline-block float-right"> Score 500 </button>
						</div>
				
						<span className="carousel-control-next-icon down-icon" aria-hidden="true"></span>
					</div>
				</div>
			</div>	
		);
	}
	
}

export default Expanded;
