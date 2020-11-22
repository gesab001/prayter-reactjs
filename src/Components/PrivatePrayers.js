import React, { Component, useContext, useState} from "react";
import { UserContext } from "../providers/UserProvider";
import { auth, streamPrivatePrayers} from "../firebase";

const PrivatePrayers = () => {
    const docRef = useContext(UserContext);
	const [prayers, setPrayer] = useState('');
	docRef.private.onSnapshot()
		.then(querySnapshot => {
			const prayers = [];
			querySnapshot.forEach(doc => {
				//console.log(doc.id, " => ", doc.data());
				var message = doc.data().message;
				var id = doc.id;
				var userId = doc.data().userId;
				var date = doc.data().date;
				var recurring = doc.data().recurring;
				//showItem(docRef, message, "private", date, userId, id, recurring);
				var item = {"message": message, "messageType": "private", "date": date, "userId": userId, "recurring": recurring};
                
                prayers.push(item);
			});
			setPrayer(prayers);
		});
	//const listItems = prayers.map((item) => <li>{item.message}</li>);
    return (
      <div>private
	  {prayers.length}
	   </div>
    );
  
}
export default PrivatePrayers;