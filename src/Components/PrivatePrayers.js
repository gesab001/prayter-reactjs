import React, { Component, useContext, useState} from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, streamPrivatePrayers} from "../firebase";

const PrivatePrayers = () => {
    const docRef = useContext(UserContext);
	const [listItems, setPrayer] = useState('');
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
	});
    return (
      <div>private
	  <ul>{listItems}</ul>
	   </div>
    );
  
}
export default PrivatePrayers;