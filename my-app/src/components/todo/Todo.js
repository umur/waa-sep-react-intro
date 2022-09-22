import React from "react";

export default function Todo(props){
  const onShowClicked = (id) => {
    props.setSelectedTotoId(id)
  }

  return(
    <>
    <hr />
    <li>UserID: {props.userId}</li>
    {/* <li>ID: {props.id}</li> */}
    <li>Title: {props.title}</li>
    {/* <li>Completed: {props.completed ? "YES" : "NO" }</li> */}
    <input type='button' value='Show' onClick={() => onShowClicked(props.id)} />
    </>
  )
}