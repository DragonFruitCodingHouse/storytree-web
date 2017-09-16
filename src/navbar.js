import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-light bg-faded">
          <a class="navbar-brand" href="#">
            <img src="" width="30" height="30" class="d-inline-block align-top" alt=""/>
            Story Tree
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Browse</a>
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
