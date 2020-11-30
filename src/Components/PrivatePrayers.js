import React, { Component, useContext, useState} from "react";
import { UserContext } from "../providers/UserProvider";
import { auth} from "../firebase";

const PrivatePrayers = () => {
    const user = useContext(UserContext);
/* 	const [listItems, setPrayer] = useState('');
	docRef.private
	 .get()
	 .then(function(querySnapshot) {
		 var prayers = [];
		 querySnapshot.forEach(function(doc){
			 
		     prayers.push(doc.data().message);
		 });
		 const listItems = prayers.map((item) => <li>{item}</li>);
         setPrayer(listItems);
	 })
     .catch(function(error) {
         console.log("Error getting documents: ", error);	 
	}); */
    return (
      <div>private
	  <ul>{user}</ul>
	   </div>
    );
  
}
export default PrivatePrayers;