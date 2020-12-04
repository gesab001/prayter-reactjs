import React, { Component } from "react";
import {auth, db, addToFirestore} from "../firebase";

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
		  var prayer = "Dear heavenly Father,  " +  event.currentTarget.innerHTML + " in Jesus' name, Amen";
		  this.setState({newprayer: prayer});
    };
	
	addPrayer = (event) => {
		console.log("add: " + this.state.newprayer);
		var room = "prayer";
		var author = auth.currentUser.email;
		var userId = auth.currentUser.uid;
		var message = this.state.newprayer;
		var dateNow = Date.now();
		var recurring = false;
		var item = {"author": author, "userId": userId, "message": message, "date": dateNow, "recurring": recurring};
		addToFirestore(room, item);

		 
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