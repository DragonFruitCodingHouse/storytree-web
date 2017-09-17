import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'
import GridComponent from "./gridcomp.js";

class Branched extends Component {
	constructor(props) {
		super(props);
		this.state = {
			retrieved:false,
			children:[],
			sida:this.props.sid
		}
	}
	componentWillReceiveProps(np){
		console.log(np)
		this.setState({children:[]});
		this.forceUpdate();
		firebase.database().ref("sections/"+np.sid).once("value").then( rsp => {
		        console.log(rsp.val());
                var sect = rsp.val();
                if(sect.children){
                	var child = []
                	for(var c in sect.children){
                		child.push(c)
                      	}
                       	this.setState({children:child});
			this.forceUpdate();
                }
                })
	}
	render() {
		if(!this.state.retrieved && this.props.sid){
			this.setState({retrieved:true});
			firebase.database().ref("sections/"+this.props.sid).once("value").then( rsp => {
				console.log(this.props.sid);
				console.log(rsp.val());

				var sect = rsp.val();
				if(sect.children){
					var child = []
					for(var c in sect.children){
						child.push(c)
					}
					this.setState({children:child});
				}
		   	})
		}
		var i;
		var comps = []
		for(i = 0; i < Math.floor(this.state.children.length/3); i++){
			comps.push(
			<div className="carousel-item active w-100 m-auto">
				<div className="carousel-grid w-25 ml-auto mr-auto">
					<GridComponent selectHandler={this.props.selectHandler} sid={this.state.children[i]}/>
				</div>
			        <div className="carousel-grid w-25 ml-auto mr-auto">
					<GridComponent selectHandler={this.props.selectHandler} sid={this.state.children[i+1]}/>
				</div>
				<div className="carousel-grid w-25 ml-auto mr-auto">
					<GridComponent selectHandler={this.props.selectHandler} sid={this.state.children[i+2]}/>
				</div>
			</div>
			);
		}
		var tmp = [];
		for(i = 0; i < this.state.children.length-3*Math.floor(this.state.children.length/3);i++){
			tmp.push(<div className="carousel-grid w-25 ml-auto mr-auto">
					 <GridComponent selectHandler={this.props.selectHandler} sid={this.state.children[this.state.children.length-i-1]}/>
				 </div>)
		}
		comps.push(<div className="carousel-item active w-100 m-auto">{tmp}</div>);
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<div className="col-md-2 text-left">
								<div className="dropdown">
									<button type="button" className="sort btn btn-outline-primary dropdown-toggle float-left" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By </button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#lol">Highest Score</a>
										<a className="dropdown-item" href="#lol">Lowest Score</a>
										<a className="dropdown-item" href="#lol">Newest</a>
										<a className="dropdown-item" href="#lol">Oldest</a>
									</div>
								</div>
							</div>
							<div className="col-md-8 text-center">
								<h4 className="sect"> Section # </h4>
							</div>
							<div className="col-md-2 text-right">
								<img className="imgHover m-2 add-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1000px-Grey_close_x.svg.png" height="25" width="25" onClick={this.props.addHandler} />
							</div>
						</div>

						<div className="carouselcontain w-100">
							<div className="carousel slide w-80 m-auto" data-ride="carousel" data-interval="false" id="carouselExampleControls">
						    	<div className="carousel-inner w-100" role="listbox">
							{comps}
						      	</div>

						      	<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
							  		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  		<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
						    </div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Branched;
