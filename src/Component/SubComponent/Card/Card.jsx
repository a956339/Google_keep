import React from "react";
import "../Card/Card.css";

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Redux-Toolkit/Slice";
const Card = () => {
  const item = useSelector((state) => state.todo.visibleTodos);
  const dispatch = useDispatch();


const removeTodo=(val)=>{
dispatch(remove(val));


}

console.log(item);

  return (
    <div>
      {item.length === 0 ? (
        <p style={{color:"red",textAlign:"center"}}>No data available</p>
      ) : (
        <div className="CardCointainer">
          {item.map((val, index) => {

             return(
              <div className="Card" key={index}>
              <p className="Card_Title">{val.title}</p>
              <hr />
              <p className="Card_Notes">{val.notes}</p>
              <div className="DeleteIcon" onClick={()=>removeTodo(index)}>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
             )

          })}
        </div>
      )}
    </div>
  );
};

export default Card;
