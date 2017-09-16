import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
  var config = {
	apiKey: "AIzaSyCCHiAjRxRc6y_WCGrZ0CsaolaSMnsXJ2A",
	authDomain: "storytree-6ae0c.firebaseapp.com",
	databaseURL: "https://storytree-6ae0c.firebaseio.com",
	projectId: "storytree-6ae0c",
	storageBucket: "storytree-6ae0c.appspot.com",
	messagingSenderId: "194259732178"
};
firebase.initializeApp(config);

export default firebase;
