import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            <img src="" width="30" height="30" alt=""/>
            Story Tree
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Browse <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item pr-5">
                <a className="nav-link" href="#">Create a Story</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
