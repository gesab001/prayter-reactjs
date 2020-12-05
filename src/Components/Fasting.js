import React, { Component } from "react";
import {auth, db, addToFirestore, deleteFromFirestore} from "../firebase";

class Fasting extends Component {

 constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
	  newfast: null,
	  fastlist: [], 
	  inputField: null
    };

    this.unsubscribe = undefined;
  }

   componentDidMount = () => {
          this.unsubscribe = db.collection("rooms").doc("fasting").collection("private").doc(auth.currentUser.uid).collection("messages").orderBy("date", "desc")
		  .onSnapshot(this.onDataChange);
   };

   componentWillUnmount() {
     this.unsubscribe();
   }
   
   onDataChange(snapshot){
	   let items = this.state.fastlist;
	   snapshot.docChanges().forEach(function(change) {
		   			var item = {"id": change.doc.id, "item": change.doc.data()};
					if (change.type === "added") {
						console.log("New prayer: ", change.doc.id);	
						items.unshift(item);
						
					}
					if (change.type === "modified") {
						console.log("Modified prayer: ", change.doc.data());
					}
					if (change.type === "removed") {
						console.log("Removed prayer: ", change.doc.data());
						var filtered = items.filter(function(value, index, arr){
						    return value.id!=item.id;
						});
						items = filtered;
					}
				});
	    this.setState({fastlist: items});
   }
   
    newFastHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var fast = "Dear heavenly Father, help me to fast from " +  event.currentTarget.innerHTML + " for 60 days, in Jesus' name, Amen";
		  this.setState({newfast: fast});
    };
	
	addFast = (event) => {
		console.log("add: " + this.state.newfast);
		var room = "fasting";
		var author = auth.currentUser.email;
		var userId = auth.currentUser.uid;
		var message = this.state.newfast;
		var dateNow = Date.now();
		var recurring = false;
		var item = {"author": author, "userId": userId, "message": message, "date": dateNow, "recurring": recurring};
		addToFirestore(room, item);

		 
	}
	
	deleteFast = (event, id) => {
		console.log("remove: " + id);
		var room = "fasting";
		var userId = auth.currentUser.uid;
		deleteFromFirestore(room, userId, id);

		 
	}
	
	getDate = (timestamp) => {
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	}
 
	getEndDate = (timestamp) => {
		var timestamp = timestamp + (60*24*60*60*1000);
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	} 
  render() {
	 const {fastlist} = this.state;
	 return (
	    <div>
		   <div>
			       <h1>New fast</h1>
				   <div>Dear heavenly Father, help me to fast from  </div>
				   <div contentEditable onInput = {(event) => this.newFastHandler(event)}></div>
				   <div>for 60 days, in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addFast(event)}}>
						Send
				   </button>

			 </div>
			 <div>
			     <ul>
					{fastlist &&
					  fastlist.map((prayer, index) => (
						<li>
						   <div>
						       <h3>Start: {this.getDate(prayer.item.date)} End: {this.getEndDate(prayer.item.date)}</h3>
						       <p>{prayer.item.message}</p>
							   <button  onClick = {(event) => {this.deleteFast(event, prayer.id)}}>
									Delete
							   </button>
						   </div>
						</li>
					  ))}
				  </ul>
			 </div>
		  
		</div>
	 )
  }
}

export default Fasting;