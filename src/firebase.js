import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
		apiKey: "AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",
		authDomain: "pray-290920.firebaseapp.com",
		databaseURL: "https://pray-290920.firebaseio.com",
		projectId: "pray-290920",
		storageBucket: "pray-290920.appspot.com",
		messagingSenderId: "951976358196",
		appId: "1:951976358196:web:4686903027ee94f7ea3561",
		measurementId: "G-TRF9JGHQCR"
	  };
	  
	 
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();