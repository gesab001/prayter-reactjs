import React, {useState} from "react";
import { Link } from "react-router-dom";
import {auth} from "../firebase";

const CreatePrayer = () => {
   
  return (
    <div>
	   <div id="newprayer" style="width:100%" contenteditable="true"></div>
    </div>
  );
};
export default CreatePrayer;