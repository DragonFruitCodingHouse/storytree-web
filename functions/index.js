var functions = require('firebase-functions');
var admin = require('firebase-admin');
var Item =  require('./Item.js');
const config = functions.config();
admin.initializeApp(config.firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.setupUser = functions.auth.user().onCreate(event => {
	const user = event.data;

	var data = {
		"username": user.displayName || user.email,
		"about": ""
	}
	var newUser = new Item(admin.database().ref('userInfos'),data);
	newUser.set(user.uid)
});

exports.addChildren = functions.database.ref('sections/{cid}').onCreate(event =>{
	const parentKey = event.data.val().parent;
	const currentID = event.params.cid;

	if(parentKey){
		var updates = {}
		updates[parentKey+'/children/'+currentID]=true;
		event.data.ref.parent.update(updates);
	}

});

function getSection(sid){
        if(sid){
                admin.database().ref('sections/' + sid).once('value').then(function(section) {
                        var pid = section.val().parent;
												console.log(pid);
                        var file = admin.storage().bucket().file("sections/"+section.key());
                        if(pid){
                                return getSection(pid).then( str => { console.log("loop");return file.get().then( fstr => str + fstr ) } );
                        }else{
																console.log("end");
                                return file.get();
                        }
                })
        }
}

exports.aggregatePath = functions.https.onRequest((req, res) => {
	console.log(req.query.sid);
        getSection(req.query.sid).then( str => { res.send(str)} )
});

exports.addSidToUser = functions.database.ref('/sections/{cid}').onCreate(event => {
	const currentSection = event.params.cid;
	var currentUser = event.data.val().author;

	var contribution={}
	contribution['userInfos/'+currentUser+'/contributed/'+currentSection]=true;
	event.data.ref.parent.parent.update(contribution);

});

exports.addBidToUser = functions.database.ref('/books/{bid}').onCreate(event => {
	const currentBook = event.params.bid;
	var sidInit = event.data.val().firstSID;
	admin.database().ref('sections/'+sidInit).once('value').then(function(snapshot){
		var author=(snapshot.val().author);
		var assignBook={}
		assignBook['userInfos/'+author+'/created/'+currentBook]=true;
		event.data.ref.parent.parent.update(assignBook);
	});


})
