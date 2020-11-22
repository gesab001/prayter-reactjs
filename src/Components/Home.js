import React, { Component, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, getPrivatePrayers} from "../firebase";
import ProfilePage from "./ProfilePage";
import PrivatePrayers from "./PrivatePrayers";

const Home = () => {
  const user = useContext(UserContext);
  return (
	   <div>
	    <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
	    <ProfilePage />
	    <PrivatePrayers />
       </div>
    );
}
export default Home;