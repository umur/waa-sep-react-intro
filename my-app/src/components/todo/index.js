import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoDetail from "./TodoDetail";
import WrapperTodo from "./WrapperTodo";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);
  const [selectedTotoId, setSelectedTotoId] = useState('1');

  const fetchTodo = async() => {
    let res = await axios.get('/todos');
    setTodos(res.data.slice(0,10));
  }

  useEffect(() =>{
    fetchTodo();
  },[])

  return(
    <div>
      <ul>
          <WrapperTodo todos={todos}  setSelectedTotoId={setSelectedTotoId}/>
      </ul>
      ==============================================
      <TodoDetail selectedTotoId={selectedTotoId}/>
    </div>
  )
}