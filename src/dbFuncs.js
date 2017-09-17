import firebase from './firebase.js';
import Item from './Item.js';
var storageRef = firebase.storage().ref();
var fns = {
	createBook: function(title, tags, isDraft, firstSID){
		var data = {
			"title": title,
			"tags": tags,
			"firstSID": firstSID,
			"score":0,
			"flags":0,
			"isDraft":isDraft
		}
		var newBook = new Item(data);
		return newBook.push(firebase.database().ref('books'));
	},
	createSection: function(parentSID, authorUID, isDraft, content){
		var preview = content;
		if(preview.length > 140) preview = preview.substring(0,140)
		var data = {
			"parent": parentSID || null,
			"author": authorUID,
			"isDraft": isDraft,
			"preview": preview
		}
		var newSection = new Item(data);
		return newSection.push(firebase.database().ref('Sections')).then(rsp => {
			storageRef.child('sections/'+rsp.key).putString(content);
			return rsp;
		});
	}
}
export default fns
