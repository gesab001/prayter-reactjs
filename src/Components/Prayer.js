import React, { Component } from "react";
import {auth, db, addToFirestore, deleteFromFirestore, getWeek} from "../firebase";
import "./Prayer.css";

class Prayer extends Component {

 constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.onDataChange2 = this.onDataChange2.bind(this);
    this.onDataChangeCounterHour = this.onDataChangeCounterHour.bind(this);
    this.onDataChangeCounterDay = this.onDataChangeCounterDay.bind(this);
    this.onDataChangeCounterWeek = this.onDataChangeCounterWeek.bind(this);

    this.onDataChangeCounterMonth = this.onDataChangeCounterMonth.bind(this);    
    this.onDataChangeCounterYear = this.onDataChangeCounterYear.bind(this);
    this.state = {
	  newprayer: null,
	  list: [],
	  list2: [],
	  days: true,
	  hours: false,
	  minutes: false,
	  seconds: false,
	  daysLeft: null,
	  hoursLeft: null,
	  minutesLeft: null,
	  secondsLeft:null,
	  hourCounter: 0,
	  dayCounter: 0,
	  weekCounter: 0,
	  monthCounter: 0,
	  yearCounter: 0
    };

    this.unsubscribe = undefined;
	this.unsubscribe2 = undefined;
	this.unsubscribecounterHour = undefined;
	this.unsubscribecounterDay = undefined;
	this.unsubscribecounterWeek = undefined;
	this.unsubscribecounterMonth = undefined;
	this.unsubscribecounterYear = undefined;

  }

   componentDidMount = () => {
	      var dateNow = new Date();
	      var hour = dateNow.getHours().toString();
	      var day = dateNow.getDate().toString();
	      var week = getWeek();
	      var month = dateNow.getMonth().toString();
	      var year = dateNow.getFullYear().toString();
	      var prayerRoom = "prayer";
	      var user = auth.currentUser.uid;
	      var yearCollection = db.collection("rooms").doc(prayerRoom).collection("private").doc(user).collection("counters").doc("years").collection(year);
	      var monthCollection = yearCollection.doc("month").collection(month);
	      var dayCollection = monthCollection.doc("date").collection(day);
          this.unsubscribe = db.collection("rooms").doc(prayerRoom).collection("private").doc(user).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange);
 
          this.unsubscribe2 = db.collection("rooms").doc("fasting").collection("private").doc(user).collection("messages").orderBy("date", "desc").limit(3)
		  .onSnapshot(this.onDataChange2);

          this.unsubscribecounterYear = yearCollection.doc("count")
		  .onSnapshot(this.onDataChangeCounterYear);


          this.unsubscribecounterMonth = monthCollection.doc("count").onSnapshot(this.onDataChangeCounterMonth);

          this.unsubscribecounterWeek = yearCollection.doc("week").collection(week).doc("count").onSnapshot(this.onDataChangeCounterWeek);

          this.unsubscribecounterDay = dayCollection.doc("count").onSnapshot(this.onDataChangeCounterDay);
                    		            
          this.unsubscribecounterHour = dayCollection.doc("hour").collection(hour).doc("count").onSnapshot(this.onDataChangeCounterHour);
   };

   componentWillUnmount() {
     this.unsubscribe();
     this.unsubscribe2();
     this.unsubscribecounterHour();     
     this.unsubscribecounterDay();
     this.unsubscribecounterWeek();
     this.unsubscribecounterMonth();
     this.unsubscribecounterYear();

   }
   
   onDataChange(snapshot){
	   let items = this.state.list;
	   snapshot.docChanges().forEach(function(change) {
					var item = {"id": change.doc.id, "item": change.doc.data()};

					if (change.type === "added") {
						//console.log("New prayer: ", change.doc.data());	
						items.unshift(item);
						
					}
					if (change.type === "modified") {
						//console.log("Modified prayer: ", change.doc.data());
					}
					if (change.type === "removed") {
						//console.log("Removed prayer: ", change.doc.data());
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
                  //  console.log(item);
					if (change.type === "added") {
						//console.log("New prayer: ", change.doc.data());	
						items.unshift(item);
						
					}
					if (change.type === "modified") {
					//	console.log("Modified prayer: ", change.doc.data());
						
					}
					if (change.type === "removed") {
					//	console.log("Removed prayer: ", change.doc.data());
						var filtered = items.filter(function(value, index, arr){
						    return value.id!=item.id;
						});
						items = filtered;
					}
				});
	    this.setState({list2: items});
   }

   onDataChangeCounterHour(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({hourCounter: total});   
   }
   
   onDataChangeCounterDay(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({dayCounter: total});   
   }

   onDataChangeCounterMonth(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({monthCounter: total});   
   }
   
   onDataChangeCounterYear(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({yearCounter: total});   
   }

   onDataChangeCounterWeek(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({weekCounter: total});   
   }
   
   onDataChangeCounterDay(doc){
	   var total = doc.data().total;   
       console.log(total);
       this.setState({dayCounter: total});   
   }
      
  
  	renewItem = (event, room, id) => {
         alert("renew fast");

		 
	}

  	replyItem = (event, room, id) => {
         alert("reply to prayer");

		 
	}

  	sayAmenItem = (event, room, id) => {
         alert("amen");

		 
	} 
    
    viewCommentItem	  = (event, room, id) => {
         alert("show comments");	 
	} 

    makePublicItem	  = (event, room, id) => {
         alert("make public");	 
	} 

    makePrivateItem	  = (event, room, id) => {
         alert("private");	 
	} 

    prayerPartnerOnlyItem	= (event, room, id) => {
         alert("prayer partners only");	 
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
	
	getDaysLeft = (timestamp) => {
		var now = new Date();
		var end = new Date(timestamp + (60*24*60*60*1000));
		var left = end - now;
	//	console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60 / 24);
	}
	getHoursLeft = (timestamp) => {
		var now = new Date();
		var end = new Date(timestamp + (60*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60);
	}
	getMinutesLeft = (timestamp) => {
		var now = new Date();
		var end = new Date(timestamp + (60*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60);
	}
	getSecondsLeft = (timestamp) => {
		var now = new Date();
		var end = new Date(timestamp + (60*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000);
	}
	
	handleChange = (event) => {
		console.log(event.target.value);
		var unit = event.target.value;
		if (unit==="days"){
			this.setState({
				days: true,
				hours: false,
				minutes: false,
				seconds: false,
				
			});
		}else if (unit==="hours"){
			this.setState({
				days: false,
				hours: true,
				minutes: false,
				seconds: false,
				
			});			
		}else if (unit==="minutes"){
			this.setState({
				days: false,
				hours: false,
				minutes: true,
				seconds: false,
				
			});			
		}else if (unit==="seconds"){
			this.setState({
				days: false,
				hours: false,
				minutes: false,
				seconds: true,
				
			});			
		}
	}
  render() {
	 const {list, list2} = this.state;
	 const mystyle = {position: "relative", zIndex: "1"};
	 const emptySpaceStyle = {height: "calc(6.5625rem)"};
	 return (
	    <div >
             <h1>Prayer</h1>
			 <div>
			     <p>Total prayers this hour: {this.state.hourCounter}</p>
			     <p>Total prayers today: {this.state.dayCounter}</p>
			     <p>Total prayers this week: {this.state.weekCounter}</p>

			     <p>Total prayers this month: {this.state.monthCounter}</p>
			     <p>Total prayers this year: {this.state.yearCounter}</p>
			     <ul>
					{list &&
					  list.map((item, index) => (
						<li key={index}>
						  <div className="article">
						  <p>Submitted: {this.getStartDate(item.item.date)}</p>
						  <p>{item.item.message}</p>
						   <button  onClick = {(event) => {this.deleteItem(event, "prayer", item.id)}}>
									Delete
							   </button>
						   <button  onClick = {(event) => {this.replyItem(event, "prayer", item.id)}}>
									Comment
							   </button>
						   <button  onClick = {(event) => {this.sayAmenItem(event, "prayer", item.id)}}>
									Amen
							   </button>
						   <button  onClick = {(event) => {this.viewCommentItem(event, "prayer", item.id)}}>
									View Comment
							   </button>
						   <button  onClick = {(event) => {this.makePublicItem(event, "prayer", item.id)}}>
									Make Public
							   </button>
						   <button  onClick = {(event) => {this.makePrivateItem(event, "prayer", item.id)}}>
									Make Private
							   </button>
						   <button  onClick = {(event) => {this.prayerPartnerOnlyItem(event, "prayer", item.id)}}>
									Share with Prayer Partners only
							   </button>							   							   
						  </div>
						</li>
					  ))}
				  </ul>
			 </div>
             <h1>Fasting</h1>
             						  <span>Time left:</span><select  value={this.state.value} onChange={this.handleChange}>
						    <option value="days">days</option>
						    <option value="hours">hours</option>
						    <option value="minutes">minutes</option>
						    <option value="seconds">seconds</option>
						  </select>
			 <div >
			     <ul>
					{list2 &&
					  list2.map((item, index) => (
						<li key={index}>
						  <div  className="article" >
						  <p>From: {this.getStartDate(item.item.date)}</p>
						  <p>To: {this.getEndDate(item.item.date)}</p>

						  {this.state.days && <p>Days left: {this.getDaysLeft(item.item.date)}</p>}
						  {this.state.hours && <p>Hours left: {this.getHoursLeft(item.item.date)}</p>}
						  {this.state.minutes && <p>Minutes left: {this.getMinutesLeft(item.item.date)}</p>}
						  {this.state.seconds && <p>Seconds left: {this.getSecondsLeft(item.item.date)}</p>}

						  <p>{item.item.message}</p>
						   <button style={mystyle}  onClick = {(event) => {this.deleteItem(event, "fasting", item.id)}}>
									Delete
							   </button>
						   <button style={mystyle}  onClick = {(event) => {this.renewItem(event, "fasting", item.id)}}>
									Renew
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
