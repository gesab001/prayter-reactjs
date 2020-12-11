import React, { Component } from "react";
import {auth, db, addToFirestore, deleteFromFirestore} from "../firebase";
import "./Prayer.css";

class Prayer extends Component {

 constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.onDataChange2 = this.onDataChange2.bind(this);

    this.state = {
	  newprayer: null,
	  list: [],
	  list2: []
    };

    this.unsubscribe = undefined;
	this.unsubscribe2 = undefined;

  }

   componentDidMount = () => {
          this.unsubscribe = db.collection("rooms").doc("prayer").collection("private").doc(auth.currentUser.uid).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange);
          this.unsubscribe2 = db.collection("rooms").doc("fasting").collection("private").doc(auth.currentUser.uid).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange2);
   };

   componentWillUnmount() {
     this.unsubscribe();
     this.unsubscribe2();

   }
   
   onDataChange(snapshot){
	   let items = this.state.list;
	   snapshot.docChanges().forEach(function(change) {
					var item = {"id": change.doc.id, "item": change.doc.data()};

					if (change.type === "added") {
						console.log("New prayer: ", change.doc.data());	
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
	    this.setState({list: items});
   }
   
   onDataChange2(snapshot){
	   let items = this.state.list2;
	   snapshot.docChanges().forEach(function(change) {
					var item = {"id": change.doc.id, "item": change.doc.data()};

					if (change.type === "added") {
						console.log("New prayer: ", change.doc.data());	
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
	    this.setState({list2: items});
   }

  
  	deleteItem = (event, room, id) => {
		var userconfirm = prompt("type: cancel this item");
		if (userconfirm=="cancel this item"){
			console.log("remove: " + id);
			var userId = auth.currentUser.uid;
			deleteFromFirestore(room, userId, id);
			alert("item deleted");
		}else{
			alert("item not deleted");
		}

		 
	}
	getStartDate = (timestamp) => {
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	}
 
	getEndDate = (timestamp) => {
		var timestamp = timestamp + (60*24*60*60*1000);
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
	} 
  render() {
	 const {list, list2} = this.state;
	 const mystyle = {position: "relative", zIndex: "1"};
	 const emptySpaceStyle = {height: "calc(6.5625rem)"};
	 return (
	    <div >
             <h1>Prayer</h1>
			 <div>
			     <ul>
					{list &&
					  list.map((item, index) => (
						<li>
						  <div class="article">
						  <p>Submitted: {this.getStartDate(item.item.date)}</p>
						  <p>{item.item.message}</p>
						   <button  onClick = {(event) => {this.deleteItem(event, "prayer", item.id)}}>
									Delete
							   </button>
						  </div>
						</li>
					  ))}
				  </ul>
			 </div>
             <h1>Fasting</h1>
			 <div >
			     <ul>
					{list2 &&
					  list2.map((item, index) => (
						<li>
						  <div class="article" >
						  <p>From: {this.getStartDate(item.item.date)}</p>
						  <p>To: {this.getEndDate(item.item.date)}</p>
						  <p>{item.item.message}</p>
						   <button style={mystyle}  onClick = {(event) => {this.deleteItem(event, "fasting", item.id)}}>
									Delete
							   </button>
						  </div>
						 
						</li>
					  ))}
				  </ul>
				  
				  <div style={emptySpaceStyle}></div>
				  
			 </div>		  
		</div>
	 )
  }
}

export default Prayer;