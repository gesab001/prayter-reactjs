import React, { Component, createContext, } from "react";
import {auth, db} from "./firebase";
import "./App.css";
import Fasting from "./Components/Fasting";
import Prayer from "./Components/Prayer";

export const UserContext = createContext({ user: null });


  	 
class App extends Component {
	
 constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
     user: null,
     username: null,
	 password: null,
	 error: null,
	 newprayer: null,
	 prayerlist: [],
	 view: "prayer"
    };

    this.unsubscribe = undefined;
  }

   componentDidMount = () => {

	 auth.onAuthStateChanged(userAuth => {
		if (userAuth!=null){
      	  console.log(userAuth.uid);
		  this.setState({user: userAuth});	
          this.unsubscribe = db.collection("rooms").doc("prayer").collection("private").doc(this.state.user.uid).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange);
		  
			
	
		}		  
     });

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
   
   onViewChange = (event) => {
	   event.preventDefault();
	   this.setState({view: event.currentTarget.value});
	   

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
		//var prayerlist = this.state.prayerlist;
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
	renderSwitch = (param) =>{
	  switch(param) {
		case 'fasting':
		  return <Fasting />;
		default:
		  return <Prayer />;
	  }
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
        const { prayerlist, view} = this.state;
		
		return (
		<div>
		     <div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>
			 <div> 
			   <label>
			      Prayer
			      <input type="radio" id="prayer" name="view" value="prayer" onChange = {(event) => this.onViewChange(event)}/>
			   </label>	  
			   <label>
			      Fasting
			      <input type="radio" id="fasting" name="view" value="fasting" onChange = {(event) => this.onViewChange(event)}/>
			   </label>	 
			 </div>	   

			 {this.renderSwitch(view)}
			
			 
		</div>
		);
	}
  }
}
export default App;
