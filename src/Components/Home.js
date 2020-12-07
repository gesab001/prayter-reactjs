import React, { Component} from "react";
import {auth} from "../firebase";

import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
      Link
} from "react-router-dom";

class Home extends Component {
	

  signOutHandler = (event) => {
	  auth.signOut();
	  window.location.reload(false);
  }
  
  render(){	
	  return (
		   <div>
		     <h3>Sign out </h3>
             <h3>My prayers</h3>
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
		   </div>
		);
  }
}
export default Home;