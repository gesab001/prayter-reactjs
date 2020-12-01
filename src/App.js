import React, { Component, createContext, } from "react";
import {auth, db} from "./firebase";
import "./App.css";

export const UserContext = createContext({ user: null });

class App extends Component {
	
   state = {
	 user: null,
     username: null,
	 password: null,
	 error: null,
	 newprayer: null,
	 prayerlist: []
   };
   componentDidMount = () => {
   
	 auth.onAuthStateChanged(userAuth => {
		if (userAuth!=null){
      	  console.log(userAuth.uid);
		  this.setState({user: userAuth});	
		  
		  db.collection("rooms").doc("prayer").collection("private").doc(this.state.user.uid).collection("messages")
		  .onSnapshot(function(snapshot) {
				snapshot.docChanges().forEach(function(change) {
					if (change.type === "added") {
						console.log("New prayer: ", change.doc.data());
					}
					if (change.type === "modified") {
						console.log("Modified prayer: ", change.doc.data());
					}
					if (change.type === "removed") {
						console.log("Removed prayer: ", change.doc.data());
					}
				});
			});
	
		}		  
     });


   };
  
   onChangeHandlerUsername = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var username = event.currentTarget.value;
		  this.setState({username: username});		  
    };
 
   onChangeHandlerPassword = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var password = event.currentTarget.value;
		  console.log("password: ", password);
		  this.setState({password: password});
		  
		  
    };
	
   signInHandler = (event) => {
	   event.preventDefault();
	  auth.signInWithEmailAndPassword(this.state.username, this.state.password).catch(error => {
      console.log("Error signing in with password and email", error);
	  this.setState({error: error});
	  }); 

   }
   
   signOutHandler = (event) => {
	  auth.signOut();
	  this.setState({user: null});
	  window.location.reload(false);
   }

    newPrayerHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var prayer = "Dear heavenly Father, " +  event.currentTarget.innerHTML + ", in Jesus' name, Amen";
		  this.setState({newprayer: prayer});
    };
	
	addPrayer = (event) => {
		console.log("add: " + this.state.newprayer);
		var message = this.state.newprayer;
		var dateNow = Date.now();
		console.log("useruid: " + this.state.user.uid);
		var userId = this.state.user.uid;
		var prayerlist = this.state.prayerlist;
	     var docRef = db.collection("rooms").doc("prayer").collection("private").doc(userId).collection("messages");
	    docRef.add({
              author: this.state.user.email,
			  userId: userId,
			  message: message,
			  date: dateNow,
			  recurring: false

			}) 
			.then(function(doc) {
				//alert("Document written with ID: " + doc.id);
						  console.log(docRef, message, "private", dateNow, userId, doc.id, false);
						  var item = {"docRef": docRef, "message": message, "messageType": "private", "date": dateNow, "id": doc.id, "recurring": false};
						  prayerlist.push(item);
					      

			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
										  //alert("error");

			});
		//this.setState({prayerlist: prayerlist});

	    //console.log(this.state.prayerlist.length);

		 
	}
	
   render() {
	if (this.state.user===null){   
		return (
		<div>
		    <form onSubmit={this.signInHandler}>
			 <div>Username</div>
			   <div><input required type="email" onChange = {(event) => this.onChangeHandlerUsername(event)}></input></div>
			 <div>Password</div>
			   <input type="password" required onChange = {(event) => this.onChangeHandlerPassword(event)}></input>
			 <div> 
			    <input type="submit" value="Sign in"/>
		     </div>		
			 </form>
			 
			 

		 </div>
		);
	}else{
		return (
		<div>
		     <div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>
			 <div>
			       <h1>New prayer</h1>
				   <div>Dear heavenly Father, </div>
				   <div contentEditable onInput = {(event) => this.newPrayerHandler(event)}></div>
				   <div>in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addPrayer(event)}}>
						Send
				   </button>
			 </div>
			 <div>
			    
			 </div>
		</div>
		);
	}
  }
}
export default App;
