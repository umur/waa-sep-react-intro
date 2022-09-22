import React from "react";
import Todo from "./Todo";

export default function WrapperTodo(props){
  return(
    props.todos.map(item => <Todo {...item} setSelectedTotoId={props.setSelectedTotoId} /> )
  )
}