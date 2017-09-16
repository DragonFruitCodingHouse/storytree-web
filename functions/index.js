var functions = require('firebase-functions');
var admin = require('firebase-admin');
var Item =  require('./Item.js');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.setupUser = functions.auth.user().onCreate(event => {
	const user = event.data;
	const config = functions.config();
	admin.initializeApp(config.firebase);
	
	var data = {
		"username": user.displayName || user.email,
		"about": ""
	}
	var newUser = new Item(admin.database().ref('userInfos'),data);
	newUser.set(user.uid)
});
