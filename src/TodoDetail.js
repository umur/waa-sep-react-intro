import axios from "axios"
import { useEffect, useState } from "react"

export default function TodoDetail(props){

    const [todoState,setTodoState] = useState({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      });

    const fetchTodo = async ()=>{
       const result= await axios.get("https://jsonplaceholder.typicode.com/todos/"+ props.selectedTodoId);
        setTodoState(result.data);
    }

    useEffect(()=>{
        fetchTodo();
    },[props.selectedTodoId])

    return (
        <div>
            <h4>User Id : {todoState.userId}</h4>
            <h4>Id : {todoState.id}</h4>
            <h4>Title : {todoState.title}</h4>
            <h4>Completed : {todoState.completed ? 'COMPLETED' : 'NOT COMPLETED'}</h4>
            *************************************
        </div>
    )

}