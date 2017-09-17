import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'
import GridComponent from "./gridcomp.js";

class Branched extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="container w-100 p-0 m-0">
				<div className="row w-100 p-0 m-0">
					<div className="col-12 w-100 p-0 pb-5 m-0">
						<div className="dropdown">
							<button type="button" className="sort btn btn-outline-primary dropdown-toggle float-left" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By </button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							  	<a className="dropdown-item" href="#lol">Highest Score</a>
								<a className="dropdown-item" href="#lol">Lowest Score</a>
								<a className="dropdown-item" href="#lol">Newest</a>
								<a className="dropdown-item" href="#lol">Oldest</a>
							</div>
						</div>
						<button type="button" className="add btn btn-outline-primary d-inline-block float-right"> + </button>
						<p className="sect"> Section # </p>				
						
						<div className="carouselcontain w-100">
							<div className="carousel slide w-80 m-auto" data-ride="carousel" data-interval="false" id="carouselExampleControls">
						    	<div className="carousel-inner w-100" role="listbox">
									<div className="carousel-item active w-100 m-auto">
										<div className="carousel-grid w-25 ml-auto mr-auto">
											<GridComponent/>
										</div>
										<div className="carousel-grid w-25 ml-auto mr-auto">
											<GridComponent/>
										</div>
										<div className="carousel-grid w-25 ml-auto mr-auto">
											<GridComponent/>
										</div>
									</div>
									<div className="carousel-item w-100 m-auto">
										<div className="carousel-grid w-25 ml-auto mr-auto">
											<GridComponent/>
										</div>
										<div className="carousel-grid w-25 ml-auto mr-auto">
							 				<GridComponent/>
							      		</div>
							      		<div className="carousel-grid w-25 ml-auto mr-auto">
							      			<GridComponent/>
							      		</div>
							      	</div>
							      	<div className="carousel-item w-100 m-auto">
							      		<div className="carousel-grid w-25 ml-auto mr-auto">
							      			<GridComponent/>
							      		</div>
							      		<div className="carousel-grid w-25 ml-auto mr-auto">
							      			<GridComponent/>
							      		</div>
							      		<div className="carousel-grid w-25 ml-auto mr-auto">
							      			<GridComponent/>
							      		</div>
							      	</div>
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