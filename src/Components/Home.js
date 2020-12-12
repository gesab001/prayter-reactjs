import React, { Component} from "react";
import {auth, db} from "../firebase";
import Fasting from "./Fasting";
import Prayer from "./Prayer";

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
	  inputField: null,
	  view: "prayer"
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
  
     onViewChange = (event) => {
	   event.preventDefault();
	   this.setState({view: event.currentTarget.value});
	   

   }
   
/*    	renderSwitch = (param) =>{
	  switch(param) {
		case 'fasting':
		  return <Fasting />;
		default:
		  return <Prayer room={param}/>;
	  }
    } */
	
   renderSwitch = (param) =>{
	  return <Prayer room={param}/>;
   }
  
  setActiveButton = (event) => {
      alert("hello");
  }
  
  render(){	
  	 const {fastlist, view} = this.state;

	  return (
		   <div>
			     <div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>

					 {/*              <h3>My prayers</h3>
			 <div> 
			   <label>
			      Prayer
			      <input type="radio" id="prayer" name="view" value="prayer" onChange = {(event) => this.onViewChange(event)}/>
			   </label>	  
			   <label>
			      Fasting
			      <input type="radio" id="fasting" name="view" value="fasting" onChange = {(event) => this.onViewChange(event)}/>
			   </label>	 
  </div> */}
			 {this.renderSwitch(view)}			 
				<div class="bottom-menu">
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
					
					<nav class="nav-menu">
						<div class="nav-button"  onClick = {(event) => {this.setActiveButton(event)}}>
						   <svg class="svg-nav-button"  viewBox="0 0 24 24" >
							<g><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g>
						   </svg>
						</div>
						<div class="nav-button" onClick = {(event) => {this.setActiveButton(event)}}>
						   <svg class="svg-nav-button"  viewBox="0 0 24 24" >
							 <g>
								<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
								
								</path>
							 </g>
						   </svg>
						</div>
						<div class="nav-button" onClick = {(event) => {this.setActiveButton(event)}}>
						   <svg class="svg-nav-button"  viewBox="0 0 24 24" >
							 <g>
								<path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z">
								
								</path>
							 </g>
						   </svg>
						</div>
						<div class="nav-button" onClick = {(event) => {this.setActiveButton(event)}}>
						   <svg class="svg-nav-button" viewBox="0 0 24 24" >
							 <g>
								<path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z">
								</path>
							 </g>
						   </svg>
						</div>
					</nav>	
					
				</div>
					
		   </div>
		);
  }
}
export default Home;