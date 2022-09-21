import * as React from "react";
import {render} from "react-dom";
import axios from "axios"
import {useEffect, useState} from "react";
import Todo, {TodoInterface} from "./Todo";
import {listTodos} from "../services/toDoService"

export default function TodosComponent() {
    const initialTodos = [{
            "userId": 3,
            "id": 58,
            "title": "testing",
            "completed": false
        }]
    const [todos, setTodos] = useState(initialTodos)
    const fetchTodos = async () => {
        //let result = await axios.get("https://jsonplaceholder.typicode.com/todos/")
        await listTodos().then(data => setTodos(data))
    }

    useEffect(() => {
        fetchTodos()
    }, [1])
    return (
        !!todos?
        <div >

            {
                todos?.map((todo) =>
                    <Todo props={todo}></Todo>
                )

            }

        </div> : null
    )


}
