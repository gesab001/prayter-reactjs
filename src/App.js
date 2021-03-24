import React, { Component } from "react";
import {auth} from "./firebase";
import "./App.css";
import Fasting from "./Components/Fasting";
import Prayer from "./Components/Prayer";
import Home from "./Components/Home";
import Compose from "./Components/Compose";
import SignUp from "./Components/SignUp";
import PasswordReset from "./Components/PasswordReset";
import GoogleLogin from 'react-google-login';
import firebase from "firebase/app";
import {googleSignInPopup} from './googleSignin';
import {githubSignin} from './githubSignin';
import {yahooSignin} from './yahooSignin';
import {twitterSignInPopup} from './twitterSignin';
import {microsoftSignInPopup} from './microsoftSignin';


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
	 forgotpassword: false,
	 phoneNumber: null,
	 verificationCode: null,
	 confirmationResult: undefined
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

   googleProvider = () => {
	  // [START auth_google_provider_create]
	  var provider = new firebase.auth.GoogleAuthProvider();
	  // [END auth_google_provider_create]

	  // [START auth_google_provider_scopes]
	  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
 	  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

	  // [END auth_google_provider_scopes]
	  
	  // [START auth_google_provider_params]
	  provider.setCustomParameters({
		'login_hint': 'user@example.com'
	  });
	  // [END auth_google_provider_params]
	  return provider;
	}
   githubProvider = () => {
	   var provider = new firebase.auth.GithubAuthProvider();
	   return provider;
   } 
 
   yahooProvider = () => {
       var provider = new firebase.auth.OAuthProvider('yahoo.com');
	   return provider;  
   } 
   
   twitterProvider = () => {
	   var provider = new firebase.auth.TwitterAuthProvider();
	   return provider;
   }

   microsoftProvider = () => {
		var provider = new firebase.auth.OAuthProvider('microsoft.com');	   
		return provider;
   }

   signInWithMicrosoft = () => {
	   var provider = this.microsoftProvider();
	   microsoftSignInPopup(provider);
   }
       
   signInWithTwitter = () => {
	   var provider = this.twitterProvider();
	   twitterSignInPopup(provider);
   }   
   signInWithYahoo = () => {
	   var provider = this.yahooProvider();
	   yahooSignin(provider);
   }  
    
   signInWithGithub = () => {
	   var provider = this.githubProvider();
	   githubSignin(provider);
   }  
   
   signInWithGoogle = () => {
	   var provider = this.googleProvider();
	   googleSignInPopup(provider);
   }
   
   signInWithPhonenumber = (code) => {
	   this.state.confirmationResult.confirm(code).then((result) => {
		  // User signed in successfully.
		  this.setState({user: result.user});
		  // ...
		}).catch((error) => {
		  // User couldn't sign in (bad verification code?)
		  // ...
		  console.log(error);
		});
   }
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

   createUserWithPhoneNumberHandler = (event, phoneNumber) => {
		event.preventDefault();
		const appVerifier = new firebase.auth.RecaptchaVerifier(event.target, {
		  'size': 'invisible',
		  'callback': (response) => {
			// reCAPTCHA solved, allow signInWithPhoneNumber.
			console.log(response);
		  }
		});
		firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
			.then((confirmationResult) => {
			  // SMS sent. Prompt user to type the code from the message, then sign the
			  // user in with confirmationResult.confirm(code).
			  var code = window.prompt("code: "); 
			  confirmationResult.confirm(code);

			  // ...
			}).catch((error) => {
			  // Error; SMS not sent
			  // ...
         	  this.setState({error: error.message});

			});
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
   
   onChangeHandler = event => {
      const { name, value } = event.currentTarget;
	  if (name==="userPhoneNumber"){
		  
		  this.setState({phoneNumber: value});	
	  } else if (name==="verificationCode"){
		  this.setState({verificationCode: value});
	  }
  };
  
   render() {
     const responseGoogle = (response) => {
		  console.log(response);

     }
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
					 
					 <div>
					   {this.state.error !== null && (
						  <div >
							{window.alert(this.state.error)}
						  </div>
						)}
					        <form>
							  <label htmlFor="userPhoneNumber" className="block">
								Phone Number:
							  </label>
							   <input 
								  type="number"
								  value={this.state.phoneNumber}
								  id="userPhoneNumber"
								  name="userPhoneNumber"
								  onChange={event => this.onChangeHandler(event)}
							   />
							   <button
								  onClick={event => {
								  this.createUserWithPhoneNumberHandler(event, this.state.phoneNumber);
								}}
								> Sign in with Phone Number</button>
							</form>
					 </div>
				 					 
					 <div>
						<button onClick = {(event) => {this.signInWithGoogle()}}>Sign in with Google</button>
						<button onClick = {(event) => {this.signInWithGithub()}}>Sign in with Github</button>
						<button onClick = {(event) => {this.signInWithYahoo()}}>Sign in with Yahoo</button>
						<button onClick = {(event) => {this.signInWithTwitter()}}>Sign in with Twitter</button>
						<button onClick = {(event) => {this.signInWithMicrosoft()}}>Sign in with Microsoft</button>
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
