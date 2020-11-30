import React, { Component, createContext, } from "react";
import {auth} from "./firebase";
import "./App.css";

export const UserContext = createContext({ user: null });

class App extends Component {
	
   state = {
	 user: null,
     username: null,
	 password: null,
	 error: null
   };
   componentDidMount = () => {
   
	 auth.onAuthStateChanged(userAuth => {
		if (userAuth!=null){
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
	   event.preventDefault();
	  auth.signInWithEmailAndPassword(this.state.username, this.state.password).catch(error => {
      console.log("Error signing in with password and email", error);
	  this.setState({error: error});
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
		return (
		<div className="button" onClick = {(event) => {this.signOutHandler(event)}}>Sign out </div>
		);
	}
  }
}
export default App;
