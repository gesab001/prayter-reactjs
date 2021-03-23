import React, { Component } from "react";
import {auth} from "./firebase";
import "./App.css";
import Fasting from "./Components/Fasting";
import Prayer from "./Components/Prayer";
import Home from "./Components/Home";
import Compose from "./Components/Compose";
import SignUp from "./Components/SignUp";
import PasswordReset from "./Components/PasswordReset";

import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
      Link,
	  Redirect
} from "react-router-dom";
	 
class App extends Component {
	
 constructor(props) {
    super(props);

    this.state = {
     user: null,
     username: null,
	 password: null,
	 error: null,
	 view: "prayer",
	 signup: false,
	 forgotpassword: false
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
    
   signupHandler = () => {
	   	   console.log(this.state.signup);
	   this.setState({signup: true}); 
	   console.log(this.state.signup);
   } 
   
   showSignIn = () => {
	    this.setState({signup: false}); 
   }
   
   forgotPasswordHandler = () => {
	    this.setState({forgotpassword: true});  
   }
   
   turnOffPasswordReset = () => {
	   	    this.setState({forgotpassword: false});  

   } 
   
   render() {

	if (this.state.user===null){   
		return (
		<div>
   
				 
			{this.state.forgotpassword
				
				?  
				<div>forgot password
								<PasswordReset />
                    <button onClick = {(event) => {this.turnOffPasswordReset()}}>Back to sign in page
					  
					  </button>
				</div>
				:
				
				   <div>       { this.state.signup
					  ? 
					  <div>
					  <SignUp/>
					  Already have an account? <button onClick = {(event) => {this.showSignIn()}}>Sign in here
					  
					  </button></div>
					  :
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
					 <button onClick = {(event) => {this.signupHandler()}}>Sign up </button>
					 <button onClick = {(event) => {this.forgotPasswordHandler()}}>Forgot Password</button>
					
					 </div>
					
					}  
					</div>
			}

		 </div>
		);
	}else{
        const { prayerlist, view} = this.state;
		
		return (
		<Router basename={process.env.PUBLIC_URL}>
		  
		  <Switch>
		     <Route exact path="/"> <Redirect to="/home" /> </Route>
		  	 <Route exact path="/home"> <Home /> </Route>
			 <Route exact path="/compose/tweet"> <Compose /> </Route>
		     <Route exact path="/compose/tweet"> <Compose /> </Route>
		  </Switch>
		</Router>
		);
	}
  }
}
export default App;
