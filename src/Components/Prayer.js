import React, { Component } from "react";
import {auth, db} from "../firebase";

class Prayer extends Component {

 constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
	  newprayer: null,
	  prayerlist: []
    };

    this.unsubscribe = undefined;
  }

   componentDidMount = () => {
          this.unsubscribe = db.collection("rooms").doc("prayer").collection("private").doc(auth.currentUser.uid).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange);
   };

   componentWillUnmount() {
     this.unsubscribe();
   }
   
   onDataChange(snapshot){
	   let items = this.state.prayerlist;
	   snapshot.docChanges().forEach(function(change) {
					if (change.type === "added") {
						console.log("New prayer: ", change.doc.data());	
						items.unshift(change.doc.data());
						
					}
					if (change.type === "modified") {
						console.log("Modified prayer: ", change.doc.data());
					}
					if (change.type === "removed") {
						console.log("Removed prayer: ", change.doc.data());
					}
				});
	    this.setState({prayerlist: items});
   }
   
    newprayerHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var prayer = "Dear heavenly Father, help me to fast from " +  event.currentTarget.innerHTML + " for two months, in Jesus' name, Amen";
		  this.setState({newprayer: prayer});
    };
	
	addPrayer = (event) => {
		console.log("add: " + this.state.newprayer);
		var message = this.state.newprayer;
		var dateNow = Date.now();
		var userId = auth.currentUser.uid;
		//var prayerlist = this.state.prayerlist;
	     var docRef = db.collection("rooms").doc("fasting").collection("private").doc(userId).collection("messages");
	    docRef.add({
              author: auth.currentUser.email,
			  userId: userId,
			  message: message,
			  date: dateNow,
			  recurring: false

			}) 
			.then(function(doc) {
				//alert("Document written with ID: " + doc.id);
						  console.log(docRef, message, "private", dateNow, userId, doc.id, false);
						//  var item = {"docRef": docRef, "message": message, "messageType": "private", "date": dateNow, "id": doc.id, "recurring": false};
						//  prayerlist.push(item);
					      

			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
										  //alert("error");

			});
		//this.setState({prayerlist: prayerlist});

	    //console.log(this.state.prayerlist.length);

		 
	}
  
  render() {
	 const {prayerlist} = this.state;
	 return (
	    <div>
		   <div>
			       <h1>New prayer</h1>
				   <div>Dear heavenly Father, </div>
				   <div contentEditable onInput = {(event) => this.newprayerHandler(event)}></div>
				   <div>in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addPrayer(event)}}>
						Send
				   </button>

			 </div>
			 <div>
			     <ul>
					{prayerlist &&
					  prayerlist.map((prayer, index) => (
						<li>
						  {prayer.message}
						</li>
					  ))}
				  </ul>
			 </div>
		  
		</div>
	 )
  }
}

export default Prayer;