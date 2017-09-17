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
			<div className="container">
				<div className="row">
					<div className="col-12 clearfix">

						<div className="row">
							<div className="col-md-2 text-left">
								<button type="button" className="save btn btn-outline-primary d-inline-block float-left"> Save </button>
							</div>
							<div className="col-md-8 text-center">
								<h4> Section #{this.props.section} </h4>
							</div>
							<div className="col-md-2 text-right">
								<img className="imgHover m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1000px-Grey_close_x.svg.png" height="25" width="25" />
							</div>
						</div>

						<div className="text clearfix mt-3 mb-3">
							<img className="imgHover fullscreen m-2" height="25" width="25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Resize_full_font_awesome.svg/2000px-Resize_full_font_awesome.svg.png" />
							<p style={overflowStyle} className="lead text-justify m-auto p-5">{this.state.text}</p>
							<div className="ratings m-2">
								<img className="imgHover mr-4" height="23" width="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_full_up.svg/2000px-Arrow_full_up.svg.png" />
								<img className="imgHover" height="22" width="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Simpleicons_Places_flag-map-marker.svg/2000px-Simpleicons_Places_flag-map-marker.svg.png" />
							</div>
						</div>

						<span className="carousel-control-next-icon down-icon" aria-hidden="true"></span>
					</div>
				</div>
			</div>
		);
	}

}

export default Expanded;
