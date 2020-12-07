import React, { Component} from "react";
import {auth, db} from "../firebase";

import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
      Link
} from "react-router-dom";

class Home extends Component {
	
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

	getDate = (timestamp) => {
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	}
 
	getEndDate = (timestamp) => {
		var timestamp = timestamp + (60*24*60*60*1000);
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	}    

  signOutHandler = (event) => {
	  auth.signOut();
	  window.location.reload(false);
  }
  
  render(){	
  	 const {fastlist} = this.state;

	  return (
		   <div>
			     <div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>

             <h3>My prayers</h3>
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
			<div class="floating-button-container"> 
				<Link to="/compose/tweet">
					<div class="floating-button">
					   <svg viewBox="0 0 24 24">
						<g>
						   <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
						   
						   </path>
						</g>
					   </svg>
					</div>
                </Link>				
			</div>	
		   </div>
		);
  }
}
export default Home;