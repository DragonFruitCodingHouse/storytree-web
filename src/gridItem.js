import React, { Component } from 'react';
import firebase from './firebase.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Loading...',
      score: 0,
      tags: {},
      firstSID: null,
      authorUID: null,
      preview: 'Loading...',
      author: 'Loading...'
    }
    firebase.database().ref('books/'+this.props.bid).once('value').then(snapshot  => {
      var book = snapshot.val();
      this.setState({
        title: book.title,
        score: book.score,
        tags: book.tags,
        firstSID: book.firstSID
      })
      firebase.database().ref('sections/'+this.state.firstSID).once('value').then(snapshot => {
        var section = snapshot.val();
        this.setState({
          authorUID: section.author,
          preview: section.preview
        })
        console.log('userInfos/'+section.author)
        firebase.database().ref('userInfos/'+section.author).once('value').then(snapshota => {
          console.log(snapshota)
          var test = snapshota.val();
          console.log(test)
          this.setState({
            author: test.username
        })
      })
    })
  })
  }

  render() {
    return(
       	<div className="gridItemContain col-12 col-md-3 h-auto">
       		<Link to={this.props.bid} className="booklink">

	      		<div className="gridItem bg-inverse text-white">
		        	<h4>{this.state.title}</h4>
					<p>{this.state.author}</p>
					<p>{this.state.preview}</p>
				</div>
			
			</Link>
		</div>
    )
  }
}

export default GridItem;
