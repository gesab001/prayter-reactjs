import React, {useState} from "react";
import { Link } from "react-router-dom";
import {addPrayer} from "../firebase";

const CreatePrayer = ()  => {
	const [prayer, setPrayer] = useState('');
    const [html, setHTML] = useState('');
	const createPrayer = (event, prayer) => {
		event.preventDefault();
		if(html.innerHTML!=""){
		  console.log("prayer: " + prayer);
		  html.innerHTML = "";
		  addPrayer(prayer);
		}else{
			alert("your forgot to type something");
		}
    };

    const onChangeHandler = (event) => {
          //console.log(event.currentTarget.innerHTML);
		  var prayer = "Dear heavenly Father, " +  event.currentTarget.innerHTML + ", in Jesus' name, Amen";
		  setPrayer(prayer);
		  setHTML(event.currentTarget);
    };
	  
	return (
	   <div>
	   
	   <h1>New prayer</h1>
	   <div>Dear heavenly Father, </div>
	   <div contentEditable onInput = {(event) => onChangeHandler(event)}></div>
	   <div>in Jesus' name, Amen.</div>
	   <button  onClick = {(event) => {createPrayer(event, prayer)}}>
            Send
       </button>
	   </div>
	)	
}

export default CreatePrayer;