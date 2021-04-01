import React, { Component, createRef } from "react";
import {auth, db, addToFirestore, deleteFromFirestore} from "../firebase";
import {Link} from "react-router-dom";
import './Compose.css';

class Compose extends Component {

 constructor(props) {
    super(props);
    this.myRefPrayer = React.createRef();
    this.state = {
	  newfast: null,
	  fastlist: [], 
	  inputField: null,
	  fastForm: false,
	  prayerForm: true
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
	
	onViewChange = (event) => {
		console.log(event.target.id);
		if (event.target.id==="prayer"){
			this.setState({fastForm: false, prayerForm:true});
		}
		else if (event.target.id==="fasting"){
			this.setState({fastForm: true, prayerForm: false});

		}
	}
	

	

  render() {
	 const {fastlist} = this.state;
	 return (
	    <div>
				           <Link to="/home">Back</Link>
				           
			<div className="fastpraybuttonContainer"> 
			   
			   <div className="pray">

					  Prayer
					  <input type="radio" id="prayer" name="view"  ref={this.myRefPrayer} value="prayer" checked={this.state.prayerForm} onChange = {(event) => this.onViewChange(event)}/>

			   </div>

			   <div className="fast">

					  Fasting
					  <input type="radio" id="fasting" name="view" value="fasting"  checked={this.state.fastForm} onChange = {(event) => this.onViewChange(event)}/>
 
			   </div>	   
           </div>
		   {this.state.fastForm
			   ?
		     <div>
                  
			       <h1>New fast</h1>
				   <div>Dear heavenly Father, help me to fast from  </div>
				   <div contentEditable onInput = {(event) => this.newFastHandler(event)}></div>
				   <div>for 60 days, in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addFast(event)}}>
						Send
				   </button>

			 </div>
			 :
			 <div>
			       <h1>New prayer</h1>
			       <blockquote>Proverbs 28:9. He that turneth away his ear from hearing the law, even his prayer [shall be] abomination.</blockquote>
				   <div>Dear heavenly Father, </div>
				   <div ref={this.inputField} contentEditable onInput = {(event) => this.newprayerHandler(event)}></div>
				   <div>in Jesus' name, Amen.</div>
				   <button  onClick = {(event) => {this.addPrayer(event)}}>
						Send
				   </button>

			 </div>
		   }
		  
		</div>
	 )
  }
}

export default Compose;
