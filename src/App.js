import React, { Component, createContext, } from "react";
import {auth} from "./firebase";
import "./App.css";

export const UserContext = createContext({ user: null });

class App extends Component {
	
   state = {
	 user: null,
     username: null,
	 password: null
   };
   componentDidMount = () => {
   
	 auth.onAuthStateChanged(userAuth => {
      	if (userAuth!=null) {
			console.log(userAuth.uid);
		  this.setState({user: userAuth.uid});
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
	  auth.signInWithEmailAndPassword(this.state.username, this.state.password).catch(error => {
      console.log("Error signing in with password and email", error);
	  });
   }
   
   signOutHandler = (event) => {
	  auth.signOut();
	  this.setState({user: null});
	  window.location.reload(false);
   }
	
   render() {
	if (this.state.user===null){   
		return (
		<div>
			 <div>Username</div>
			   <input type="email"  onChange = {(event) => this.onChangeHandlerUsername(event)}></input>
			 <div>Password</div>
			   <input type="password"  onChange = {(event) => this.onChangeHandlerPassword(event)}></input>
			 <div className="button" onClick = {(event) => {this.signInHandler(event)}}>Sign in </div>
			 
			 
			 

		 </div>
		);
	}else{
		return (
		<div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>
		);
	}
  }
}
export default App;
