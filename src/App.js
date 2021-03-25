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
	    var phoneNumber = window.prompt("enter phone number");
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
		<div className="loginContainer">
            <div className="left">
               <p>Your ultimate app to overcoming sin. </p>
               <p>Join now to experience the power.</p>
            </div>
				 
			{this.state.forgotpassword
				
				?  
				<div>forgot password
								<PasswordReset />
                    <button onClick = {(event) => {this.turnOffPasswordReset()}}>Back to sign in page
					  
					  </button>
				</div>
				:
				
				   <div className="right">       { this.state.signup
					  ? 
					  <div>
					  <SignUp/>
					  Already have an account? <button onClick = {(event) => {this.showSignIn()}}>Sign in here
					  
					  </button></div>
					  :
					  <div className="emailPasswordForm">
							<form onSubmit={this.signInHandler}>
							 <div>Username</div>
							 <div><input required type="email" onChange = {(event) => this.onChangeHandlerUsername(event)}></input></div>
							 <div>Password</div>
							 <input type="password" required onChange = {(event) => this.onChangeHandlerPassword(event)}></input>
							 <div><input type="submit" value="Sign in"/></div>	
							 
							 <div>
							   {this.state.error !== null && (
								  <div >
									{window.alert(this.state.error)}
								  </div>
								)}

					 </div>
					 <button onClick = {(event) => {this.signupHandler()}}>Sign up </button>
					 <button onClick = {(event) => {this.forgotPasswordHandler()}}>Forgot Password</button>
				 	  <div>OR</div>				 
					 <div className="signInButtonsContainer">
						
					    <div className="signInButtons"  onClick={event => {
								  this.createUserWithPhoneNumberHandler(event);
								}} ><img className="smsButton"  src="https://image.flaticon.com/icons/png/128/733/733533.png"/>
						</div>						
						<div className="signInButtons" onClick = {(event) => {this.signInWithGoogle()}}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 48 48" ><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div>
						<div className="signInButtons" onClick = {(event) => {this.signInWithGithub()}} ><svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
						<div className="signInButtons" onClick = {(event) => {this.signInWithYahoo()}}><svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									
									<defs>
										<polygon id="path-1" points="0.171073913 0.0931111111 9.4455087 0.0931111111 9.4455087 9.92442222 0.171073913 9.92442222"/>
									</defs>
									<g id="favicon_y19_32x32_custom" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<rect fill="#6001D2" x="0" y="0" width="32" height="32"/>
										<g id="y!" transform="translate(5.000000, 6.000000)">
											<polygon id="Fill-1" fill="#FFFFFF" points="9.70835927 5 7.04604411 11.4197051 4.40657437 5 0 5 4.91176421 16.0265583 3.14442407 20 7.45914574 20 14 5"/>
											<g id="!" transform="translate(12.000000, 0.000000)">
												<path d="M2.88747609,10.8773778 C1.30323696,10.8773778 0.114280435,12.0684889 0.114280435,13.4547111 C0.114280435,14.8184889 1.25660652,15.9449333 2.79421522,15.9449333 C4.37917174,15.9449333 5.56741087,14.7756 5.56741087,13.3678222 C5.56741087,11.9818222 4.42580217,10.8773778 2.88747609,10.8773778" id="Fill-2" fill="#FFFFFF"/>
												<g id="Group-6" transform="translate(1.434783, 0.000000)">
													<mask id="mask-2" fill="white">
														<use xlinkHref="#path-1"/>
													</mask>
													<g id="Clip-5"/>
													<polygon id="Fill-4" fill="#FFFFFF" mask="url(#mask-2)" points="4.55194348 0.0930888889 0.171073913 9.92442222 5.06487826 9.92442222 9.4455087 0.0930888889"/>
												</g>
											</g>
										</g>
									</g>
								</svg>
						</div>
						<div className="signInButtons" onClick = {(event) => {this.signInWithTwitter()}}>
						  <svg viewBox="0 0 24 24" width="32px" height="32px" className="twitter"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
						</div>
						<div className="signInButtons" onClick = {(event) => {this.signInWithMicrosoft()}}>
						     <svg xmlns="http://www.w3.org/2000/svg" width="108" height="23" viewBox="72 72 337 74" preserveAspectRatio="xMidYMin slice">
								<g data-name="MS-symbol">
									<clipPath id="a">
										<path transform="matrix(1 0 0 -1 0 216)" d="M0 216h482V0H0z"></path>
									</clipPath>
									<g clip-path="url(#a)">
										<path d="M106.214 106.214H71.996V71.996h34.218z" fill="#f25022"></path>
										<path d="M143.993 106.214h-34.218V71.996h34.218z" fill="#7fba00"></path>
										<path d="M106.214 143.993H71.996v-34.218h34.218z" fill="#00a4ef"></path>
										<path d="M143.993 143.993h-34.218v-34.218h34.218z" fill="#ffb900"></path>
									</g>
								</g>
							</svg>
						</div>
	                 </div> 
					 </form>
					 
					 

					
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
