import React, { Component } from "react";
import {auth, db, addToFirestore, deleteFromFirestore, getWeek, amen, updateRenewFastItemFirestore} from "../firebase";
import "./Prayer.css";
import praystyle from './Prayer.module.css'; 
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
	  yearCounter: 0,
	  renew: false,
	  fastingperiod: 60,
	  newfast: null,
	  newfastid: null,
	  inputField: null
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
 
          this.unsubscribe2 = db.collection("rooms").doc("fasting").collection("private").doc(user).collection("messages").orderBy("date", "desc").onSnapshot(this.onDataChange2);

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
						console.log("Modified prayer: ", change.doc.data());
                                              var filtered = items.filter(function(value, index, arr){
						    return value.id!=item.id;
						});
						items = filtered;	
			                       items.unshift(item);
											
						
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
	    console.log("ondatachange2");
	    console.log(this.state.list2);
   }

   onDataChangeCounterHour(doc){
	   try {
		   var total = doc.data().total;   
		   console.log(total);
		   this.setState({hourCounter: total});   
       }catch(error){
		   console.log(error.message);
	   }
   }
   
   onDataChangeCounterDay(doc){
	  try{ 
	    var total = doc.data().total;   
        console.log(total);
        this.setState({dayCounter: total});   
      }catch(error){
		   console.log(error.message);		  
	  }
   }

   onDataChangeCounterMonth(doc){
	   try {
		   var total = doc.data().total;   
		   console.log(total);
		   this.setState({monthCounter: total});   
		}catch(error){
			console.log(error.message);
		}
   }
   
   onDataChangeCounterYear(doc){
	  try { 
	   var total = doc.data().total;   
       console.log(total);
       this.setState({yearCounter: total}); 
      }catch(error){
			console.log(error.message);
	  }   
   }

   onDataChangeCounterWeek(doc){
	  try{ 
		   var total = doc.data().total;   
		   console.log(total);
		   this.setState({weekCounter: total});   
      }catch(error){
 			console.log(error.message);
	  }
   }
   
   onDataChangeCounterDay(doc){
	 try {  
	   var total = doc.data().total;   
       console.log(total);
       this.setState({dayCounter: total});   
     }catch(error){
		console.log(error.message);
	 }
   }

    newFastHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var fast = event.currentTarget.innerText;
		  console.log(event.currentTarget);
		  this.setState({newfast: fast});
		  this.setState({inputField: event.currentTarget});

    };
      
      
      	onViewChange = (event) => {
		console.log(event.target.id);
		if (event.target.id==="prayer"){
			this.setState({fastForm: false, prayerForm:true});
		}
		else if (event.target.id==="fasting"){
			this.setState({fastForm: true, prayerForm: false});

		}
		else if (event.target.id==="fastingperiod"){
			console.log(event.currentTarget.value);
			this.setState({fastingperiod: event.currentTarget.value});

		}
	}
	    
  	showRenewItem = (event, message, numberofdays, docId) => {

         this.setState({renew: true, newfast: message, newfastId: docId, fastingperiod: numberofdays});
		 
	}

  	hideRenewItem = () => {

         this.setState({renew: false});
		 
	}
 	renewFast = (event, room, id) => {

		var room = "fasting";
		var userId = auth.currentUser.uid;
		var message = this.state.newfast;
		var dateNow = Date.now();
		var item = {"docId": this.state.newfastId, "userId": userId, "message": message, "date": dateNow, "numberofdays": this.state.fastingperiod.toString()};
		updateRenewFastItemFirestore(room, item);
		this.hideRenewItem();

		 
	}
  	replyItem = (event, room, id) => {
         alert("reply to prayer");

		 
	}

  	sayAmenItem = (room, id) => {
         alert("amen" + auth.currentUser.uid);
         alert("messageid" + id);
         amen(room, auth.currentUser.uid, id);

		 
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
 
	getEndDate = (timestamp, numberofdays) => {
		console.log(numberofdays);
		if(numberofdays==undefined){
		  numberofdays = 60;
		}
		var timestamp = timestamp + (numberofdays*24*60*60*1000);
		return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
		
	} 
	
	getDaysLeft = (timestamp, numberofdays) => {
		var now = new Date();
		if(numberofdays==undefined){
		  numberofdays = 60;
		}
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = end - now;
	//	console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60 / 24);
	}
	getHoursLeft = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60);
	}
	getMinutesLeft = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60);
	}
	getSecondsLeft = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = end - now;
		console.log("left:" + left);
		return Math.round(left / 1000);
	}

	getDaysExpired = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = now - end;
	//	console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60 / 24);
	}
	getHoursExpired = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = now - end;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60 /60);
	}
	getMinutesExpired = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = now - end;
		console.log("left:" + left);
		return Math.round(left / 1000 / 60);
	}
	getSecondsExpired = (timestamp, numberofdays) => {
		var now = new Date();
		var end = new Date(timestamp + (numberofdays*24*60*60*1000));
		var left = now - end;
		console.log("left:" + left);
		return Math.round(left / 1000);
	}
	
	isExpired = (timestamp, numberofdays) => {
		var result = this.getSecondsLeft(timestamp, numberofdays);
		console.log(result);
		if (result<0){
		  return true;
	    }else{
		  return false;	
		}
	}	
	
	convertIntToString = (numberofdays) => {
	    if(numberofdays==undefined){
		  numberofdays = 60;
		}
		return numberofdays.toString();
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
	     {this.state.renew &&  
	                 <div className={praystyle.modal}>

				  <div className={praystyle.modalContent}>
				    <span onClick = {(event) => {this.hideRenewItem()}} className={praystyle.close}>&times;</span>
  					 <h1>Fast renewal</h1>
				   <div>Dear heavenly Father, help me to  </div>
				   <div contentEditable  contentEditable onInput = {(event) => this.newFastHandler(event)}>{this.state.newfast}</div>
				   <div>for <span><input id="fastingperiod" onChange = {(event) => this.onViewChange(event)} type="number" value={this.state.fastingperiod}/></span> days, in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.renewFast(event)}}>
						Update
				   </button>
				  </div>

			    

			 </div>}
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
						   <button  onClick = {(event) => {this.sayAmenItem("prayer", item.id)}}>
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
									Share with Prayer Partners
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
						  <p>To: {this.getEndDate(item.item.date, item.item.numberofdays)}</p>
                          {this.isExpired(item.item.date, item.item.numberofdays)
				?
							 <div>
							  {this.state.days && <p>Fasting expired {this.getDaysExpired(item.item.date, item.item.numberofdays)} days ago</p>}
							  {this.state.hours && <p>Fasting expired {this.getHoursExpired(item.item.date, item.item.numberofdays)} hours ago</p>}
							  {this.state.minutes && <p>Fasting expired {this.getMinutesExpired(item.item.date, item.item.numberofdays)} minutes ago</p>}
							  {this.state.seconds && <p>Fasting expired {this.getSecondsExpired(item.item.date, item.item.numberofdays)} seconds ago</p>}							
							 </div>
							   
							:	  
							 <div> 
							  {this.state.days && <p>Days left: {this.getDaysLeft(item.item.date, item.item.numberofdays)}</p>}
							  {this.state.hours && <p>Hours left: {this.getHoursLeft(item.item.date, item.item.numberofdays)}</p>}
							  {this.state.minutes && <p>Minutes left: {this.getMinutesLeft(item.item.date, item.item.numberofdays)}</p>}
							  {this.state.seconds && <p>Seconds left: {this.getSecondsLeft(item.item.date, item.item.numberofdays)}</p>}
							 </div> 
					      }
						  <p>Dear heavenly Father, help me to {item.item.message} for {item.item.numberofdays} {item.item.numberofdays=="1" && <span>day</span>} {item.item.numberofdays!="1" && <span>days</span>}, in Jesus' name, Amen.</p>
						   <button style={mystyle}  onClick = {(event) => {this.deleteItem(event, "fasting", item.id)}}>
									Delete
							   </button>
						   <button style={mystyle}  onClick = {(event) => {this.showRenewItem(event, item.item.message, item.item.numberofdays, item.id)}}>
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
