import React, { Component, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, generateUserDocument} from "../firebase";

const ProfilePage = () => {
    //const docRef = useContext(UserContext);
	//console.log("profilepage: ", docRef.user);
	//const user = docRef.user;
    return (
      <div>profile page </div>
    );
  
}
export default ProfilePage;