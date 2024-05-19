import React, { useState } from "react";
import "../Body/Body.css";

import { add } from "../../Redux-Toolkit/Slice";
import { useDispatch } from "react-redux";

const Body = () => {

  const dispatch = useDispatch();

  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");


const HandleAdd =()=>{
  dispatch(add({title: Title, notes: Notes }));

  setNotes("");
  setTitle("");
};




  return (
    <div className="BodyCointainer">
      
      <div className="body">
        <input
          type="text"
          placeholder="Enter Title"
          className="Title"
          onChange={(e)=>setTitle(e.target.value)}
          value={Title}
        />
        <hr className="horizental_line" />

        <textarea
          className="Notes"
          placeholder="Notes.."
          cols="30"
          value={Notes}
          onChange={(e)=>setNotes(e.target.value)}
        />

        <div className="addbutton" onClick={()=>HandleAdd()}>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>


      
    </div>
  );
};

export default Body;
