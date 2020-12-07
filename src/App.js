import React, { Component } from "react";
import {auth} from "./firebase";
import "./App.css";
import Fasting from "./Components/Fasting";
import Prayer from "./Components/Prayer";
import Home from "./Components/Home";

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
		<Router basename={process.env.PUBLIC_URL}>
		  
		  <Switch>
		     <Route exact path="/"> <Redirect to="/home" /> </Route>
		  	 <Route exact path="/home"> <Home /> </Route>
			 <Route exact path="/compose/tweet"> <Fasting /> </Route>
		  </Switch>
		</Router>
		);
	}
  }
}
export default App;
