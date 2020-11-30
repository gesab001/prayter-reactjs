import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
//import { Router } from "@reach/router";
import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
      Link
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Home from "./Home";

function Application() {
  const user = useContext(UserContext);
  return (
   user ?
	<Home></Home>
   :	
    <Router basename={process.env.PUBLIC_URL}>
      <div>
	     <ul>
		    <li> 
			   <Link to="/">Sign in</Link>
			</li>
		    <li> 
			   <Link to="/signup">Sign up</Link>
			</li>
		    <li> 
			   <Link to="/profile">Profile</Link>
			</li>
			<li> 
			   <Link to="/passwordreset">Password Reset</Link>
			</li>
		 </ul>
	  
	  <Switch>
	     <Route exact path="/"> <SignIn /> </Route>
	     <Route exact path="/signin"> <SignIn /> </Route>
		 <Route path="/signup"> <SignUp /> </Route>
		 <Route path="/profile"> <ProfilePage /> </Route>
		 <Route path="/passwordreset"> <PasswordReset /> </Route>

	  </Switch>
	  
	  </div>
	</Router>
  );
}

export default Application;
