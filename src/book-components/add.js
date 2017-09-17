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
	constructor() {
		super();
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

	render() {
		const { editorState } = this.state;
		return (
		<Editor
			editorState={editorState}
			wrapperClassName="home-wrapper"
			editorClassName="home-editor"
			onEditorStateChange={this.onEditorStateChange}
		/>
		);
	}
}

export default AddSection;
