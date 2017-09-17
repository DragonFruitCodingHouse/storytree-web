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
			<a className="contain" href="" onClick={this.clickHandler.bind(this)}>
				<div className="branch p-3">
					<p className="lead w-100 h-100">{this.state.preview}</p>
					<div className="ratings m-2">
						<img className="imgHover mr-4" height="23" width="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_full_up.svg/2000px-Arrow_full_up.svg.png" />
						<img className="imgHover" height="22" width="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Simpleicons_Places_flag-map-marker.svg/2000px-Simpleicons_Places_flag-map-marker.svg.png" />
					</div>
				</div>
			</a>
		);
	}
}

export default GridComponent;
