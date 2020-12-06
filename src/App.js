import React, { Component } from "react";
import {auth} from "./firebase";
import "./App.css";
import Fasting from "./Components/Fasting";
import Prayer from "./Components/Prayer";

	 
class App extends Component {
	
 constructor(props) {
    super(props);

    this.state = {
     user: null,
     username: null,
	 password: null,
	 error: null,
	 view: "prayer"
    };

  }

   componentDidMount = () => {

	 auth.onAuthStateChanged(userAuth => {
		if (userAuth!=null){
      	  console.log(userAuth.uid);
		  this.setState({user: userAuth});	
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
   
   onViewChange = (event) => {
	   event.preventDefault();
	   this.setState({view: event.currentTarget.value});
	   

   }
   
   signOutHandler = (event) => {
	  auth.signOut();
	  this.setState({user: null});
	  window.location.reload(false);
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
			<div class="floating-button-container"> 
				<div class="floating-button">
				   <svg viewBox="0 0 24 24">
					<g>
					   <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
					   
					   </path>
					</g>
				   </svg>
				</div>			
			</div>	
		</div>
		);
	}
  }
}
export default App;
