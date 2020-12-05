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
export const db = firebase.firestore();

export const addToFirestore = (room, item) => {
	console.log("add: " + room);
	var docRef = db.collection("rooms").doc(room).collection("private").doc(item.userId).collection("messages");
	    docRef.add({
              author: item.author,
			  userId: item.userId,
			  message: item.message,
			  date: item.date,
			  recurring: item.recurring

			}) 
			.then(function(doc) {
				//alert("Document written with ID: " + doc.id);
						  console.log(docRef, item.message, "private", item.date, item.userId, doc.id, item.recurring);
						//  var item = {"docRef": docRef, "message": message, "messageType": "private", "date": dateNow, "id": doc.id, "recurring": false};
						//  prayerlist.push(item);
					      

			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
										  //alert("error");

			});
}

export const deleteFromFirestore = (room, userId, id) => {
	var docRef = db.collection("rooms").doc(room).collection("private").doc(userId).collection("messages");
    docRef.doc(id).delete().then(function() {
		console.log("Document successfully deleted!");
	}).catch(function(error) {
		console.error("Error removing document: ", error);
	});
}