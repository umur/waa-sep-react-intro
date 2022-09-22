import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TodoDetail(props){

  const [todoState, setTodoState] = useState({});
  const fetchTodo = async() => {
    const res = await axios.get("/todos/"+props.selectedTotoId)
    setTodoState(res.data);
  }

  useEffect(() => {
    fetchTodo();
  },[props.selectedTotoId])

  return(
    <>
    <hr />
    <li>UserID: {todoState.userId}</li>
    <li>ID: {todoState.id}</li>
    <li>Title: {todoState.title}</li>
    <li>Completed: {todoState.completed ? "YES" : "NO" }</li>
    </>
  )
}