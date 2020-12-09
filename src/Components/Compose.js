import React, { Component, createRef } from "react";
import {auth, db, addToFirestore, deleteFromFirestore} from "../firebase";
import {Link} from "react-router-dom";

class Compose extends Component {

 constructor(props) {
    super(props);

    this.state = {
	  newfast: null,
	  fastlist: [], 
	  inputField: null
    };
	
	//this.inputField = React.createRef();

  }

    newFastHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var fast = "Dear heavenly Father, help me to fast from " +  event.currentTarget.innerHTML + " for 60 days, in Jesus' name, Amen";
		  this.setState({newfast: fast});
		  this.setState({inputField: event.currentTarget});

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
		this.state.inputField.innerHTML = "";


		 
	}

    newprayerHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var prayer = "Dear heavenly Father,  " +  event.currentTarget.innerHTML + " in Jesus' name, Amen";
		  this.setState({message: prayer});
		  this.setState({inputField: event.currentTarget});
		  
    };
	
	addPrayer = (event) => {
		console.log("add: " + this.state.message);
		var room = "prayer";
		var author = auth.currentUser.email;
		var userId = auth.currentUser.uid;
		var message = this.state.message;
		var dateNow = Date.now();
		var recurring = false;
		var item = {"author": author, "userId": userId, "message": message, "date": dateNow, "recurring": recurring};
		addToFirestore(room, item);
		this.state.inputField.innerHTML = "";

		 
	}
	

	

  render() {
	 const {fastlist} = this.state;
	 return (
	    <div>
				           <Link to="/home">Back</Link>
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

			       <h1>New fast</h1>
				   <div>Dear heavenly Father, help me to fast from  </div>
				   <div contentEditable onInput = {(event) => this.newFastHandler(event)}></div>
				   <div>for 60 days, in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addFast(event)}}>
						Send
				   </button>

			 </div>
			 
			 		   <div>
			       <h1>New prayer</h1>
				   <div>Dear heavenly Father, </div>
				   <div ref={this.inputField} contentEditable onInput = {(event) => this.newprayerHandler(event)}></div>
				   <div>in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addPrayer(event)}}>
						Send
				   </button>

			 </div>

		  
		</div>
	 )
  }
}

export default Compose;