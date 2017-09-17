import React, { Component } from 'react';
import firebase from '../firebase.js';
import './main.css'
import '../index.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class AddSection extends Component {
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
			editorState: EditorState.createEmpty()
		}
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
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
		
		tags.splice(currPos, 1);
		tags.splice(newPos, 0, tag);
		
		this.setState({ tags: tags });
	}
	publish(event){
		var text = this.state.editorState.getCurrentContent().getPlainText();
		var prev = (text.length > 140)? text.substring(0,140): text;
		var sect = {
			parent: this.props.sid,
			preview: prev,
			score: 0,
			flag: 0,
			author: firebase.auth().currentUser.uid,
			draft:false
		}
		firebase.database().ref('sections').push(sect).then(rsp => {
			var parsedTags = {};
			firebase.storage().ref().child('sections/'+rsp.key).putString(text)
			this.cancel()
				//window.location.reload()
		})
	}
	cancel(event){
		this.setState({editorState:EditorState.createEmpty()});
		this.props.cancelHandler();
	}
	render() {
		const { editorState } = this.state;
		return (
		<form>
		<Editor
			editorState={editorState}
			wrapperClassName="home-wrapper"
			editorClassName="home-editor"
			onEditorStateChange={this.onEditorStateChange}
		/>
		<div className="form-group">
			<input type="button" name="publish" value="Publish" onClick={this.publish.bind(this)}/>
			<input type="button" name="cancel" value="Cancel" className="space-button-right" onClick={this.cancel.bind(this)}/>
			<input type="button" name="saveDraft" value="Save Draft" className="space-button-right"/>
		</div>
		</form>
		);
	}
}

export default AddSection;
