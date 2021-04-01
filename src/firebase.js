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



export const getWeek = () => {
    var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var dayOfTheYear = Math.floor(diff / oneDay);
    console.log("dayOfTheYear" + dayOfTheYear);
    var week = (Math.floor(dayOfTheYear / 7)).toString();	
    return week;
}    

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



	var dateItem = new Date(item.date);


    var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var dayOfTheYear = Math.floor(diff / oneDay);
    console.log("dayOfTheYear" + dayOfTheYear);
	var year = dateItem.getFullYear().toString();
	var month = dateItem.getMonth().toString();
    var week = (Math.floor(dayOfTheYear / 7)).toString();
    console.log("weeknumber" + week);

	var day = dateItem.getDate().toString();
	var hour = dateItem.getHours().toString();	
    
    var yearCollection =  db.collection("rooms").doc(room).collection("private").doc(item.userId).collection("counters").doc("years").collection(year);
    var monthCollection = yearCollection.doc("month").collection(month);

	var docRefYear = yearCollection.doc("count");   
	var docRefMonth = monthCollection.doc("count");
	var docRefWeek = yearCollection.doc("week").collection(week).doc("count");
	var docRefDay = monthCollection.doc("date").collection(day).doc("count");
	var docRefHour = monthCollection.doc("date").collection(day).doc("hour").collection(hour).doc("count");
				


    
    
    //increment year
	docRefYear.update({
		total: firebase.firestore.FieldValue.increment(1)
	}).then(() => {
		console.log("Document successfully updated!");
	}).catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating year increment: ", error);
		docRefYear.set({total: 1});
	});
	
	//increment month
	docRefMonth.update({
		total: firebase.firestore.FieldValue.increment(1)
	}).then(() => {
		console.log("Document successfully updated!");
	}).catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating month increment: ", error);
		docRefMonth.set({total: 1});
	});

	//increment week
	docRefWeek.update({
		total: firebase.firestore.FieldValue.increment(1)
	}).then(() => {
		console.log("Document successfully updated!");
	}).catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating week increment: ", error);
		docRefWeek.set({total: 1});
	});
		
	//increment day
	docRefDay.update({
		total: firebase.firestore.FieldValue.increment(1)
	}).then(() => {
		console.log("Document successfully updated!");
	}).catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating day increment: ", error);
		docRefDay.set({total: 1});
	});	
		
    //increment hour
	docRefHour.update({
		total: firebase.firestore.FieldValue.increment(1)
	}).then(() => {
		console.log("Document successfully updated!");
	})
	.catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating hour increment: ", error);
		docRefHour.set({total: 1});
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
