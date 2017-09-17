import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { WithContext as ReactTags } from 'react-tag-input';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './reactTags.css';
import './index.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import firebase from './firebase.js';
import Footer from './footer.js';

class Create extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }
  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };
  constructor(props) {
      super(props);

      this.state = {
          tags: [{ id: 1, text: "Fiction" }, { id: 2, text: "Fantasy" }],
          suggestions:  ["mango", "pineapple", "orange", "pear"],
          content: "",
          title: "",
          editorState: EditorState.createEmpty(),
          author: "Loading..."
      };
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          firebase.database().ref("userInfos/"+user.uid).once("value").then( user => {
            console.log(user.val().username);
            this.setState({ author:user.val().username });
          })
        } else {
          this.setState({ author:"Loading..."});
        }
      });
      if(firebase.auth().currentUser)
      this.handleDelete = this.handleDelete.bind(this);
      this.handleAddition = this.handleAddition.bind(this);
      this.handleDrag = this.handleDrag.bind(this);
      this.publish = this.publish.bind(this);
  }
  handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

  handleAddition(tag) {
      let tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
      let tags = this.state.tags;

      // mutate array
      tags.splice(currPos, 1);
      tags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: tags });
  }
  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  publish(event){
    var text = this.state.editorState.getCurrentContent().getPlainText();
    var prev = (text.length > 140)? text.substring(0,140): text;
    var sect = {
      parent: null,
      preview: prev,
      score: 0,
      flag: 0,
      author: firebase.auth().currentUser.uid,
      draft:false
    }
    firebase.database().ref('sections').push(sect).then(rsp => {
      var parsedTags = {};
      firebase.storage().ref().child('sections/'+rsp.key).putString(text)
      this.state.tags.forEach( (tag, index) => {
        parsedTags[tag.text] = true;
      })
      var book = {
        title: this.state.title,
        score: 0,
        flag: 0,
        firstSID: rsp.key,
        tags: parsedTags,
        draft: false
      }
      firebase.database().ref('books').push(book).then(rsp => {
        window.location = '/'+rsp.key
      })
    })
  }
  render() {

    const { editorState, tags, suggestions } = this.state;
    return (
      <div className="container">
      <form className="col-lg-10 center-div">
      <div className="form-group">
        <input className="form-control" type="text" name="title" placeholder="Title" onChange={this.handleTitleChange.bind(this)} value={this.state.title}/>
        </div>
        <div className="form-group">
        Author: {this.state.author}
        </div>
        <div className="form-group">
        <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
        </div>
        <div className="form-group">
          <Editor
            editorState={editorState}
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          </div>
          <div className="form-group">
        <div>
          <input type="button" name="publish" value="Publish" onClick={this.publish}/>
          <input type="button" name="cancel" value="Cancel" className="space-button-right"/>
          <input type="button" name="saveDraft" value="Save Draft" className="space-button-right"/>
        </div>
        </div>
        </form>
        <Footer/>
      </div>
    )
  }
}

export default Create;
